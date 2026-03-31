const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const page = `<!DOCTYPE html>
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

    /* NAV */
    nav { background: #0d1410; border-bottom: 1px solid #1a3020; padding: 16px 40px; display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 100; }
    .logo { font-size: 1.3rem; color: #00ff88; letter-spacing: 3px; font-weight: 700; }
    .logo span { color: #ffaa00; }
    .nav-links { display: flex; gap: 24px; align-items: center; }
    .nav-links a { color: #4a7a58; font-size: 0.9rem; transition: color .2s; }
    .nav-links a:hover { color: #00ff88; }
    .nav-phone { color: #ffaa00; font-weight: 700; font-size: 0.95rem; }

    /* HERO */
    .hero { text-align: center; padding: 90px 20px 70px; border-bottom: 1px solid #1a3020; background: #090d0b; }
    .hero h1 { font-size: 2.8rem; color: #00ff88; letter-spacing: 3px; margin-bottom: 10px; }
    .hero h1 span { color: #ffaa00; }
    .hero .sub { font-size: 1.1rem; color: #4a7a58; margin-bottom: 8px; line-height: 1.6; }
    .exclusive-badge { display: inline-block; background: #ffaa00; color: #1a0d00; font-weight: 700; font-size: 0.85rem; padding: 6px 18px; border-radius: 20px; letter-spacing: 2px; margin-bottom: 28px; }
    .markets { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
    .mbadge { background: #002211; border: 1px solid #00cc66; color: #00ff88; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; }
    .cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .cta { padding: 14px 32px; border-radius: 6px; font-size: 1rem; font-weight: 700; transition: opacity .2s; }
    .cta:hover { opacity: .85; }
    .cta.primary { background: #00cc66; color: #001a0d; }
    .cta.secondary { border: 2px solid #ffaa00; color: #ffaa00; }

    /* SECTIONS */
    .section { padding: 70px 40px; max-width: 1100px; margin: 0 auto; }
    .section-title { font-size: 1.4rem; color: #00ff88; letter-spacing: 2px; margin-bottom: 10px; text-align: center; }
    .section-sub { color: #4a7a58; text-align: center; margin-bottom: 36px; font-size: 0.95rem; line-height: 1.6; }
    .divider { border: none; border-top: 1px solid #1a3020; }

    /* SERVICES */
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; }
    .card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 24px; transition: border-color .2s; }
    .card:hover { border-color: #00cc66; }
    .card h3 { color: #00ff88; margin-bottom: 10px; font-size: 1rem; }
    .card p { color: #4a7a58; font-size: 0.88rem; line-height: 1.6; }

    /* URGENCY */
    .urgency { background: #2a1500; border: 1px solid #ffaa00; border-radius: 8px; padding: 18px 28px; text-align: center; margin: 40px 0; color: #ffaa00; line-height: 1.7; }
    .urgency strong { color: #fff; display: block; margin-bottom: 4px; font-size: 1.05rem; letter-spacing: 1px; }

    /* MARKETS */
    .markets-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; }
    .market-card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 20px; text-align: center; transition: border-color .2s; }
    .market-card:hover { border-color: #00cc66; }
    .market-card h3 { color: #00ff88; font-size: 1rem; margin-bottom: 6px; }
    .market-card p { color: #4a7a58; font-size: 0.85rem; line-height: 1.5; }
    .market-card .zip { color: #ffaa00; font-size: 0.8rem; margin-top: 6px; }

    /* PRICING */
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .price-card { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 28px; text-align: center; transition: border-color .2s; }
    .price-card:hover { border-color: #00cc66; }
    .price-card.featured { border: 2px solid #ffaa00; background: #1a1200; }
    .price-label { font-size: 0.8rem; color: #4a7a58; letter-spacing: 2px; margin-bottom: 8px; }
    .price-card.featured .price-label { color: #ffaa00; }
    .price-name { font-size: 1.2rem; color: #00ff88; font-weight: 700; margin-bottom: 14px; }
    .price-amount { font-size: 2.2rem; color: #fff; font-weight: 700; margin-bottom: 4px; }
    .price-amount span { font-size: 1rem; color: #4a7a58; }
    .price-desc { color: #4a7a58; font-size: 0.85rem; margin-bottom: 18px; line-height: 1.6; }
    .price-features { list-style: none; margin-bottom: 24px; }
    .price-features li { color: #b0ffc8; font-size: 0.88rem; padding: 5px 0; border-bottom: 1px solid #1a3020; }
    .price-features li::before { content: "✓ "; color: #00ff88; }
    .price-features li.no::before { content: "— "; color: #4a7a58; }
    .price-features li.no { color: #4a7a58; }
    .price-badge { display: inline-block; background: #ffaa00; color: #1a0d00; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; border-radius: 10px; letter-spacing: 1px; margin-bottom: 12px; }
    .price-btn { display: block; padding: 12px; background: #002211; border: 1px solid #00cc66; color: #00ff88; border-radius: 6px; font-weight: 700; font-size: 0.9rem; transition: all .2s; }
    .price-btn:hover { background: #00cc66; color: #001a0d; }
    .price-card.featured .price-btn { background: #ffaa00; border-color: #ffaa00; color: #1a0d00; }
    .price-card.featured .price-btn:hover { background: #ffcc44; }

    /* ABOUT */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
    .about-text h3 { color: #00ff88; font-size: 1.1rem; margin-bottom: 12px; letter-spacing: 1px; }
    .about-text p { color: #4a7a58; font-size: 0.92rem; line-height: 1.8; margin-bottom: 14px; }
    .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .stat { background: #0d1410; border: 1px solid #1a3020; border-radius: 8px; padding: 18px; text-align: center; }
    .stat-num { font-size: 1.8rem; color: #00ff88; font-weight: 700; }
    .stat-label { font-size: 0.78rem; color: #4a7a58; margin-top: 4px; letter-spacing: 1px; }

    /* CONTACT FORM */
    .form-wrap { background: #0d1410; border: 1px solid #1a3020; border-radius: 10px; padding: 36px; max-width: 620px; margin: 0 auto; }
    .form-row { margin-bottom: 16px; }
    .form-row label { display: block; color: #4a7a58; font-size: 0.85rem; margin-bottom: 6px; letter-spacing: 1px; }
    .form-row input, .form-row select, .form-row textarea { width: 100%; background: #090d0b; border: 1px solid #1a3020; color: #b0ffc8; padding: 10px 14px; border-radius: 6px; font-size: 0.92rem; font-family: Arial, sans-serif; transition: border-color .2s; }
    .form-row input:focus, .form-row select:focus, .form-row textarea:focus { outline: none; border-color: #00cc66; }
    .form-row textarea { height: 100px; resize: vertical; }
    .form-row select option { background: #0d1410; }
    .form-submit { width: 100%; padding: 14px; background: #00cc66; border: none; color: #001a0d; font-size: 1rem; font-weight: 700; border-radius: 6px; cursor: pointer; letter-spacing: 1px; transition: opacity .2s; }
    .form-submit:hover { opacity: .85; }
    .form-note { color: #2a4a38; font-size: 0.78rem; text-align: center; margin-top: 10px; }
    .success-msg { display: none; background: #002211; border: 1px solid #00cc66; border-radius: 8px; padding: 18px; text-align: center; color: #00ff88; margin-top: 16px; }

    /* FOOTER */
    footer { background: #090d0b; border-top: 1px solid #1a3020; padding: 30px 40px; text-align: center; }
    .footer-links { display: flex; gap: 20px; justify-content: center; margin-bottom: 14px; flex-wrap: wrap; }
    .footer-links a { color: #4a7a58; font-size: 0.85rem; transition: color .2s; }
    .footer-links a:hover { color: #00ff88; }
    .footer-copy { color: #2a4a38; font-size: 0.78rem; }

    @media(max-width: 700px) {
      .about-grid { grid-template-columns: 1fr; }
      nav { padding: 14px 20px; }
      .section { padding: 50px 20px; }
      .hero { padding: 60px 20px 50px; }
      .hero h1 { font-size: 2rem; }
    }
  </style>
</head>
<body>

  <nav>
    <div class="logo">IRONCLAD <span>LEADS</span></div>
    <div class="nav-links">
      <a href="#services">Services</a>
      <a href="#markets">Markets</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a class="nav-phone" href="tel:+18065700231">(806) 570-0231</a>
    </div>
  </nav>

  <div class="hero">
    <div class="exclusive-badge">EXCLUSIVE LEADS ONLY</div>
    <h1>IRONCLAD <span>LEADS</span></h1>
    <p class="sub">Texas Roofing Lead Generation -- Storm Damage Specialists<br>We Find the Leads. You Close the Jobs.</p>
    <div class="markets">
      <span class="mbadge">Fort Worth / DFW</span>
      <span class="mbadge">Houston</span>
      <span class="mbadge">Austin</span>
      <span class="mbadge">San Antonio</span>
    </div>
    <div class="cta-row">
      <a class="cta primary" href="#contact">GET YOUR LEADS TODAY</a>
      <a class="cta secondary" href="tel:+18065700231">CALL (806) 570-0231</a>
    </div>
  </div>

  <hr class="divider">

  <!-- SERVICES -->
  <div class="section" id="services">
    <div class="section-title">WHAT WE DO</div>
    <div class="section-sub">We identify, qualify, and deliver exclusive roofing leads directly to your business.<br>Every lead is yours alone -- never resold to a competitor.</div>
    <div class="cards">
      <div class="card">
        <h3>Hail and Storm Damage</h3>
        <p>We target homeowners in storm-hit zip codes across Texas with qualifying roof damage and active homeowners insurance coverage.</p>
      </div>
      <div class="card">
        <h3>Free Roof Inspections</h3>
        <p>We connect pre-qualified homeowners ready for a free no-obligation inspection -- warm leads that are expecting your call.</p>
      </div>
      <div class="card">
        <h3>Insurance Claim Help</h3>
        <p>We identify homeowners whose insurance policy likely covers a full roof replacement at zero out of pocket cost to them.</p>
      </div>
      <div class="card">
        <h3>Aging Roof Leads</h3>
        <p>Beyond storm damage -- we target homes 10 or more years old that are overdue for inspection regardless of recent weather.</p>
      </div>
    </div>
    <div class="urgency">
      <strong>LIMITED EXCLUSIVE SLOTS AVAILABLE THIS WEEK</strong>
      We only work with one roofing contractor per market area to keep your leads 100% exclusive.
      Once your territory is claimed, it is locked. Call now before a competitor takes your zip codes.
    </div>
  </div>

  <hr class="divider">

  <!-- MARKETS -->
  <div class="section" id="markets">
    <div class="section-title">MARKETS WE SERVE</div>
    <div class="section-sub">Active storm lead generation across all major Texas metro areas.</div>
    <div class="markets-grid">
      <div class="market-card">
        <h3>Fort Worth / DFW</h3>
        <p>Tarrant, Dallas, and Collin counties. Heavy hail activity year round.</p>
        <div class="zip">76101 -- 76199 and surrounding</div>
      </div>
      <div class="market-card">
        <h3>Houston</h3>
        <p>Harris, Fort Bend, and Montgomery counties. High storm frequency.</p>
        <div class="zip">77001 -- 77099 and surrounding</div>
      </div>
      <div class="market-card">
        <h3>Austin</h3>
        <p>Travis, Williamson, and Hays counties. Fast growing homeowner market.</p>
        <div class="zip">78701 -- 78799 and surrounding</div>
      </div>
      <div class="market-card">
        <h3>San Antonio</h3>
        <p>Bexar and Comal counties. Strong insurance claim market.</p>
        <div class="zip">78201 -- 78299 and surrounding</div>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- PRICING -->
  <div class="section" id="pricing">
    <div class="section-title">PRICING AND PACKAGES</div>
    <div class="section-sub">Simple transparent pricing. No contracts. Cancel anytime.<br>All leads are 100% exclusive -- never shared with another contractor.</div>
    <div class="pricing-grid">
      <div class="price-card">
        <div class="price-label">STARTER</div>
        <div class="price-name">Pay Per Lead</div>
        <div class="price-amount">$150<span> / lead</span></div>
        <div class="price-desc">Single exclusive lead delivered within 24 hours. Great for contractors testing a new market.</div>
        <ul class="price-features">
          <li>Exclusive leads -- never resold</li>
          <li>Hail and storm damage leads</li>
          <li>Verified homeowner contact info</li>
          <li>DNC scrubbed phone numbers</li>
          <li class="no">Priority territory lock</li>
          <li class="no">Dedicated account manager</li>
        </ul>
        <a class="price-btn" href="#contact">GET STARTED</a>
      </div>
      <div class="price-card featured">
        <div class="price-badge">MOST POPULAR</div>
        <div class="price-label">BEST VALUE</div>
        <div class="price-name">10 Lead Bundle</div>
        <div class="price-amount">$1,000<span> / 10 leads</span></div>
        <div class="price-desc">Save $500 vs buying individually. 10 exclusive leads delivered to your market.</div>
        <ul class="price-features">
          <li>10 exclusive leads -- never resold</li>
          <li>Hail, storm, and aging roof leads</li>
          <li>Verified homeowner contact info</li>
          <li>DNC scrubbed phone numbers</li>
          <li>Priority territory lock</li>
          <li>Dedicated account manager</li>
        </ul>
        <a class="price-btn" href="#contact">CLAIM YOUR TERRITORY</a>
      </div>
      <div class="price-card">
        <div class="price-label">POWER</div>
        <div class="price-name">20 Lead Bundle</div>
        <div class="price-amount">$2,200<span> / 20 leads</span></div>
        <div class="price-desc">Best for high volume contractors who want maximum coverage across Texas markets.</div>
        <ul class="price-features">
          <li>20 exclusive leads -- never resold</li>
          <li>All lead types included</li>
          <li>Multi-market coverage</li>
          <li>DNC scrubbed phone numbers</li>
          <li>Priority territory lock</li>
          <li>Dedicated account manager</li>
        </ul>
        <a class="price-btn" href="#contact">CONTACT FOR QUOTE</a>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- ABOUT -->
  <div class="section" id="about">
    <div class="section-title">ABOUT IRONCLAD LEADS</div>
    <div class="about-grid">
      <div class="about-text">
        <h3>WE FIND THE LEADS. YOU CLOSE THE JOBS.</h3>
        <p>IronClad Leads is a Texas-based roofing lead generation company specializing in connecting licensed roofing contractors with pre-qualified, insurance-eligible homeowners across the state.</p>
        <p>We are not a roofing company -- we are lead generation specialists. Our entire focus is finding homeowners who need a new roof and getting them on the phone with you. Every lead we deliver is 100% exclusive, meaning it goes to one contractor and one contractor only.</p>
        <p>We use a combination of storm data analysis, county appraisal records, skip tracing, and AI-powered outreach to identify and qualify homeowners in your target market before we ever pass the lead to you.</p>
        <p>Based in Texas. Built for Texas roofers.</p>
      </div>
      <div class="about-stats">
        <div class="stat">
          <div class="stat-num">100%</div>
          <div class="stat-label">EXCLUSIVE LEADS</div>
        </div>
        <div class="stat">
          <div class="stat-num">4</div>
          <div class="stat-label">MAJOR TX MARKETS</div>
        </div>
        <div class="stat">
          <div class="stat-num">DNC</div>
          <div class="stat-label">SCRUBBED LISTS</div>
        </div>
        <div class="stat">
          <div class="stat-num">24hr</div>
          <div class="stat-label">LEAD DELIVERY</div>
        </div>
      </div>
    </div>
  </div>

  <hr class="divider">

  <!-- CONTACT FORM -->
  <div class="section" id="contact">
    <div class="section-title">GET YOUR LEADS TODAY</div>
    <div class="section-sub">Fill out the form below and we will contact you within 24 hours to discuss your target market and get your leads flowing.</div>
    <div class="form-wrap">
      <form id="lead-form">
        <div class="form-row">
          <label>YOUR NAME</label>
          <input type="text" id="fname" placeholder="John Smith" required />
        </div>
        <div class="form-row">
          <label>COMPANY NAME</label>
          <input type="text" id="fcompany" placeholder="Smith Roofing LLC" required />
        </div>
        <div class="form-row">
          <label>PHONE NUMBER</label>
          <input type="tel" id="fphone" placeholder="(817) 555-0000" required />
        </div>
        <div class="form-row">
          <label>EMAIL ADDRESS</label>
          <input type="email" id="femail" placeholder="you@example.com" required />
        </div>
        <div class="form-row">
          <label>TARGET MARKET</label>
          <select id="fmarket">
            <option value="">Select your market</option>
            <option>Fort Worth / DFW</option>
            <option>Houston</option>
            <option>Austin</option>
            <option>San Antonio</option>
            <option>Multiple Markets</option>
          </select>
        </div>
        <div class="form-row">
          <label>PACKAGE INTEREST</label>
          <select id="fpackage">
            <option value="">Select a package</option>
            <option>Single Lead -- $150</option>
            <option>10 Lead Bundle -- $1,000</option>
            <option>20 Lead Bundle -- $2,200</option>
            <option>Not sure yet -- just exploring</option>
          </select>
        </div>
        <div class="form-row">
          <label>MESSAGE (OPTIONAL)</label>
          <textarea id="fmessage" placeholder="Tell us about your business, target zip codes, or any questions..."></textarea>
        </div>
        <button type="button" class="form-submit" onclick="submitForm()">SEND MY REQUEST</button>
        <p class="form-note">We respond within 24 hours. Your information is never shared or sold.</p>
      </form>
      <div class="success-msg" id="success-msg">
        Your request has been received! We will contact you within 24 hours to get your leads flowing.
        Questions? Call us directly at (806) 570-0231.
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-links">
      <a href="#services">Services</a>
      <a href="#markets">Markets</a>
      <a href="#pricing">Pricing</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="tel:+18065700231">(806) 570-0231</a>
      <a href="mailto:contact@ironcladleads.com">contact@ironcladleads.com</a>
    </div>
    <div class="footer-copy">2026 IronClad Leads -- Exclusive Texas Roofing Lead Generation -- All Rights Reserved</div>
  </footer>

  <canvas id="lightning-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18;"></canvas>
  <script>
    // LIGHTNING ANIMATION
    var lcanvas = document.getElementById("lightning-canvas");
    var lctx = lcanvas.getContext("2d");
    function resizeCanvas() { lcanvas.width = window.innerWidth; lcanvas.height = window.innerHeight; }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    function drawBolt(x1, y1, x2, y2, branches) {
      lctx.beginPath();
      lctx.moveTo(x1, y1);
      var dx = x2 - x1, dy = y2 - y1;
      var segments = 12;
      var px = x1, py = y1;
      for (var i = 1; i <= segments; i++) {
        var t = i / segments;
        var nx = x1 + dx * t + (Math.random() - 0.5) * 120;
        var ny = y1 + dy * t;
        lctx.lineTo(nx, ny);
        if (branches > 0 && Math.random() > 0.7) {
          var bx = nx + (Math.random() - 0.5) * 150;
          var by = ny + Math.random() * 150;
          drawBolt(nx, ny, bx, by, 0);
        }
        px = nx; py = ny;
      }
      lctx.strokeStyle = "rgba(0,255,136," + (0.4 + Math.random() * 0.6) + ")";
      lctx.lineWidth = branches > 0 ? 1.5 : 0.5;
      lctx.shadowBlur = 18;
      lctx.shadowColor = "#00ff88";
      lctx.stroke();
    }
    function flash() {
      lctx.clearRect(0, 0, lcanvas.width, lcanvas.height);
      var x = Math.random() * lcanvas.width;
      drawBolt(x, 0, x + (Math.random()-0.5)*200, lcanvas.height * (0.4 + Math.random()*0.5), 2);
      setTimeout(function() {
        lctx.clearRect(0, 0, lcanvas.width, lcanvas.height);
        setTimeout(function() {
          drawBolt(x, 0, x + (Math.random()-0.5)*100, lcanvas.height * (0.3 + Math.random()*0.4), 1);
          setTimeout(function() { lctx.clearRect(0, 0, lcanvas.width, lcanvas.height); }, 80);
        }, 60);
      }, 100);
      var next = 2000 + Math.random() * 5000;
      setTimeout(flash, next);
    }
    setTimeout(flash, 1000);

    function submitForm() {
      var name = document.getElementById('fname').value;
      var company = document.getElementById('fcompany').value;
      var phone = document.getElementById('fphone').value;
      var email = document.getElementById('femail').value;
      if (!name || !company || !phone || !email) {
        alert('Please fill in your name, company, phone, and email.');
        return;
      }
      document.getElementById('lead-form').style.display = 'none';
      document.getElementById('success-msg').style.display = 'block';
    }
  </script>

</body>
</html>`;

