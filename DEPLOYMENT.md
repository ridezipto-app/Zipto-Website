# Full Deployment Guide for Zipto-Website Frontend (Git Clone Approach)

This document provides a complete, step-by-step guide to deploying the React/Vite frontend to your Amazon EC2 instance (`13.201.95.50`) by cloning directly from your GitHub repository. It also covers configuring the domain `ridezipto.com` using Nginx and SSL (Let's Encrypt).

---

## Step 1: DNS Configuration
Before requesting an SSL certificate, ensure your domain points to your EC2 instance.
1. Log in to your Domain Registrar.
2. Go to the DNS Management section.
3. Add or update the following **A Records**:
   - **Host:** `@` (or leave empty for `ridezipto.com`) → **Value:** `13.201.95.50`
   - **Host:** `www` → **Value:** `13.201.95.50`
*(Note: DNS propagation can take a few minutes to a few hours).*

---

## Step 2: Server Setup & Dependencies
Connect to your EC2 instance and install the required tools (Node.js, Git, Nginx).
1. Connect via SSH:
   ```bash
   ssh -i /path/to/your-key.pem ubuntu@13.201.95.50
   ```
2. Update the package list:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
3. Install Nginx and Git:
   ```bash
   sudo apt install nginx git -y
   ```
4. Install Node.js & npm (Required to build the Vite App):
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

---

## Step 3: Clone the Repository & Build
Pull the source code from GitHub directly onto your EC2 server and build the application.
1. Clone your project in the home directory (`/home/ubuntu/`):
   ```bash
   git clone https://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@github.com/ridezipto-app/Zipto-Website.git
   ```
2. Navigate into the frontend folder:
   ```bash
   cd Zipto-Website/Frontend
   ```
3. Install the node modules:
   ```bash
   npm install
   ```
4. Build the production files:
   ```bash
   npm run build
   ```
*(This will generate a `dist` folder containing your compiled website).*

---

## Step 4: Configure Nginx Workspace
We will now place the newly built files in Nginx's web directory.
1. Create a dedicated web directory for your domain:
   ```bash
   sudo mkdir -p /var/www/ridezipto.com
   ```
2. Copy the contents of your `dist` folder into the web directory:
   ```bash
   sudo cp -r dist/* /var/www/ridezipto.com/
   ```
3. Set the appropriate ownership and permissions:
   ```bash
   sudo chown -R www-data:www-data /var/www/ridezipto.com
   sudo chmod -R 755 /var/www/ridezipto.com
   ```

---

## Step 5: Nginx Server Block Configuration
Tell Nginx how to serve `ridezipto.com` requests.
1. Create a new Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/ridezipto.com
   ```
2. Paste the following configuration block into the editor:
   ```nginx
   server {
       listen 80;
       server_name ridezipto.com www.ridezipto.com;
       root /var/www/ridezipto.com;
       index index.html;

       # Fallback routing for React/Vite single-page application
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
3. Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).
4. Enable the site by creating a symbolic link:
   ```bash
   sudo ln -s /etc/nginx/sites-available/ridezipto.com /etc/nginx/sites-enabled/
   ```
5. Test the configuration for syntax errors:
   ```bash
   sudo nginx -t
   ```
6. If the test passes, restart Nginx to apply changes:
   ```bash
   sudo systemctl restart nginx
   ```

---

## Step 6: Install SSL via Certbot
Secure your domain with a free SSL certificate from Let's Encrypt.
1. Install Certbot and its Nginx plugin:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   ```
2. Request and install the SSL certificate:
   ```bash
   sudo certbot --nginx -d ridezipto.com -d www.ridezipto.com
   ```
3. When prompted, provide an email address, agree to the ToS, and select **Option 2 (Redirect)** to ensure all traffic goes to `HTTPS`.

---

## Verification
Open your browser and navigate to `http://ridezipto.com`. 
- The site will securely redirect to `https://`.
- You will see a padlock icon indicating the SSL certificate is installed correctly.

**Future Updates:** 
To update the site later, SSH in, navigate to `~/Zipto-Website/`, run `git pull`, then `cd Frontend`, run `npm run build`, and `sudo cp -r dist/* /var/www/ridezipto.com/`.
