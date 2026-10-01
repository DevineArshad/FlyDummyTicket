const routes = [
  '/',
  '/services/flight-reservation',
  '/services/hotel-booking',
  '/services/flight-hotel-package',
  '/services/travel-insurance',
  '/services/return-ticket',
  '/services/date-change',
  '/pricing',
  '/how-it-works',
  '/visa-guide',
  '/faq',
  '/blog',
  '/blog/what-is-a-dummy-ticket',
  '/blog/dummy-ticket-vs-flight-ticket',
  '/dummy-ticket-for-visa',
  '/dummy-flight-ticket',
  '/flight-reservation-for-visa',
  '/visa/schengen',
  '/visa/uk',
  '/visa/usa',
  '/visa/canada',
  '/visa/australia',
  '/visa/uae',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
  '/refund-policy',
  '/robots.txt',
  '/sitemap.xml',
];

async function runTests() {
  console.log("=== FLYDUMMYTICKET NEXT.JS VALIDATION ===");
  let passed = 0;
  for (const r of routes) {
    try {
      const res = await fetch('http://localhost:3000' + r);
      const text = await res.text();
      const status = res.status;
      const isXmlOrTxt = r.endsWith('.xml') || r.endsWith('.txt');

      const hasTitle = isXmlOrTxt || text.includes('<title>');
      const hasCanonical = isXmlOrTxt || text.includes('rel="canonical"');
      const hasH1 = isXmlOrTxt || text.includes('<h1');
      const hasSchema = isXmlOrTxt || text.includes('application/ld+json');

      if (status === 200 && hasTitle && hasCanonical) {
        passed++;
        console.log(`✓ [${status}] ${r.padEnd(42)} | len: ${text.length.toString().padStart(6)} | H1: ${hasH1} | Schema: ${hasSchema}`);
      } else {
        console.error(`✗ [${status}] ${r} - Title: ${hasTitle}, Canonical: ${hasCanonical}`);
      }
    } catch (err) {
      console.error(`✗ Error on route ${r}:`, err.message);
    }
  }

  console.log(`\nPassed ${passed} / ${routes.length} route tests.`);

  // Test redirect
  try {
    const redir = await fetch('http://localhost:3000/services/visa-guide', { redirect: 'manual' });
    console.log(`\nRedirect Test: /services/visa-guide -> Status: ${redir.status} Location: ${redir.headers.get('location')}`);
  } catch (err) {
    console.error("Redirect test failed:", err.message);
  }

  // Check robots.txt content
  const robotsRes = await fetch('http://localhost:3000/robots.txt');
  const robotsText = await robotsRes.text();
  console.log("\n--- ROBOTS.TXT ---");
  console.log(robotsText.trim());

  // Check sitemap.xml snippet
  const sitemapRes = await fetch('http://localhost:3000/sitemap.xml');
  const sitemapText = await sitemapRes.text();
  console.log("\n--- SITEMAP.XML (First 350 chars) ---");
  console.log(sitemapText.substring(0, 350));
}

runTests();