app.get('/', function(req, res) {
  res.send(page);
});

app.post('/roof-call', function(req, res) {
  res.set('Content-Type', 'text/xml');
  var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<Response>' +
    '<Pause length="1"/>' +
    '<Gather numDigits="1" action="/handle-response" method="POST" timeout="8">' +
    '<Say voice="Polly.Matthew-Neural" language="en-US">' +
    'Hi, this is an important message for the homeowner. ' +
    'My name is Matthew, calling on behalf of IronClad Leads, ' +
    'a Texas roofing lead generation company serving Fort Worth, Houston, Austin, and San Antonio. ' +
    'Your neighborhood recently experienced hail and storm damage, ' +
    'and many homeowners qualify for a full roof replacement ' +
    'covered entirely by their homeowners insurance ' +
    'at absolutely zero out of pocket cost. ' +
    'We are also inspecting older roofs that your insurance may still cover. ' +
    'We have limited exclusive inspection slots available this week ' +
    'and spots are filling fast in your area. ' +
    'Press 1 now to speak with a roofing specialist and schedule your free inspection. ' +
    'Press 9 to be removed from our list.' +
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
      'Perfect! Please hold while we connect you with an IronClad Leads roofing specialist.' +
      '</Say>' +
      '<Dial>+18065700231</Dial>' +
      '</Response>';
  } else if (digit === '9') {
    xml = '<?xml version="1.0" encoding="UTF-8"?>' +
      '<Response>' +
      '<Say voice="Polly.Matthew-Neural">' +
      'You have been removed from our list and will not receive further calls. Have a wonderful day.' +
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

app.listen(PORT, function() {
  console.log('IronClad Leads running on port ' + PORT);
});
