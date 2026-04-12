import React, { useEffect } from "react";
import ziptoLogo from "../assets/zipto.jpeg";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Back */}
      <div className="p-4">
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 font-medium hover:underline"
        >
          ← Back to Home
        </button>
      </div>

      <div className="min-h-screen bg-gray-50 px-6 py-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <img src={ziptoLogo} className="h-16 mx-auto mb-4 rounded" />
          <h1 className="text-4xl font-bold text-gray-900">
            ZIPTO PRIVACY POLICY
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Effective Date: 11 April 2026 <br />
            Last Updated: 11 April 2026
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-4xl mx-auto bg-white border rounded-xl p-8 shadow-sm space-y-10 text-gray-800 whitespace-pre-line">

{`🔐 ZIPTO PRIVACY POLICY
Effective Date: 11 April 2026
Last Updated: 11 April 2026

1. INTRODUCTION
This Privacy Policy describes how Zipto Hyperlogistics Pvt. Ltd. (“Zipto”, “Company”, “We”, “Us”) collects, uses, and protects your information when you use the Zipto Customer Application, website, and related services.

By using Zipto, you explicitly consent to the collection and use of your data as described in this policy.

2. COMPANY DETAILS
Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED.
Registered Office: 781,saheed Ngr,780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007
Location: Bhubaneswar, Odisha, India

3. INFORMATION WE COLLECT
A. Personal Information
Full Name
Mobile Number
Email Address

B. Location Data
We collect location data to:
Enable pickup and delivery services
Provide real-time tracking
Improve service accuracy

📍 Location is collected only when required for active services.

C. Order & Transaction Data
Pickup and delivery addresses
Order details
Payment method (UPI, Cash, COD)

D. Device Information
Device type
IP address
App usage data

4. HOW WE USE YOUR INFORMATION
We use your data to:
Provide delivery services
Connect you with delivery partners
Process orders and payments
Send updates and notifications
Improve user experience

5. DATA SHARING
We may share data with:
Delivery partners (for order fulfillment)
Payment providers (for transactions)
Service providers (analytics, support)
Authorities (if required by law)

⚠️ We do NOT sell your personal data.

6. PAYMENT SECURITY
Payments are processed via secure third-party gateways.

Zipto does NOT store:
Card details
UPI PIN
OTP

7. DATA RETENTION
We retain data:
As long as your account is active
As required by law

8. USER RIGHTS
You may:
Access your data
Update your information
Request account deletion

📩 Email: support@ridezipto.com

9. ACCOUNT DELETION
Users can request deletion via email.

Data will be deleted within a reasonable timeframe, subject to legal requirements.

10. COOKIES
We may use cookies to improve performance and user experience.

11. CHILDREN’S PRIVACY
Zipto is not intended for users under 18 years.

12. CHANGES TO POLICY
We may update this policy at any time.

13. CONTACT
Email: support@ridezipto.com
Location: Bhubaneswar, Odisha, India

14. GRIEVANCE OFFICER
Zipto Support Team
Response Time: Within 48 hours

© 2026 Zipto Hyperlogistics Pvt. Ltd.

ZIPTO RIDER ONBOARDING – PRIVACY POLICY

ZIPTO RIDER PRIVACY POLICY
Effective Date: 11 April 2026
Last Updated: 11 April 2026

1. INTRODUCTION
This Privacy Policy applies to the Zipto Rider Onboarding Application, operated by Zipto Hyperlogistics Pvt. Ltd..

This app is intended for delivery partners (“Riders”) to register and operate on the Zipto platform.

By using this app, you consent to data collection practices described below.

2. COMPANY DETAILS
Company Name: ZIPTO HYPERLOGISTICS PRIVATE LIMITED.
Registered Office: 781,saheed Ngr,780, Maharishi College Road, Saheed Nagar, Khorda, Bhubaneswar, Orissa, India, 751007
Location: Bhubaneswar, Odisha, India

3. INFORMATION WE COLLECT
A. Personal Information
Full Name
Mobile Number
Email Address

B. KYC & Verification Data
Driving License
Vehicle Registration
Identity Proof

C. Financial Information
Bank Account Details (for payouts)

⚠️ We do NOT store PINs, OTPs, or sensitive banking credentials.

D. Location Data (CRITICAL)
We collect:
Real-time GPS location
Background location data

📍 Used for:
Order assignment
Live tracking
Safety monitoring
Fraud prevention

⚠️ Location may be collected even when the app is closed or not in use.

E. Device Data
Device type
IP address
App usage logs

4. HOW WE USE DATA
We use rider data to:
Verify identity
Assign deliveries
Process earnings
Monitor performance
Ensure safety and compliance

5. DATA SHARING
We may share data with:
Customers (limited info for delivery)
Payment processors
Government authorities (if required)

We do NOT sell rider data.

6. DATA SECURITY
We use encryption and secure systems to protect data.

7. DATA RETENTION
Data is retained:
While account is active
As required by law

8. RIDER RIGHTS
Riders can:
Update details
Request account deletion

📩 Email: rider.support@ridezipto.com

9. ACCOUNT DELETION
Deletion requests can be made via email.

10. BACKGROUND LOCATION CONSENT
By using the app, riders agree to continuous location tracking,
including when the app is in background or closed.

11. CHANGES TO POLICY
We may update this policy periodically.

12. CONTACT
Email: rider.support@ridezipto.com
Location: Bhubaneswar, Odisha, India

13. GRIEVANCE OFFICER
Zipto Support Team
Response Time: Within 48 hours

© 2026 Zipto Hyperlogistics Pvt. Ltd.`}

        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-10 text-sm">
          © 2026 Zipto Hyperlogistics Pvt. Ltd.
        </p>

      </div>
    </>
  );
}
