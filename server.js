const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const homePage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IronClad Leads - Texas Roofing</title>
  <style>
    body { font-family: Arial, sans-serif; background: #0a0d0b; color: #b0ffc8; margin: 0; padding: 0; }
    header { background: #0d1410; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1a3020; }
    .logo { font-size: 1.4rem; color: #00ff88; letter-spacing: 3px; font-weight: 700; }
    .logo span { color: #ffaa00; }
    .phone { color: #ffaa00; font-size: 1rem; text-decoration: none; }
    .hero { text-align: center; padding: 80px 20px; border-bottom: 1px solid #1a3020; }
    h1 { font-size: 2.8rem; color: #00ff88; letter-spacing: 3px; margin-bottom: 14px; }
    h1 span { color: #ffaa00; }
    .tagline { font-size: 1.1rem; color: #4a7a58; margin-bottom: 24px; line-height: 1.6; }
    .badges { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
    .badge { background: #002211; border: 1px solid #00cc66; color: #00ff88; padding: 5px 14px; border-radius: 20px; font-size: 0.85rem; }
    .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .cta { padding: 14px 32px; border-radius: 6px; font-size: 1rem; text-decoration: none; font-weight: 600; }
    .cta.primary { background: #00cc66; color: #001a0d; }
    .cta.secondary { border: 1px solid #ffaa00; color: #ffaa00; }
    .section { padding: 60px 40px; max-width: 1100px; margin: 0 auto; }
    h2 { font-size: 1.4rem; color: #00ff88; letter-spacing: 2px; margin-bottom: 28px; text-align: center; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
    .card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 24px; }
    .card h3 { color: #00ff88; margin-bottom: 8px; }
    .card p { color: #4a7a58; font-size: 0.88rem; line-height: 1.6; }
    .urgency { background: #2a1500; border: 1px solid #ffaa00; border-radius: 8px; padding: 18px 28px; text-align: center; margin: 40px 0; color: #ffaa00; }
    .urgency strong { color: #fff; }
    .contact { background: #0d1410; border-top: 1px solid #1a3020; padding: 60px 40px; text-align: center; }
    .contact h2 { color: #00ff88; }
    .contact p { color: #4a7a58; margin-bottom: 24px; }
    .contact-phone { font-size: 2rem; color: #ffaa00; text-decoration: none; font-weight: 700; display: block; margin-bottom: 10px; }
    footer { background: #090d0b; border-top: 1px solid #1a3020; padding: 20px; text-align: center; color: #2a4a38; font-size: 0.8rem; }
  </style>
</head>
<body>
  <header>
    <div class="logo">IRONCLAD <span>LEADS</span></div>
    <a class="phone" href="tel:+18065700231">(806) 570-0231</a>
  </header>
  <div class="hero">
    <h1>IRONCLAD <span>LEADS</span></h1>
    <p class="tagline">Texas Roofing Lead Generation -- Storm Damage Specialists<br>Connecting Insured Homeowners With Licensed Roofing Contractors</p>
    <div class="badges">
      <span class="badge">Fort Worth / DFW</span>
      <span class="badge">Houston</span>
      <span class="badge">All of Texas</span>
    </div>
    <div class="cta-row">
      <a class="cta primary" href="tel:+18065700231">CALL NOW: (806) 570-0231</a>
      <a class="cta secondary" href="mailto:contact@ironcladleads.com">EMAIL US</a>
    </div>
  </div>
  <div class="section">
    <h2>WHAT WE DO</h2>
    <div class="cards">
      <div class="card">
        <h3>Hail and Storm Damage</h3>
        <p>We identify homeowners in storm-hit zip codes across DFW and Houston with qualifying roof damage and active insurance coverage.</p>
      </div>
      <div class="card">
        <h3>Free Roof Inspections</h3>
        <p>We connect homeowners with licensed contractors for free no-obligation roof inspections at no cost to the homeowner.</p>
      </div>
      <div class="card">
        <h3>Insurance Claim Help</h3>
        <p>Many homeowners do not know their policy covers full roof replacement. We identify those candidates and warm them up for your team.</p>
      </div>
      <div class="card">
        <h3>Aging Roof Leads</h3>
        <p>We target homes with aging roofs 10 or more years old that are due for inspection regardless of recent weather events.</p>
      </div>
    </div>
    <div class="urgency">
      <strong>LIMITED INSPECTION SLOTS AVAILABLE THIS WEEK</strong><br>
      We are working active storm zones in Fort Worth and Houston. Call now to lock in your leads.
    </div>
  </div>
  <div class="contact">
    <h2>GET YOUR LEADS TODAY</h2>
    <p>Speak directly with our team. We serve Fort Worth, Houston, and surrounding Texas markets.</p>
    <a class="contact-phone" href="tel:+18065700231">(806) 570-0231</a>
    <p style="color:#2a4a38;font-size:0.85rem;">Available Mon-Fri 8am-7pm CT</p>
  </div>
  <footer>2026 IronClad Leads -- Texas Roofing Lead Generation -- All Rights Reserved</footer>
</body>
</html>`;

app.get('/', (req, res) => {
  res.send(homePage);
});

app.post('/roof-call', (req, res) => {
  res.set('Content-Type', 'text/xml');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<Response>' +
    '<Pause length="1"/>' +
    '<Gather numDigits="1" action="/handle-response" method="POST" timeout="8">' +
    '<Say voice="Polly.Matthew-Neural" language="en-US">' +
    'Hi, this is an important message for the homeowner. ' +
    'My name is Matthew, calling on behalf of IronClad Leads, ' +
    'a licensed Texas roofing company serving Fort Worth and Houston. ' +
    'Your neighborhood recently experienced hail and storm damage, ' +
    'and many homeowners qualify for a full roof replacement ' +
    'covered entirely by their homeowners insurance ' +
    'at absolutely zero out of pocket cost. ' +
    'We also inspect older roofs that your insurance may still cover. ' +
    'We have limited free inspection slots available this week. ' +
    'Press 1 now to speak with a roofing specialist. ' +
    'Press 9 to be removed from our list.' +
    '</Say>' +
    '</Gather>' +
    '</Response>';
  res.send(xml);
});

app.post('/handle-response', (req, res) => {
  res.set('Content-Type', 'text/xml');
  const digit = req.body.Digits;
  let xml;
  if (digit === '1') {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'Perfect! Please hold while we connect you with an IronClad Leads roofing specialist.' +
      '</Say>' +
      '<Dial>+18065700231</Dial>' +
      '</Response>';
  } else if (digit === '9') {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'You have been removed from our list. Have a wonderful day.' +
      '</Say>' +
      '</Response>';
  } else {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'Thank you for your time. Have a great day.' +
      '</Say>' +
      '</Response>';
  }
  res.send(xml);
});

app.listen(PORT, () => {
  console.log('IronClad Leads running on port ' + PORT);
});
