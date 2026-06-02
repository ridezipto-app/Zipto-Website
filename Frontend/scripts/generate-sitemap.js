const fs = require('fs');
const path = require('path');

// Update the domain below before running in production
const domain = 'https://REPLACE_WITH_YOUR_DOMAIN';

const routes = [
    '/',
    '/about',
    '/privacy-policy',
    '/terms-conditions',
    '/rider-agreement',
    '/rider-privacy-policy',
    '/rider-terms',
    '/delete-account'
];

const urlset = routes.map(route => `  <url>\n    <loc>${domain}${route}</loc>\n    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Wrote sitemap to', outPath);
