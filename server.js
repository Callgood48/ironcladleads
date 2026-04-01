
Copy

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
 
const p1 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IronClad Leads - Exclusive Texas Roofing Leads</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: Arial, sans-serif; background: #0a0d0b; color: #b0ffc8; }
    a { text-decoration: none; }
    canvas#lc { position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.15; }
    nav { background: #0d1410; border-bottom: 1px solid #1a3020; padding: 16px 40px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 100; }
    .logo { font-size: 1.3rem; color: #00ff88; letter-spacing: 3px; font-weight: 700; }
    .logo span { color: #ffaa00; }
    .nav-links { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
    .nav-links a { color: #4a7a58; font-size: 0.9rem; transition: color .2s; padding: 4px 0; }
    .nav-links a:hover { color: #00ff88; }
    .nav-phone { color: #ffaa00; font-weight: 700; font-size: 0.95rem; }
    .hero { text-align: center; padding: 90px 20px 70px; border-bottom: 1px solid #1a3020; background: #090d0b; position: relative; z-index: 1; }
    .hero h1 { font-size: 2.8rem; color: #00ff88; letter-spacing: 3px; margin-bottom: 10px; }
    .hero h1 span { color: #ffaa00; }
    .sub { font-size: 1.1rem; color: #4a7a58; margin-bottom: 18px; line-height: 1.6; }
    .exclusive-badge { display: inline-block; background: #ffaa00; color: #1a0d00; font-weight: 700; font-size: 0.85rem; padding: 6px 18px; border-radius: 20px; letter-spacing: 2px; margin-bottom: 24px; }
    .mbadges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
    .mbadge { background: #002211; border: 1px solid #00cc66; color: #00ff88; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; }
    .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .cta { padding: 14px 32px; border-radius: 6px; font-size: 1rem; font-weight: 700; transition: opacity .2s; cursor: pointer; }
    .cta:hover { opacity: .85; }
    .cta.primary { background: #00cc66; color: #001a0d; }
    .cta.secondary { border: 2px solid #ffaa00; color: #ffaa00; }
    .section { padding: 70px 40px; max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
    .section-title { font-size: 1.4rem; color: #00ff88; letter-spacing: 2px; margin-bottom: 10px; text-align: center; }
    .section-sub { color: #4a7a58; text-align: center; margin-bottom: 36px; font-size: 0.95rem; line-height: 1.6; }
    .divider { border: none; border-top: 1px solid #1a3020; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
    .card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 24px; transition: border-color .2s; }
    .card:hover { border-color: #00cc66; }
    .card h3 { color: #00ff88; margin-bottom: 10px; font-size: 1rem; }
    .card p { color: #4a7a58; font-size: 0.88rem; line-height: 1.6; }
    .urgency { background: #2a1500; border: 1px solid #ffaa00; border-radius: 8px; padding: 18px 28px; text-align: center; margin: 40px 0; color: #ffaa00; line-height: 1.7; }
    .urgency strong { color: #fff; display: block; margin-bottom: 4px; font-size: 1.05rem; letter-spacing: 1px; }
    .page { display: none; } .page.active { display: block; }
    .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 50px; }
    .step { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 24px; text-align: center; }
    .step-num { width: 48px; height: 48px; border-radius: 50%; background: #002211; border: 2px solid #00cc66; color: #00ff88; font-size: 1.3rem; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
    .step h3 { color: #00ff88; font-size: 0.95rem; margin-bottom: 8px; }
    .step p { color: #4a7a58; font-size: 0.85rem; line-height: 1.6; }
    .guarantee-box { background: #002211; border: 2px solid #00cc66; border-radius: 10px; padding: 36px; text-align: center; }
    .guarantee-box h3 { color: #00ff88; font-size: 1.3rem; letter-spacing: 2px; margin-bottom: 16px; }
    .guarantee-box p { color: #4a7a58; font-size: 0.92rem; line-height: 1.8; max-width: 700px; margin: 0 auto 20px; }
    .guarantee-items { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 20px; }
    .g-item { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 14px 20px; color: #b0ffc8; font-size: 0.88rem; }
    .g-item::before { content: "✓ "; color: #00ff88; font-weight: 700; }
    .markets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
    .market-card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 20px; text-align: center; }
    .market-card h3 { color: #00ff88; font-size: 1rem; margin-bottom: 6px; }
    .market-card p { color: #4a7a58; font-size: 0.85rem; line-height: 1.5; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .price-card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 28px; text-align: center; }
    .price-card.featured { border: 2px solid #ffaa00; background: #1a1200; }
    .price-label { font-size: 0.8rem; color: #4a7a58; letter-spacing: 2px; margin-bottom: 8px; }
    .price-name { font-size: 1.2rem; color: #00ff88; font-weight: 700; margin-bottom: 14px; }
    .price-amount { font-size: 2.2rem; color: #fff; font-weight: 700; margin-bottom: 4px; }
    .price-amount span { font-size: 1rem; color: #4a7a58; }
    .price-desc { color: #4a7a58; font-size: 0.85rem; margin-bottom: 18px; line-height: 1.6; }
    .price-features { list-style: none; margin-bottom: 24px; }
    .price-features li { color: #b0ffc8; font-size: 0.88rem; padding: 5px 0; border-bottom: 1px solid #1a3020; }
    .price-features li::before { content: "✓ "; color: #00ff88; }
    .price-badge { display: inline-block; background: #ffaa00; color: #1a0d00; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 10px; letter-spacing: 1px; margin-bottom: 12px; }
    .price-btn { display: block; padding: 12px; background: #002211; border: 1px solid #00cc66; color: #00ff88; border-radius: 6px; font-weight: 700; font-size: 0.9rem; transition: all .2s; }
    .price-btn:hover { background: #00cc66; color: #001a0d; }
    .price-card.featured .price-btn { background: #ffaa00; border-color: #ffaa00; color: #1a0d00; }
    .form-wrap { background: #0d1410; border: 1px solid #1a3020; border-radius: 10px; padding: 36px; max-width: 620px; margin: 0 auto; }
    .form-row { margin-bottom: 16px; }
    .form-row label { display: block; color: #4a7a58; font-size: 0.85rem; margin-bottom: 6px; letter-spacing: 1px; }
    .form-row input, .form-row select, .form-row textarea { width: 100%; background: #090d0b; border: 1px solid #1a3020; color: #b0ffc8; padding: 10px 14px; border-radius: 6px; font-size: 0.92rem; font-family: Arial, sans-serif; transition: border-color .2s; }
    .form-row input:focus, .form-row select:focus, .form-row textarea:focus { outline: none; border-color: #00cc66; }
    .form-row textarea { height: 100px; resize: vertical; }
    .form-submit { width: 100%; padding: 14px; background: #00cc66; border: none; color: #001a0d; font-size: 1rem; font-weight: 700; border-radius: 6px; cursor: pointer; letter-spacing: 1px; }
    .success-msg { display: none; background: #002211; border: 1px solid #00cc66; border-radius: 8px; padding: 18px; text-align: center; color: #00ff88; margin-top: 16px; }
    footer { background: #090d0b; border-top: 1px solid #1a3020; padding: 30px 40px; text-align: center; position: relative; z-index: 1; }
    .footer-links { display: flex; gap: 20px; justify-content: center; margin-bottom: 14px; flex-wrap: wrap; }
    .footer-links a { color: #4a7a58; font-size: 0.85rem; }
    .footer-links a:hover { color: #00ff88; }
    .footer-copy { color: #2a4a38; font-size: 0.78rem; }
    @media(max-width:700px) { nav { padding: 14px 20px; } .section { padding: 50px 20px; } .hero { padding: 60px 20px 50px; } .hero h1 { font-size: 2rem; } }
  </style>
</head>
<body>
<canvas id="lc"></canvas>
<nav>
  <div class="logo">IRONCLAD <span>LEADS</span></div>
  <div class="nav-links">
    <a href="#" onclick="showPage('home');return false;">Home</a>
    <a href="#" onclick="showPage('exclusive');return false;">Exclusive Leads</a>
    <a href="#" onclick="showPage('markets');return false;">Markets</a>
    <a href="#" onclick="showPage('pricing');return false;">Pricing</a>
    <a href="#" onclick="showPage('contact');return false;">Contact</a>
    <a class="nav-phone" href="tel:+18065700231">(806) 570-0231</a>
  </div>
</nav>`;
 
const p2 = `<div class="page active" id="page-home">
  <div class="hero">
    <div class="exclusive-badge">EXCLUSIVE LEADS ONLY</div>
    <h1>IRONCLAD <span>LEADS</span></h1>
    <p class="sub">Texas Roofing Lead Generation -- Storm Damage Specialists<br>We Find the Leads. You Close the Jobs.</p>
    <div class="mbadges">
      <span class="mbadge">Fort Worth / DFW</span>
      <span class="mbadge">Houston</span>
      <span class="mbadge">Austin</span>
      <span class="mbadge">San Antonio</span>
    </div>
    <div class="cta-row">
      <a class="cta primary" href="#" onclick="showPage('contact');return false;">GET YOUR LEADS TODAY</a>
      <a class="cta secondary" href="tel:+18065700231">CALL (806) 570-0231</a>
    </div>
  </div>
  <div class="section">
    <div class="section-title">WHAT WE DO</div>
    <div class="section-sub">We identify, qualify, and deliver exclusive roofing leads directly to your business.<br>Every lead is yours alone -- never resold to a competitor.</div>
    <div class="cards">
      <div class="card"><h3>Hail and Storm Damage</h3><p>We target homeowners in storm-hit zip codes across Texas with qualifying roof damage and active insurance coverage.</p></div>
      <div class="card"><h3>Free Roof Inspections</h3><p>Pre-qualified homeowners ready for a free no-obligation inspection -- warm leads expecting your call.</p></div>
      <div class="card"><h3>Insurance Claim Help</h3><p>Homeowners whose insurance likely covers a full roof replacement at zero out of pocket cost.</p></div>
      <div class="card"><h3>Aging Roof Leads</h3><p>Homes 10 or more years old overdue for inspection regardless of recent weather events.</p></div>
    </div>
    <div class="urgency">
      <strong>LIMITED EXCLUSIVE SLOTS AVAILABLE THIS WEEK</strong>
      We only work with one contractor per market. Once your territory is claimed it is locked. Call now before a competitor takes your zip codes.
    </div>
  </div>
</div>
 
<div class="page" id="page-exclusive">
  <div class="section">
    <div class="section-title">EXCLUSIVE LEADS</div>
    <div class="section-sub">Every lead goes to one contractor only. No sharing. No competition.</div>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><h3>Storm Analysis</h3><p>We monitor real-time hail events across Texas and identify zip codes with the most roof damage.</p></div>
      <div class="step"><div class="step-num">2</div><h3>Homeowner ID</h3><p>Using county appraisal records we identify homeowner names and addresses in storm-hit areas.</p></div>
      <div class="step"><div class="step-num">3</div><h3>Skip Tracing</h3><p>We run every address through professional skip tracing to get verified cell numbers scrubbed against the DNC registry.</p></div>
      <div class="step"><div class="step-num">4</div><h3>AI Outreach</h3><p>Our AI calling system contacts homeowners and identifies those ready to schedule a free roof inspection.</p></div>
      <div class="step"><div class="step-num">5</div><h3>Lead Delivery</h3><p>Qualified leads delivered to you within 24 hours with full contact info and insurance notes.</p></div>
      <div class="step"><div class="step-num">6</div><h3>You Close</h3><p>You call the homeowner, run the inspection, work the claim, and close the job. We handle everything else.</p></div>
    </div>
    <div class="guarantee-box">
      <h3>THE IRONCLAD GUARANTEE</h3>
      <p>Every lead is 100% exclusive and never resold. Bad leads are replaced at no charge. Territory lock guaranteed.</p>
      <div class="guarantee-items">
        <span class="g-item">100% Exclusive</span>
        <span class="g-item">Verified Contact Info</span>
        <span class="g-item">DNC Scrubbed</span>
        <span class="g-item">24 Hour Delivery</span>
        <span class="g-item">Bad Lead Replacement</span>
        <span class="g-item">Territory Lock</span>
      </div>
    </div>
  </div>
</div>
 
<div class="page" id="page-markets">
  <div class="section">
    <div class="section-title">MARKETS WE SERVE</div>
    <div class="section-sub">Active storm lead generation across all major Texas metro areas.</div>
    <div class="markets-grid">
      <div class="market-card"><h3>Fort Worth / DFW</h3><p>Tarrant, Dallas, and Collin counties. Heavy hail activity year round.</p><p style="color:#ffaa00;font-size:0.8rem;margin-top:6px;">76101-76199 and surrounding</p></div>
      <div class="market-card"><h3>Houston</h3><p>Harris, Fort Bend, and Montgomery counties. High storm frequency.</p><p style="color:#ffaa00;font-size:0.8rem;margin-top:6px;">77001-77099 and surrounding</p></div>
      <div class="market-card"><h3>Austin</h3><p>Travis, Williamson, and Hays counties. Fast growing homeowner market.</p><p style="color:#ffaa00;font-size:0.8rem;margin-top:6px;">78701-78799 and surrounding</p></div>
      <div class="market-card"><h3>San Antonio</h3><p>Bexar and Comal counties. Strong insurance claim market.</p><p style="color:#ffaa00;font-size:0.8rem;margin-top:6px;">78201-78299 and surrounding</p></div>
    </div>
    <div style="text-align:center;margin-top:30px;">
      <a class="cta primary" href="#" onclick="showPage('contact');return false;">CHECK MY TERRITORY</a>
    </div>
  </div>
</div>
 
<div class="page" id="page-pricing">
  <div class="section">
    <div class="section-title">PRICING AND PACKAGES</div>
    <div class="section-sub">Simple transparent pricing. No contracts. All leads 100% exclusive.</div>
    <div class="pricing-grid">
      <div class="price-card">
        <div class="price-label">STARTER</div>
        <div class="price-name">Single Lead</div>
        <div class="price-amount">$150<span> / lead</span></div>
        <div class="price-desc">Perfect for testing a new market or filling gaps in your pipeline.</div>
        <ul class="price-features">
          <li>Exclusive -- never resold</li>
          <li>Verified homeowner contact info</li>
          <li>DNC scrubbed phone numbers</li>
          <li>24 hour delivery</li>
        </ul>
        <a class="price-btn" href="#" onclick="showPage('contact');return false;">GET STARTED</a>
      </div>
      <div class="price-card featured">
        <div class="price-badge">BEST VALUE</div>
        <div class="price-label">GROWTH</div>
        <div class="price-name">10 Lead Bundle</div>
        <div class="price-amount">$1,000<span> / 10 leads</span></div>
        <div class="price-desc">Save $500 vs buying individually. Steady pipeline for your crew.</div>
        <ul class="price-features">
          <li>10 exclusive leads</li>
          <li>All lead types included</li>
          <li>DNC scrubbed phone numbers</li>
          <li>Territory lock included</li>
          <li>Bad lead replacement</li>
        </ul>
        <a class="price-btn" href="#" onclick="showPage('contact');return false;">CLAIM YOUR TERRITORY</a>
      </div>
      <div class="price-card">
        <div class="price-label">POWER</div>
        <div class="price-name">20 Lead Bundle</div>
        <div class="price-amount">$2,200<span> / 20 leads</span></div>
        <div class="price-desc">Maximum coverage. Best per-lead rate. Scale fast.</div>
        <ul class="price-features">
          <li>20 exclusive leads</li>
          <li>All lead types included</li>
          <li>DNC scrubbed phone numbers</li>
          <li>Territory lock included</li>
          <li>Bad lead replacement</li>
        </ul>
        <a class="price-btn" href="#" onclick="showPage('contact');return false;">GET 20 LEADS</a>
      </div>
    </div>
  </div>
</div>
 
<div class="page" id="page-contact">
  <div class="section">
    <div class="section-title">GET YOUR LEADS TODAY</div>
    <div class="section-sub">Fill out the form and we will contact you within 24 hours.</div>
    <div class="form-wrap">
      <div id="lead-form">
        <div class="form-row"><label>YOUR NAME</label><input type="text" id="fname" placeholder="John Smith" /></div>
        <div class="form-row"><label>COMPANY NAME</label><input type="text" id="fcompany" placeholder="Smith Roofing LLC" /></div>
        <div class="form-row"><label>PHONE NUMBER</label><input type="tel" id="fphone" placeholder="(817) 555-0000" /></div>
        <div class="form-row"><label>EMAIL ADDRESS</label><input type="email" id="femail" placeholder="you@example.com" /></div>
        <div class="form-row"><label>TARGET MARKET</label>
          <select id="fmarket">
            <option>Select your market</option>
            <option>Fort Worth / DFW</option>
            <option>Houston</option>
            <option>Austin</option>
            <option>San Antonio</option>
            <option>Multiple Markets</option>
          </select>
        </div>
        <div class="form-row"><label>PACKAGE INTEREST</label>
          <select id="fpackage">
            <option>Select a package</option>
            <option>Single Lead -- $150</option>
            <option>10 Lead Bundle -- $1,000</option>
            <option>20 Lead Bundle -- $2,200</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div class="form-row"><label>MESSAGE (OPTIONAL)</label><textarea id="fmessage" placeholder="Tell us about your target zip codes..."></textarea></div>
        <button class="form-submit" onclick="submitForm()">SEND MY REQUEST</button>
      </div>
      <div class="success-msg" id="success-msg">Your request has been received! We will contact you within 24 hours. Call us at (806) 570-0231.</div>
    </div>
  </div>
</div>`;
 
const p3 = `<footer>
  <div class="footer-links">
    <a href="#" onclick="showPage('home');return false;">Home</a>
    <a href="#" onclick="showPage('exclusive');return false;">Exclusive Leads</a>
    <a href="#" onclick="showPage('markets');return false;">Markets</a>
    <a href="#" onclick="showPage('pricing');return false;">Pricing</a>
    <a href="#" onclick="showPage('contact');return false;">Contact</a>
    <a href="tel:+18065700231">(806) 570-0231</a>
    <a href="mailto:contact@ironcladleads.com">contact@ironcladleads.com</a>
  </div>
  <div class="footer-copy">2026 IronClad Leads -- Exclusive Texas Roofing Lead Generation -- All Rights Reserved</div>
</footer>
<script>
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  var el = document.getElementById('page-' + id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
}
function submitForm() {
  var name = document.getElementById('fname').value;
  var company = document.getElementById('fcompany').value;
  var phone = document.getElementById('fphone').value;
  var email = document.getElementById('femail').value;
  if (!name || !company || !phone || !email) { alert('Please fill in all required fields.'); return; }
  document.getElementById('lead-form').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}
var lc = document.getElementById('lc');
var lx = lc.getContext('2d');
function resizeLc() { lc.width = window.innerWidth; lc.height = window.innerHeight; }
resizeLc();
window.addEventListener('resize', resizeLc);
function drawBolt(x1, y1, x2, y2, branches) {
  lx.beginPath(); lx.moveTo(x1, y1);
  var dx = x2 - x1, dy = y2 - y1, segs = 14;
  for (var i = 1; i <= segs; i++) {
    var t = i / segs;
    var nx = x1 + dx * t + (Math.random() - 0.5) * 130;
    var ny = y1 + dy * t;
    lx.lineTo(nx, ny);
    if (branches > 0 && Math.random() > 0.65) { drawBolt(nx, ny, nx + (Math.random() - 0.5) * 160, ny + Math.random() * 160, 0); }
  }
  lx.strokeStyle = 'rgba(0,255,136,' + (0.4 + Math.random() * 0.6) + ')';
  lx.lineWidth = branches > 0 ? 1.8 : 0.6;
  lx.shadowBlur = 20; lx.shadowColor = '#00ff88'; lx.stroke();
}
function flash() {
  lx.clearRect(0, 0, lc.width, lc.height);
  var x = Math.random() * lc.width;
  drawBolt(x, 0, x + (Math.random() - 0.5) * 200, lc.height * (0.4 + Math.random() * 0.5), 2);
  setTimeout(function() {
    lx.clearRect(0, 0, lc.width, lc.height);
    setTimeout(function() {
      drawBolt(x, 0, x + (Math.random() - 0.5) * 100, lc.height * (0.3 + Math.random() * 0.4), 1);
      setTimeout(function() { lx.clearRect(0, 0, lc.width, lc.height); }, 80);
    }, 60);
  }, 100);
  setTimeout(flash, 2500 + Math.random() * 4500);
}
setTimeout(flash, 1500);
<\/script></body></html>`;
 
app.get('/', function(req, res) {
  res.send(p1 + p2 + p3);
});
 
app.post('/roof-call', function(req, res) {
  res.set('Content-Type', 'text/xml');
  var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<Response>' +
    '<Pause length="1"/>' +
    '<Gather numDigits="1" action="/handle-response" method="POST" timeout="10">' +
    '<Say voice="Polly.Matthew-Neural" language="en-US">' +
    'Hey, hope I caught you at a good time. ' +
    'This is Matthew calling from IronClad Leads here in the Fort Worth area. ' +
    'Listen, we just pulled storm data for your neighborhood and it looks like your street took a pretty good hit from that last hail storm. ' +
    'A lot of your neighbors are getting their roofs looked at right now, and many of them are getting full replacements covered completely by their homeowners insurance -- zero out of pocket. ' +
    'We have a licensed local roofer who can swing by for a free inspection this week, no pressure, no obligation whatsoever. ' +
    'If there is damage, they will help you through the whole insurance process. ' +
    'Takes about 20 minutes and could save you thousands. ' +
    'Press 1 right now and I will get you scheduled. ' +
    'Or if this is not a good time, call us back at 806-570-0231. ' +
    'That is 806-570-0231. ' +
    'Press 9 if you would like to be removed from our list.' +
    '</Say>' +
    '</Gather>' +
    '</Response>';
  res.send(xml);
});
 
app.post('/handle-response', function(req, res) {
  res.set('Content-Type', 'text/xml');
  var digit = req.body.Digits;
  var xml;
  if (digit === '1') {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'Perfect, glad you pressed. Give me just one second and I will connect you with someone on our team right now.' +
      '</Say>' +
      '<Dial>+18065700231</Dial>' +
      '</Response>';
  } else if (digit === '9') {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'No problem at all. You have been removed from our list and we will not call again. Have a great day.' +
      '</Say>' +
      '</Response>';
  } else {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'Thanks for your time. If you change your mind give us a call at 806-570-0231. Have a great day.' +
      '</Say>' +
      '</Response>';
  }
  res.send(xml);
});
 
app.listen(PORT, function() {
  console.log('IronClad Leads running on port ' + PORT);
});
