const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.get('/', function(req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SwiftBook — Online Booking for Every Service Business</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;}
:root{
--bg:#020409;--bg2:#060c14;--bg3:#0a1220;--bg4:#0f1a2e;
--blue:#0ea5e9;--blue2:#38bdf8;--blue3:#7dd3fc;
--elec:#00d4ff;--elec2:#00ffcc;--elec3:#7fffed;
--gold:#fbbf24;--orange:#f97316;--pink:#f472b6;
--green:#22d3ee;
--txt:#f0f8ff;--txt2:#94a3b8;--txt3:#475569;
--wire:#ffffff08;--wire2:#ffffff12;--wire3:#ffffff1a;
--fs:'Syne',sans-serif;--fb:'Inter',sans-serif;
}
body{font-family:var(--fs);background:var(--bg);color:var(--txt);min-height:100vh;overflow-x:hidden;}
.page{display:none;}.page.on{display:block;}
.flex-page{display:none;min-height:100vh;align-items:center;justify-content:center;padding:24px;}
.flex-page.on{display:flex;}
.lightning-bg{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:hidden;}
.lightning-bg svg{width:100%;height:100%;}
.nav{position:sticky;top:0;z-index:100;background:rgba(2,4,9,.9);backdrop-filter:blur(24px);border-bottom:1px solid var(--wire2);padding:0 48px;height:66px;display:flex;align-items:center;gap:14px;}
.nav-logo{font-size:1.2rem;font-weight:800;color:var(--elec);letter-spacing:-0.5px;text-shadow:0 0 20px rgba(0,212,255,.4);}
.nav-logo span{color:#fff;}
.bolt-icon{font-size:1.1rem;filter:drop-shadow(0 0 10px #ffe000) drop-shadow(0 0 20px #ffd700);}
.nav-links{display:flex;gap:26px;margin-left:auto;align-items:center;}
.nav-links a{color:var(--txt2);font-size:0.875rem;cursor:pointer;transition:color .15s;font-family:var(--fb);}
.nav-links a:hover{color:var(--elec);}
.nbtn{padding:10px 22px;border-radius:10px;font-size:0.875rem;font-weight:700;cursor:pointer;border:none;font-family:var(--fs);transition:all .2s;letter-spacing:-0.2px;}
.nbtn-ghost{background:transparent;color:var(--txt2);border:1px solid var(--wire3);}
.nbtn-ghost:hover{color:var(--txt);border-color:var(--wire3);}
.nbtn-elec{background:linear-gradient(135deg,#0284c7,var(--elec));color:#fff;box-shadow:0 0 28px rgba(0,212,255,.35);}
.nbtn-elec:hover{transform:translateY(-1px);box-shadow:0 0 40px rgba(0,212,255,.55);}
.hero{padding:96px 48px 80px;text-align:center;position:relative;z-index:1;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);color:var(--elec);font-size:0.75rem;font-weight:600;padding:6px 18px;border-radius:20px;margin-bottom:24px;font-family:var(--fb);letter-spacing:.5px;}
.hero-badge::before{content:'⚡';}
.hero h1{font-size:4.2rem;font-weight:800;letter-spacing:-3px;line-height:1.05;margin-bottom:20px;max-width:820px;margin-left:auto;margin-right:auto;}
.hero h1 .e{color:var(--elec);text-shadow:0 0 40px rgba(0,212,255,.5);}
.hero h1 .g{background:linear-gradient(135deg,var(--elec),var(--elec2),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{color:var(--txt2);font-size:1rem;line-height:1.75;max-width:540px;margin:0 auto 40px;font-family:var(--fb);}
.hero-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:52px;}
.bigbtn{padding:16px 38px;border-radius:14px;font-size:1rem;font-weight:700;cursor:pointer;border:none;font-family:var(--fs);transition:all .2s;letter-spacing:-0.3px;}
.bigbtn-elec{background:linear-gradient(135deg,#0284c7,#00d4ff,#00ffcc);color:#020409;box-shadow:0 0 50px rgba(0,212,255,.4);}
.bigbtn-elec:hover{transform:translateY(-2px);box-shadow:0 0 70px rgba(0,212,255,.6);}
.bigbtn-ghost{background:var(--wire);color:var(--txt);border:1px solid var(--wire3);}
.bigbtn-ghost:hover{background:var(--wire2);}
.hero-proof{display:flex;gap:28px;justify-content:center;flex-wrap:wrap;}
.proof-chip{display:flex;align-items:center;gap:7px;font-size:0.82rem;color:var(--txt2);font-family:var(--fb);}
.proof-chip::before{content:'✓';color:var(--elec2);font-weight:700;}
.ticker-wrap{border-top:1px solid var(--wire2);border-bottom:1px solid var(--wire2);padding:16px 0;overflow:hidden;background:var(--bg2);position:relative;z-index:1;}
.ticker-wrap::before,.ticker-wrap::after{content:'';position:absolute;top:0;width:100px;height:100%;z-index:2;}
.ticker-wrap::before{left:0;background:linear-gradient(90deg,var(--bg2),transparent);}
.ticker-wrap::after{right:0;background:linear-gradient(-90deg,var(--bg2),transparent);}
.ticker{display:flex;animation:tick 30s linear infinite;width:max-content;}
@keyframes tick{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.t-item{display:flex;align-items:center;gap:8px;padding:0 24px;color:var(--txt2);font-size:0.82rem;font-family:var(--fb);white-space:nowrap;}
.t-bolt{color:#ffe000;font-size:0.85rem;filter:drop-shadow(0 0 4px #ffd700);text-shadow:0 0 8px #ffe000;}
.section{padding:80px 48px;max-width:1200px;margin:0 auto;position:relative;z-index:1;}
.sec-eye{font-size:0.72rem;font-weight:600;color:var(--elec);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;font-family:var(--fb);}
.sec-h{font-size:2.4rem;font-weight:800;letter-spacing:-2px;line-height:1.1;margin-bottom:14px;}
.sec-sub{color:var(--txt2);font-size:0.95rem;line-height:1.7;max-width:460px;font-family:var(--fb);}
.feat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--wire2);border:1px solid var(--wire2);border-radius:20px;overflow:hidden;margin-top:48px;}
.feat{background:var(--bg2);padding:32px;transition:all .2s;position:relative;overflow:hidden;}
.feat:hover{background:var(--bg3);}
.feat-top{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
.feat-ico{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;}
.feat-ico.blue{background:rgba(14,165,233,.12);border:1px solid rgba(14,165,233,.2);}
.feat-ico.elec{background:rgba(0,212,255,.1);border:1px solid rgba(0,212,255,.2);}
.feat-ico.gold{background:rgba(251,191,36,.1);border:1px solid rgba(251,191,36,.2);}
.feat-ico.green{background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.2);}
.feat-ico.pink{background:rgba(244,114,182,.1);border:1px solid rgba(244,114,182,.2);}
.feat-ico.orange{background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.2);}
.feat-badge{font-size:0.65rem;font-weight:700;padding:2px 8px;border-radius:6px;letter-spacing:.5px;font-family:var(--fb);}
.feat-badge.pro{background:rgba(251,191,36,.15);color:var(--gold);border:1px solid rgba(251,191,36,.25);}
.feat-badge.new{background:rgba(0,212,255,.12);color:var(--elec);border:1px solid rgba(0,212,255,.2);}
.feat-title{font-size:0.95rem;font-weight:700;margin-bottom:8px;letter-spacing:-0.3px;}
.feat-desc{font-size:0.85rem;color:var(--txt2);line-height:1.65;font-family:var(--fb);}
.stats-banner{background:var(--bg2);border-top:1px solid var(--wire2);border-bottom:1px solid var(--wire2);display:grid;grid-template-columns:repeat(4,1fr);gap:1px;position:relative;z-index:1;}
.stat-b{padding:40px 32px;text-align:center;border-right:1px solid var(--wire);}
.stat-b:last-child{border-right:none;}
.stat-b-num{font-size:2.8rem;font-weight:800;letter-spacing:-2px;background:linear-gradient(135deg,var(--elec),var(--elec2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.stat-b-lbl{font-size:0.82rem;color:var(--txt2);margin-top:6px;font-family:var(--fb);}
.pricing{padding:80px 48px;max-width:1200px;margin:0 auto;text-align:center;position:relative;z-index:1;}
.price-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:52px;text-align:left;}
.pc{background:var(--bg2);border:1px solid var(--wire2);border-radius:20px;padding:28px;position:relative;transition:all .2s;}
.pc:hover{transform:translateY(-3px);border-color:var(--wire3);}
.pc.hot{background:linear-gradient(145deg,rgba(0,212,255,.07),rgba(0,255,204,.04));border:1px solid rgba(0,212,255,.3);box-shadow:0 0 40px rgba(0,212,255,.1);}
.pc-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#0284c7,var(--elec));color:#020409;font-size:0.68rem;font-weight:800;padding:4px 16px;border-radius:20px;white-space:nowrap;box-shadow:0 0 20px rgba(0,212,255,.5);}
.pc-tier{font-size:0.68rem;font-weight:700;color:var(--txt3);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;font-family:var(--fb);}
.pc-price{font-size:2.4rem;font-weight:800;letter-spacing:-2px;margin-bottom:4px;}
.pc-price.elec{color:var(--elec);text-shadow:0 0 20px rgba(0,212,255,.3);}
.pc-price sub{font-size:0.9rem;font-weight:400;color:var(--txt2);}
.pc-desc{font-size:0.8rem;color:var(--txt2);margin-bottom:20px;line-height:1.5;font-family:var(--fb);}
.pc-list{list-style:none;margin-bottom:24px;}
.pc-list li{font-size:0.82rem;color:var(--txt2);padding:6px 0;border-bottom:1px solid var(--wire);display:flex;gap:8px;align-items:flex-start;font-family:var(--fb);}
.pc-list li .ck{color:var(--elec2);font-weight:700;flex-shrink:0;}
.pc-list li.no{opacity:.3;}
.pbtn{display:block;width:100%;padding:12px;border-radius:10px;font-size:0.875rem;font-weight:700;cursor:pointer;text-align:center;border:none;transition:all .2s;font-family:var(--fs);}
.pbtn-def{background:var(--wire);color:var(--txt);}
.pbtn-def:hover{background:var(--wire2);}
.pbtn-elec{background:linear-gradient(135deg,#0284c7,#00d4ff);color:#020409;box-shadow:0 0 20px rgba(0,212,255,.3);}
.pbtn-elec:hover{transform:translateY(-1px);box-shadow:0 0 32px rgba(0,212,255,.5);}
.fcta{padding:96px 48px;text-align:center;position:relative;z-index:1;overflow:hidden;}
.fcta h2{font-size:3.2rem;font-weight:800;letter-spacing:-2.5px;margin-bottom:16px;line-height:1.05;}
.fcta h2 span{color:var(--elec);text-shadow:0 0 30px rgba(0,212,255,.4);}
.footer-bar{background:var(--bg2);border-top:1px solid var(--wire2);padding:28px 48px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;position:relative;z-index:1;}
.flogo{font-size:1rem;font-weight:800;color:var(--elec);}
.flinks{display:flex;gap:20px;}
.flinks a{color:var(--txt3);font-size:0.78rem;cursor:pointer;font-family:var(--fb);}
.fcopy{color:var(--txt3);font-size:0.75rem;font-family:var(--fb);}
.sbox{background:var(--bg2);border:1px solid rgba(0,212,255,.2);border-radius:24px;padding:40px;width:100%;max-width:440px;position:relative;overflow:hidden;box-shadow:0 0 60px rgba(0,212,255,.08);}
.sbox::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--elec),transparent);}
.sbox-logo{font-size:1.1rem;font-weight:800;color:var(--elec);margin-bottom:20px;}
.sbox h2{font-size:1.5rem;font-weight:800;letter-spacing:-0.8px;margin-bottom:4px;}
.sbox-sub{color:var(--txt2);font-size:0.875rem;margin-bottom:28px;font-family:var(--fb);}
.fg{margin-bottom:13px;}
.fg label{display:block;font-size:0.7rem;font-weight:600;color:var(--txt2);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px;font-family:var(--fb);}
.fg input,.fg select{width:100%;background:var(--bg3);border:1px solid var(--wire2);color:var(--txt);padding:11px 14px;border-radius:10px;font-size:0.875rem;font-family:var(--fb);outline:none;transition:border-color .15s;}
.fg input:focus,.fg select:focus{border-color:var(--elec);}
.fg2{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.sbtn{width:100%;padding:14px;background:linear-gradient(135deg,#0284c7,#00d4ff,#00ffcc);color:#020409;border:none;border-radius:12px;font-size:0.95rem;font-weight:800;cursor:pointer;margin-top:8px;transition:all .2s;font-family:var(--fs);box-shadow:0 0 36px rgba(0,212,255,.35);}
.sbtn:hover{transform:translateY(-1px);box-shadow:0 0 50px rgba(0,212,255,.55);}
.back-link{text-align:center;margin-top:14px;font-size:0.82rem;color:var(--txt2);cursor:pointer;font-family:var(--fb);}
.back-link span{color:var(--elec);font-weight:600;}
#page-dash{display:none;height:100vh;}
#page-dash.on{display:grid;grid-template-columns:240px 1fr;grid-template-rows:62px 1fr;}
.dtop{grid-column:1/-1;background:var(--bg2);border-bottom:1px solid var(--wire2);display:flex;align-items:center;padding:0 20px;gap:14px;}
.dtop-logo{font-size:1rem;font-weight:800;color:var(--elec);}
.dtop-co{font-size:0.82rem;color:var(--txt2);font-family:var(--fb);padding:4px 10px;background:var(--wire);border:1px solid var(--wire2);border-radius:8px;}
.dtop-r{margin-left:auto;display:flex;gap:7px;align-items:center;}
.dpill{font-size:11px;padding:4px 10px;border-radius:20px;border:1px solid var(--wire2);color:var(--txt2);font-weight:500;font-family:var(--fb);}
.dpill.on{background:rgba(0,255,204,.1);border-color:rgba(0,255,204,.3);color:var(--elec2);}
.dpill.link{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.3);color:var(--elec);cursor:pointer;font-weight:600;}
.dside{background:var(--bg2);border-right:1px solid var(--wire2);display:flex;flex-direction:column;padding:14px 10px;overflow-y:auto;}
.dside-lbl{font-size:9px;font-weight:700;color:var(--txt3);letter-spacing:2px;text-transform:uppercase;padding:10px 8px 4px;font-family:var(--fb);}
.dsb{display:flex;align-items:center;gap:9px;width:100%;padding:9px 11px;border-radius:10px;color:var(--txt2);font-size:0.82rem;font-weight:500;cursor:pointer;border:none;background:transparent;text-align:left;font-family:var(--fb);transition:all .15s;margin-bottom:1px;}
.dsb:hover{background:var(--wire);color:var(--txt);}
.dsb.on{background:rgba(0,212,255,.1);color:var(--elec);font-weight:600;border:1px solid rgba(0,212,255,.15);}
.dsb .cnt{margin-left:auto;background:linear-gradient(135deg,#0284c7,var(--elec));color:#020409;font-size:9px;padding:2px 7px;border-radius:10px;font-weight:800;}
.dmain{overflow-y:auto;padding:22px;background:var(--bg);}
.dtab{display:none;}.dtab.on{display:block;}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px;}
.sc{background:var(--bg2);border:1px solid var(--wire2);border-radius:14px;padding:18px;}
.sc-lbl{font-size:0.68rem;font-weight:600;color:var(--txt3);letter-spacing:.5px;text-transform:uppercase;margin-bottom:8px;font-family:var(--fb);}
.sc-val{font-size:1.8rem;font-weight:800;letter-spacing:-1px;}
.sc-val.elec{color:var(--elec);}
.sc-val.green{color:var(--elec2);}
.sc-val.gold{color:var(--gold);}
.sc-sub{font-size:0.7rem;color:var(--txt3);margin-top:3px;font-family:var(--fb);}
.card{background:var(--bg2);border:1px solid var(--wire2);border-radius:16px;padding:20px;margin-bottom:14px;}
.card-title{font-size:0.875rem;font-weight:700;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;}
.abtn{padding:8px 14px;border-radius:8px;font-size:0.78rem;font-weight:600;cursor:pointer;border:none;font-family:var(--fs);transition:all .15s;}
.abtn-elec{background:linear-gradient(135deg,#0284c7,var(--elec));color:#020409;}
.abtn-ghost{background:var(--wire);color:var(--txt2);border:1px solid var(--wire2);}
.appt-row{background:var(--bg3);border:1px solid var(--wire2);border-radius:12px;padding:14px 16px;margin-bottom:8px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;}
.ar-name{font-weight:700;font-size:0.9rem;margin-bottom:3px;}
.ar-addr{font-size:0.78rem;color:var(--txt2);font-family:var(--fb);}
.ar-phone{font-size:0.78rem;color:var(--elec);font-family:monospace;margin-top:2px;}
.ar-svc{display:inline-block;font-size:0.68rem;font-weight:600;padding:2px 8px;border-radius:6px;margin-top:5px;background:rgba(0,212,255,.1);color:var(--elec);border:1px solid rgba(0,212,255,.2);}
.ar-r{text-align:right;}
.ar-date{font-size:0.7rem;color:var(--txt2);font-family:var(--fb);}
.ar-time{font-size:1rem;font-weight:700;color:var(--elec);}
.ar-paid{font-size:0.68rem;font-weight:700;color:var(--elec2);background:rgba(0,255,204,.1);border:1px solid rgba(0,255,204,.2);padding:2px 8px;border-radius:6px;margin-top:3px;display:inline-block;}
.confirmed{background:rgba(34,211,238,.1);color:var(--green);font-size:0.68rem;padding:2px 8px;border-radius:6px;font-weight:600;border:1px solid rgba(34,211,238,.2);}
.cal-wrap{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;}
.cal-head{text-align:center;font-size:0.68rem;font-weight:600;color:var(--txt3);padding:6px 0;font-family:var(--fb);}
.cal-cell{min-height:68px;background:var(--bg3);border:1px solid var(--wire);border-radius:10px;padding:7px;cursor:pointer;}
.cal-cell.today{border-color:rgba(0,212,255,.4);background:rgba(0,212,255,.05);}
.cal-cell.has{background:rgba(0,212,255,.04);}
.cal-num{font-size:0.75rem;font-weight:600;}
.cal-cell.today .cal-num{color:var(--elec);}
.cal-dot{background:linear-gradient(135deg,#0284c7,var(--elec));color:#020409;font-size:9px;padding:2px 5px;border-radius:4px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700;}
.ana-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.ana-card{background:var(--bg2);border:1px solid var(--wire2);border-radius:16px;padding:20px;}
.ana-title{font-size:0.82rem;font-weight:700;color:var(--txt2);margin-bottom:14px;}
.bar-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.bar-lbl{font-size:0.75rem;color:var(--txt2);width:80px;flex-shrink:0;font-family:var(--fb);}
.bar-track{flex:1;background:var(--wire);border-radius:4px;height:8px;overflow:hidden;}
.bar-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,#0284c7,var(--elec));}
.bar-val{font-size:0.75rem;color:var(--elec);font-weight:600;width:32px;text-align:right;font-family:var(--fb);}
.review-item{display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--wire);}
.review-item:last-child{border-bottom:none;}
.review-stars{color:var(--gold);font-size:0.85rem;}
.review-text{font-size:0.8rem;color:var(--txt2);font-family:var(--fb);line-height:1.5;}
.review-name{font-size:0.72rem;color:var(--txt3);margin-top:3px;font-family:var(--fb);}
.setup-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.ts-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px;}
.ts{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:var(--bg3);border:1px solid var(--wire);border-radius:10px;font-size:0.8rem;cursor:pointer;font-family:var(--fb);}
.ts.on{background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.25);color:var(--elec);font-weight:600;}
.link-box{background:var(--bg3);border:1px solid rgba(0,212,255,.2);border-radius:10px;padding:11px 14px;font-family:monospace;font-size:0.82rem;color:var(--elec);margin-top:10px;word-break:break-all;}
.copy-btn{background:rgba(0,212,255,.1);color:var(--elec);border:1px solid rgba(0,212,255,.2);padding:7px 14px;border-radius:8px;font-size:0.78rem;font-weight:600;cursor:pointer;margin-top:8px;font-family:var(--fs);}
.inp-d{background:var(--bg3);border:1px solid var(--wire2);color:var(--txt);padding:10px 13px;border-radius:10px;font-size:0.875rem;width:100%;outline:none;font-family:var(--fb);}
.inp-d:focus{border-color:var(--elec);}
.lbl-d{display:block;font-size:0.7rem;font-weight:600;color:var(--txt2);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px;margin-top:12px;font-family:var(--fb);}
.sw-row{display:flex;gap:8px;margin-top:8px;}
.sw{width:28px;height:28px;border-radius:8px;cursor:pointer;border:2px solid transparent;}
.sw.on{outline:2px solid var(--elec);outline-offset:2px;}
.bwrap{width:100%;max-width:480px;}
.bback{color:var(--txt2);font-size:0.78rem;cursor:pointer;margin-bottom:12px;display:flex;align-items:center;gap:6px;font-family:var(--fb);}
.bcard{background:var(--bg2);border:1px solid rgba(0,212,255,.2);border-radius:24px;overflow:hidden;box-shadow:0 0 60px rgba(0,212,255,.08);}
.bcard-top{height:2px;background:linear-gradient(90deg,transparent,var(--elec),transparent);}
.bhead{padding:24px 26px 20px;border-bottom:1px solid var(--wire2);}
.blogo{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;color:#020409;margin-bottom:14px;font-size:0.95rem;background:linear-gradient(135deg,#0284c7,var(--elec));}
.bname{font-size:1.05rem;font-weight:800;margin-bottom:4px;}
.bmeta{font-size:0.78rem;color:var(--txt2);display:flex;gap:12px;margin-bottom:8px;font-family:var(--fb);}
.bdesc{font-size:0.82rem;color:var(--txt2);line-height:1.55;font-family:var(--fb);}
.bbody{padding:22px 26px;}
.bstep{display:none;}.bstep.on{display:block;}
.bstep-title{font-size:0.88rem;font-weight:700;margin-bottom:14px;}
.date-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:5px;margin-bottom:14px;}
.dc{padding:8px 3px;text-align:center;border-radius:10px;cursor:pointer;border:1px solid var(--wire);background:var(--bg3);font-size:0.72rem;}
.dc:hover,.dc.on{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.35);color:var(--elec);}
.dc .dn{font-size:0.6rem;color:var(--txt3);margin-bottom:2px;font-family:var(--fb);}
.time-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:14px;}
.tc{padding:11px;text-align:center;border-radius:10px;cursor:pointer;border:1px solid var(--wire);background:var(--bg3);font-size:0.875rem;font-family:var(--fb);}
.tc:hover,.tc.on{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.35);color:var(--elec);}
.bfg{margin-bottom:10px;}
.bfg label{display:block;font-size:0.68rem;font-weight:600;color:var(--txt2);letter-spacing:.5px;text-transform:uppercase;margin-bottom:4px;font-family:var(--fb);}
.bfg input{width:100%;background:var(--bg3);border:1px solid var(--wire2);color:var(--txt);padding:10px 13px;border-radius:10px;font-size:0.875rem;font-family:var(--fb);outline:none;}
.bfg input:focus{border-color:var(--elec);}
.pay-box{background:rgba(0,212,255,.05);border:1px solid rgba(0,212,255,.15);border-radius:12px;padding:14px;margin-bottom:14px;}
.pay-title{font-size:0.78rem;font-weight:700;color:var(--elec);margin-bottom:10px;}
.bbtn{width:100%;padding:13px;background:linear-gradient(135deg,#0284c7,#00d4ff);color:#020409;border:none;border-radius:12px;font-size:0.875rem;font-weight:800;cursor:pointer;font-family:var(--fs);margin-top:6px;box-shadow:0 0 24px rgba(0,212,255,.25);}
.bbtn:hover{transform:translateY(-1px);box-shadow:0 0 36px rgba(0,212,255,.45);}
.bbtn:disabled{opacity:.35;cursor:not-allowed;}
.bbtn-ghost{background:var(--wire);color:var(--txt2);border:1px solid var(--wire2);box-shadow:none;}
.confirm-wrap{text-align:center;padding:16px 0;}
.confirm-circle{width:60px;height:60px;background:linear-gradient(135deg,#0284c7,var(--elec));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.4rem;font-weight:800;color:#020409;margin:0 auto 16px;box-shadow:0 0 32px rgba(0,212,255,.4);}
.confirm-title{font-size:1rem;font-weight:800;color:var(--elec);margin-bottom:8px;}
.confirm-sub{color:var(--txt2);font-size:0.82rem;line-height:1.65;font-family:var(--fb);}
@media(max-width:768px){
.nav{padding:0 16px;}.hero{padding:60px 20px 48px;}.hero h1{font-size:2.4rem;letter-spacing:-1.5px;}
.section,.pricing{padding:48px 20px;}.feat-grid,.price-grid{grid-template-columns:1fr;}
.stats-banner{grid-template-columns:1fr 1fr;}.stats-row{grid-template-columns:1fr 1fr;}
.setup-grid,.ana-grid{grid-template-columns:1fr;}#page-dash.on{grid-template-columns:1fr;grid-template-rows:62px auto 1fr;}
.dside{display:flex;flex-direction:row;overflow-x:auto;padding:8px;gap:4px;border-right:none;border-bottom:1px solid var(--wire2);}
.dside-lbl{display:none;}.dsb{white-space:nowrap;font-size:0.72rem;padding:7px 9px;}
}
</style>
</head>
<body>
 
<div class="lightning-bg">
<svg viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="4" result="blur"/>
<feComposite in="SourceGraphic" in2="blur" operator="over"/>
<feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
</defs>
<g opacity="0.55">
<polyline points="120,0 135,80 115,80 155,200 130,200 185,380" stroke="#ffe000" stroke-width="2.5" fill="none" stroke-dasharray="300" stroke-dashoffset="300" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="300;0;300" dur="3s" begin="0s" repeatCount="indefinite"/></polyline>
<polyline points="1280,0 1265,90 1285,90 1245,210 1270,210 1215,400" stroke="#ffd700" stroke-width="2.2" fill="none" stroke-dasharray="300" stroke-dashoffset="300" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="300;0;300" dur="4s" begin="1s" repeatCount="indefinite"/></polyline>
<polyline points="700,0 715,60 695,60 730,160 705,160 750,280" stroke="#ffec00" stroke-width="2" fill="none" stroke-dasharray="200" stroke-dashoffset="200" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="200;0;200" dur="2.8s" begin="0.5s" repeatCount="indefinite"/></polyline>
<polyline points="350,0 365,70 345,70 380,180 355,180 400,320" stroke="#ffe000" stroke-width="1.8" fill="none" stroke-dasharray="250" stroke-dashoffset="250" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="250;0;250" dur="5s" begin="1.8s" repeatCount="indefinite"/></polyline>
<polyline points="1050,0 1035,85 1055,85 1020,195 1045,195 990,360" stroke="#ffd700" stroke-width="1.8" fill="none" stroke-dasharray="280" stroke-dashoffset="280" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="280;0;280" dur="3.8s" begin="0.3s" repeatCount="indefinite"/></polyline>
<polyline points="550,0 560,50 545,50 575,130 555,130 590,240" stroke="#ffec00" stroke-width="1.5" fill="none" stroke-dasharray="220" stroke-dashoffset="220" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="220;0;220" dur="4.5s" begin="2.2s" repeatCount="indefinite"/></polyline>
<polyline points="900,0 912,65 895,65 925,155 905,155 940,270" stroke="#ffe000" stroke-width="1.5" fill="none" stroke-dasharray="240" stroke-dashoffset="240" filter="url(#glow)"><animate attributeName="stroke-dashoffset" values="240;0;240" dur="3.2s" begin="1.2s" repeatCount="indefinite"/></polyline>
</g>
</svg>
</div>
 
<div id="page-landing" class="page on">
  <div class="nav">
    <span class="bolt-icon">⚡</span>
    <div class="nav-logo">Swift<span>Book</span></div>
    <div class="nav-links">
      <a>Features</a><a>Pricing</a>
      <a onclick="goTo('dash')">Demo</a>
      <button class="nbtn nbtn-ghost" onclick="goTo('signup')">Sign in</button>
      <button class="nbtn nbtn-elec" onclick="goTo('signup')">Get Started Free</button>
    </div>
  </div>
  <div class="hero">
    <div class="hero-badge">The #1 booking platform for service businesses</div>
    <h1>Your customers book.<br>You <span class="e">get paid.</span><br><span class="g">Automatically.</span></h1>
    <p class="hero-sub">SwiftBook gives every service business a stunning booking page, built-in payments, SMS reminders, and AI receptionist — all in one platform.</p>
    <div class="hero-btns">
      <button class="bigbtn bigbtn-elec" onclick="goTo('signup')">⚡ Start Free — No Card Needed</button>
      <button class="bigbtn bigbtn-ghost" onclick="goTo('book')">See Booking Page →</button>
    </div>
    <div class="hero-proof">
      <div class="proof-chip">Free to start</div>
      <div class="proof-chip">Live in 2 minutes</div>
      <div class="proof-chip">Built-in payments</div>
      <div class="proof-chip">Cancel anytime</div>
    </div>
  </div>
  <div class="ticker-wrap">
    <div class="ticker">
      <div class="t-item"><span class="t-bolt">⚡</span>Roofing</div><div class="t-item"><span class="t-bolt">⚡</span>HVAC</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Plumbing</div><div class="t-item"><span class="t-bolt">⚡</span>Electrical</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pest Control</div><div class="t-item"><span class="t-bolt">⚡</span>Landscaping</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pressure Washing</div><div class="t-item"><span class="t-bolt">⚡</span>Window Cleaning</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pool Service</div><div class="t-item"><span class="t-bolt">⚡</span>Home Inspection</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Appliance Repair</div><div class="t-item"><span class="t-bolt">⚡</span>Chimney Sweep</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Roofing</div><div class="t-item"><span class="t-bolt">⚡</span>HVAC</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Plumbing</div><div class="t-item"><span class="t-bolt">⚡</span>Electrical</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pest Control</div><div class="t-item"><span class="t-bolt">⚡</span>Landscaping</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pressure Washing</div><div class="t-item"><span class="t-bolt">⚡</span>Window Cleaning</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Pool Service</div><div class="t-item"><span class="t-bolt">⚡</span>Home Inspection</div>
      <div class="t-item"><span class="t-bolt">⚡</span>Appliance Repair</div><div class="t-item"><span class="t-bolt">⚡</span>Chimney Sweep</div>
    </div>
  </div>
  <div class="section">
    <div class="sec-eye">Features</div>
    <div class="sec-h">Everything to grow your business</div>
    <div class="sec-sub">Not just a booking page. A complete revenue engine for service businesses.</div>
    <div class="feat-grid">
      <div class="feat"><div class="feat-top"><div class="feat-ico elec">📅</div><span class="feat-badge new">FREE</span></div><div class="feat-title">Instant Booking Page</div><div class="feat-desc">Live in 2 minutes. Branded with your logo and colors. Share one link — customers book themselves 24/7.</div></div>
      <div class="feat"><div class="feat-top"><div class="feat-ico gold">💳</div><span class="feat-badge pro">PRO</span></div><div class="feat-title">Built-in Payments</div><div class="feat-desc">Charge a deposit or full payment at booking via Stripe. Get paid before you even show up.</div></div>
      <div class="feat"><div class="feat-top"><div class="feat-ico blue">📱</div><span class="feat-badge pro">PRO</span></div><div class="feat-title">SMS Reminders</div><div class="feat-desc">Automated texts sent 24 hours and 1 hour before appointments. Reduce no-shows by 60%.</div></div>
      <div class="feat"><div class="feat-top"><div class="feat-ico pink">⭐</div><span class="feat-badge pro">PRO</span></div><div class="feat-title">Review Automation</div><div class="feat-desc">After every job, automatically send a Google review request. Build your 5-star reputation on autopilot.</div></div>
      <div class="feat"><div class="feat-top"><div class="feat-ico orange">🤖</div><span class="feat-badge pro">ELITE</span></div><div class="feat-title">AI Receptionist</div><div class="feat-desc">An AI agent answers your calls 24/7, qualifies customers, and books appointments automatically.</div></div>
      <div class="feat"><div class="feat-top"><div class="feat-ico green">📊</div><span class="feat-badge pro">PRO</span></div><div class="feat-title">Analytics Dashboard</div><div class="feat-desc">Track bookings, revenue, no-show rates, and top services. Make smarter decisions to grow faster.</div></div>
    </div>
  </div>
  <div class="stats-banner">
    <div class="stat-b"><div class="stat-b-num">2 min</div><div class="stat-b-lbl">Average setup time</div></div>
    <div class="stat-b"><div class="stat-b-num">60%</div><div class="stat-b-lbl">Fewer no-shows with SMS</div></div>
    <div class="stat-b"><div class="stat-b-num">$0</div><div class="stat-b-lbl">To start — free forever plan</div></div>
    <div class="stat-b"><div class="stat-b-num">24/7</div><div class="stat-b-lbl">AI receptionist answers calls</div></div>
  </div>
  <div class="pricing">
    <div class="sec-eye" style="text-align:center;">Pricing</div>
    <div class="sec-h" style="text-align:center;margin-bottom:8px;">Built to make you money</div>
    <div style="color:var(--txt2);font-size:0.95rem;font-family:var(--fb);">Start free. Add features as you grow. Cancel anytime.</div>
    <div class="price-grid">
      <div class="pc"><div class="pc-tier">Starter</div><div class="pc-price">Free<sub> forever</sub></div><div class="pc-desc">Get started with online booking at zero cost.</div><ul class="pc-list"><li><span class="ck">✓</span>1 booking page</li><li><span class="ck">✓</span>20 bookings/month</li><li><span class="ck">✓</span>Email notifications</li><li><span class="ck">✓</span>Basic calendar</li><li class="no"><span class="ck">—</span>Payments</li><li class="no"><span class="ck">—</span>SMS reminders</li></ul><button class="pbtn pbtn-def" onclick="goTo('signup')">Get Started Free</button></div>
      <div class="pc hot"><div class="pc-badge">⚡ Most Popular</div><div class="pc-tier">Pro</div><div class="pc-price elec">$99<sub>/month</sub></div><div class="pc-desc">For serious businesses ready to grow revenue fast.</div><ul class="pc-list"><li><span class="ck">✓</span>Unlimited booking pages</li><li><span class="ck">✓</span>Unlimited bookings</li><li><span class="ck">✓</span>Built-in payment processing</li><li><span class="ck">✓</span>SMS reminders</li><li><span class="ck">✓</span>Review automation</li><li><span class="ck">✓</span>Analytics dashboard</li></ul><button class="pbtn pbtn-elec" onclick="goTo('signup')">Start 14-Day Free Trial</button></div>
      <div class="pc"><div class="pc-tier">Elite</div><div class="pc-price">$199<sub>/month</sub></div><div class="pc-desc">For businesses that want to run on full autopilot.</div><ul class="pc-list"><li><span class="ck">✓</span>Everything in Pro</li><li><span class="ck">✓</span>AI receptionist 24/7</li><li><span class="ck">✓</span>AI lead qualification</li><li><span class="ck">✓</span>Automated follow-up texts</li><li><span class="ck">✓</span>Priority support</li><li><span class="ck">✓</span>IronClad Leads integration</li></ul><button class="pbtn pbtn-def" onclick="goTo('signup')">Start 14-Day Free Trial</button></div>
      <div class="pc"><div class="pc-tier">Agency</div><div class="pc-price">$499<sub>/month</sub></div><div class="pc-desc">For agencies managing 10+ service business clients.</div><ul class="pc-list"><li><span class="ck">✓</span>Unlimited client accounts</li><li><span class="ck">✓</span>Full white label branding</li><li><span class="ck">✓</span>All Elite features</li><li><span class="ck">✓</span>API access</li><li><span class="ck">✓</span>Dedicated account manager</li><li><span class="ck">✓</span>Custom integrations</li></ul><button class="pbtn pbtn-def" onclick="goTo('signup')">Contact Sales</button></div>
    </div>
  </div>
  <div class="fcta">
    <h2>Ready to <span>electrify</span><br>your bookings?</h2>
    <p class="hero-sub" style="margin-bottom:36px;">Join service businesses across Texas using SwiftBook to book more jobs and get paid faster.</p>
    <button class="bigbtn bigbtn-elec" onclick="goTo('signup')">⚡ Start Free Today</button>
  </div>
  <div class="footer-bar">
    <div class="flogo">⚡ SwiftBook</div>
    <div class="flinks"><a>Features</a><a>Pricing</a><a>Privacy</a><a>Terms</a><a>Contact</a></div>
    <div class="fcopy">© 2026 SwiftBook. Built in Texas. All rights reserved.</div>
  </div>
</div>
 
<div id="page-signup" class="flex-page">
  <div class="sbox">
    <div class="sbox-logo">⚡ SwiftBook</div>
    <h2>Create your account</h2>
    <div class="sbox-sub">Your booking page is live in 2 minutes. No credit card required.</div>
    <div class="fg2">
      <div class="fg"><label>First Name</label><input id="s-first" placeholder="John" /></div>
      <div class="fg"><label>Last Name</label><input id="s-last" placeholder="Smith" /></div>
    </div>
    <div class="fg"><label>Business Name</label><input id="s-biz" placeholder="Smith Roofing LLC" /></div>
    <div class="fg"><label>Industry</label><select id="s-ind"><option>Roofing</option><option>HVAC</option><option>Plumbing</option><option>Electrical</option><option>Pest Control</option><option>Landscaping</option><option>Pressure Washing</option><option>Window Cleaning</option><option>Home Inspection</option><option>Other Service Business</option></select></div>
    <div class="fg"><label>Email</label><input type="email" id="s-email" placeholder="you@yourbusiness.com" /></div>
    <div class="fg"><label>Phone</label><input type="tel" id="s-phone" placeholder="(817) 555-0000" /></div>
    <div class="fg"><label>Password</label><input type="password" id="s-pass" placeholder="Create a password" /></div>
    <button class="sbtn" onclick="createAcc()">⚡ Create My Account →</button>
    <div class="back-link" onclick="goTo('landing')">Already have an account? <span>Sign in</span></div>
  </div>
</div>
 
<div id="page-dash" class="page">
  <div class="dtop">
    <span style="color:var(--elec)">⚡</span>
    <div class="dtop-logo">SwiftBook</div>
    <div class="dtop-co" id="d-co">My Business</div>
    <div class="dtop-r">
      <div class="dpill on">● Pro Plan</div>
      <div class="dpill link" onclick="goTo('book')">My Booking Page →</div>
      <div class="dpill" id="d-ind">Roofing</div>
    </div>
  </div>
  <div class="dside">
    <div class="dside-lbl">Overview</div>
    <button class="dsb on" id="sb-overview" onclick="showTab('overview')">📊 Dashboard</button>
    <button class="dsb" id="sb-calendar" onclick="showTab('calendar')">📅 Calendar</button>
    <button class="dsb" id="sb-appts" onclick="showTab('appts')">🏠 Bookings <span class="cnt" id="a-cnt">0</span></button>
    <button class="dsb" id="sb-analytics" onclick="showTab('analytics')">📈 Analytics</button>
    <div class="dside-lbl">Revenue</div>
    <button class="dsb" id="sb-payments" onclick="showTab('payments')">💳 Payments</button>
    <button class="dsb" id="sb-reviews" onclick="showTab('reviews')">⭐ Reviews</button>
    <div class="dside-lbl">Settings</div>
    <button class="dsb" id="sb-setup" onclick="showTab('setup')">⚙ Setup</button>
    <div class="dside-lbl">IronClad Leads</div>
    <button class="dsb" onclick="alert('Buy exclusive roofing leads from IronClad Leads!')">🎯 Buy Leads</button>
  </div>
  <div class="dmain">
    <div class="dtab on" id="tab-overview">
      <div style="margin-bottom:20px;"><div style="font-size:1.1rem;font-weight:800;">Good morning ⚡</div><div style="color:var(--txt2);font-size:0.82rem;margin-top:3px;font-family:var(--fb);">Here's your business at a glance.</div></div>
      <div class="stats-row">
        <div class="sc"><div class="sc-lbl">Total Bookings</div><div class="sc-val elec" id="st-total">0</div><div class="sc-sub">All time</div></div>
        <div class="sc"><div class="sc-lbl">This Week</div><div class="sc-val green" id="st-week">0</div><div class="sc-sub">Confirmed</div></div>
        <div class="sc"><div class="sc-lbl">Revenue</div><div class="sc-val gold" id="st-rev">$0</div><div class="sc-sub">Total collected</div></div>
        <div class="sc"><div class="sc-lbl">Reviews Sent</div><div class="sc-val elec" id="st-reviews">0</div><div class="sc-sub">Auto-requested</div></div>
      </div>
      <div class="card"><div class="card-title">Recent Bookings <button class="abtn abtn-ghost" onclick="showTab('appts')">View All</button></div><div id="recent-list"><div style="color:var(--txt2);font-size:0.875rem;text-align:center;padding:24px;font-family:var(--fb);">No bookings yet — share your booking link to get started!</div></div></div>
    </div>
    <div class="dtab" id="tab-calendar">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
        <button class="abtn abtn-ghost" onclick="prevMo()">←</button>
        <div style="font-size:1rem;font-weight:700;flex:1;text-align:center;" id="cal-lbl">April 2026</div>
        <button class="abtn abtn-ghost" onclick="nextMo()">→</button>
        <button class="abtn abtn-elec" onclick="showTab('appts');showMF()">+ Add</button>
      </div>
      <div class="cal-wrap" id="cal-grid"></div>
    </div>
    <div class="dtab" id="tab-appts">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="font-size:1rem;font-weight:700;">All Bookings</div>
        <button class="abtn abtn-elec" onclick="showMF()">+ Add Manual</button>
      </div>
      <div id="appt-list"><div style="color:var(--txt2);font-size:0.875rem;text-align:center;padding:24px;background:var(--bg2);border:1px solid var(--wire2);border-radius:16px;font-family:var(--fb);">No bookings yet.</div></div>
      <div id="mf" style="display:none;background:var(--bg2);border:1px solid var(--wire2);border-radius:16px;padding:20px;margin-top:14px;">
        <div style="font-weight:700;margin-bottom:14px;">Add Manual Booking</div>
        <div class="fg2"><div><label class="lbl-d">Name</label><input class="inp-d" id="m-name" placeholder="Customer name" /></div><div><label class="lbl-d">Phone</label><input class="inp-d" id="m-phone" placeholder="(817) 555-0000" /></div></div>
        <label class="lbl-d">Address</label><input class="inp-d" id="m-addr" placeholder="123 Main St" />
        <div class="fg2" style="margin-top:10px;"><div><label class="lbl-d">Date</label><input class="inp-d" type="date" id="m-date" /></div><div><label class="lbl-d">Time</label><select class="inp-d" id="m-time"><option>8:00 AM</option><option>9:00 AM</option><option>10:00 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>1:00 PM</option><option>2:00 PM</option><option>3:00 PM</option><option>4:00 PM</option><option>5:00 PM</option></select></div></div>
        <label class="lbl-d">Service Type</label><input class="inp-d" id="m-svc" placeholder="Roof Inspection, HVAC Tune-up..." />
        <label class="lbl-d">Payment Collected</label><input class="inp-d" id="m-pay" placeholder="$0.00" />
        <div style="display:flex;gap:8px;margin-top:14px;"><button class="abtn abtn-elec" onclick="saveMF()">Save Booking</button><button class="abtn abtn-ghost" onclick="document.getElementById('mf').style.display='none'">Cancel</button></div>
      </div>
    </div>
    <div class="dtab" id="tab-analytics">
      <div style="font-size:1rem;font-weight:700;margin-bottom:16px;">Analytics Dashboard</div>
      <div class="ana-grid">
        <div class="ana-card"><div class="ana-title">Bookings by Service</div><div class="bar-row"><div class="bar-lbl">Roof Inspect.</div><div class="bar-track"><div class="bar-fill" style="width:75%"></div></div><div class="bar-val">75%</div></div><div class="bar-row"><div class="bar-lbl">HVAC</div><div class="bar-track"><div class="bar-fill" style="width:45%"></div></div><div class="bar-val">45%</div></div><div class="bar-row"><div class="bar-lbl">Pressure Wash</div><div class="bar-track"><div class="bar-fill" style="width:30%"></div></div><div class="bar-val">30%</div></div><div class="bar-row"><div class="bar-lbl">Other</div><div class="bar-track"><div class="bar-fill" style="width:20%"></div></div><div class="bar-val">20%</div></div></div>
        <div class="ana-card"><div class="ana-title">Bookings by Day</div><div class="bar-row"><div class="bar-lbl">Monday</div><div class="bar-track"><div class="bar-fill" style="width:40%"></div></div><div class="bar-val">40%</div></div><div class="bar-row"><div class="bar-lbl">Tuesday</div><div class="bar-track"><div class="bar-fill" style="width:85%"></div></div><div class="bar-val">85%</div></div><div class="bar-row"><div class="bar-lbl">Wednesday</div><div class="bar-track"><div class="bar-fill" style="width:70%"></div></div><div class="bar-val">70%</div></div><div class="bar-row"><div class="bar-lbl">Thursday</div><div class="bar-track"><div class="bar-fill" style="width:90%"></div></div><div class="bar-val">90%</div></div></div>
      </div>
      <div class="card"><div class="card-title">Key Metrics</div><div class="stats-row" style="margin-bottom:0;"><div class="sc"><div class="sc-lbl">No-show Rate</div><div class="sc-val elec">12%</div><div class="sc-sub">Industry avg 35%</div></div><div class="sc"><div class="sc-lbl">Avg Job Value</div><div class="sc-val gold">$5,200</div></div><div class="sc"><div class="sc-lbl">Review Rate</div><div class="sc-val green">68%</div></div><div class="sc"><div class="sc-lbl">Repeat Customers</div><div class="sc-val elec">24%</div></div></div></div>
    </div>
    <div class="dtab" id="tab-payments">
      <div style="font-size:1rem;font-weight:700;margin-bottom:16px;">Payment Processing</div>
      <div class="card"><div class="card-title">Stripe Integration</div><div style="background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.15);border-radius:12px;padding:16px;margin-bottom:16px;"><div style="font-size:0.82rem;color:var(--elec);font-weight:600;margin-bottom:6px;">⚡ Accept payments at booking</div><div style="font-size:0.8rem;color:var(--txt2);font-family:var(--fb);line-height:1.6;">Charge a deposit or full amount when customers book. Powered by Stripe.</div></div><label class="lbl-d">Stripe Publishable Key</label><input class="inp-d" placeholder="pk_live_..." /><label class="lbl-d">Deposit Amount ($)</label><input class="inp-d" placeholder="50.00" style="margin-top:10px;" /><label class="lbl-d">Payment Type</label><select class="inp-d" style="margin-top:5px;"><option>Deposit only ($50)</option><option>Full payment required</option><option>No payment required</option></select><button class="abtn abtn-elec" style="margin-top:14px;width:100%;padding:11px;">Connect Stripe Account</button></div>
    </div>
    <div class="dtab" id="tab-reviews">
      <div style="font-size:1rem;font-weight:700;margin-bottom:16px;">Review Automation</div>
      <div class="card"><div class="card-title">Auto Review Requests</div><label class="lbl-d">Your Google Review Link</label><input class="inp-d" placeholder="https://g.page/r/your-business/review" /><label class="lbl-d">Review Request Message</label><textarea class="inp-d" style="height:80px;resize:vertical;">Hi [Name]! Thanks for choosing [Business]. We'd love a quick Google review — it takes 30 seconds! [Link]</textarea><label class="lbl-d">Send Delay</label><select class="inp-d" style="margin-top:5px;"><option>2 hours after appointment</option><option>Same day evening</option><option>Next day morning</option></select><button class="abtn abtn-elec" style="margin-top:14px;width:100%;padding:11px;">Activate Review Automation</button></div>
      <div class="card"><div class="card-title">Recent Reviews</div><div class="review-item"><div><div class="review-stars">★★★★★</div><div class="review-text">Showed up on time, explained everything clearly. My insurance covered the whole roof!</div><div class="review-name">Sarah M. — Fort Worth TX</div></div></div><div class="review-item"><div><div class="review-stars">★★★★★</div><div class="review-text">Booked online in 2 minutes. Professional team, done in one day. Highly recommend.</div><div class="review-name">James T. — Arlington TX</div></div></div><div class="review-item"><div><div class="review-stars">★★★★★</div><div class="review-text">Best roofing company in DFW. Easy booking process and great communication throughout.</div><div class="review-name">Maria G. — Mansfield TX</div></div></div></div>
    </div>
    <div class="dtab" id="tab-setup">
      <div class="setup-grid">
        <div class="card"><div class="card-title">Business Info</div><label class="lbl-d">Business Name</label><input class="inp-d" id="setup-biz" /><label class="lbl-d">Service Description</label><textarea class="inp-d" id="setup-desc" style="height:75px;resize:vertical;"></textarea><label class="lbl-d">Brand Color</label><div class="sw-row"><div class="sw on" style="background:#00d4ff;" onclick="setSw(this,'#00d4ff')"></div><div class="sw" style="background:#7c3aed;" onclick="setSw(this,'#7c3aed')"></div><div class="sw" style="background:#10b981;" onclick="setSw(this,'#10b981')"></div><div class="sw" style="background:#f59e0b;" onclick="setSw(this,'#f59e0b')"></div><div class="sw" style="background:#f472b6;" onclick="setSw(this,'#f472b6')"></div><div class="sw" style="background:#ef4444;" onclick="setSw(this,'#ef4444')"></div></div><button class="abtn abtn-elec" style="margin-top:16px;width:100%;padding:11px;" onclick="saveSetup()">Save Changes</button></div>
        <div class="card"><div class="card-title">Available Time Slots</div><div class="ts-grid" id="ts-grid"></div><div style="margin-top:16px;"><label class="lbl-d">Your Booking Link</label><div class="link-box" id="dash-link">swiftbook.io/my-business</div><button class="copy-btn" onclick="copyLink()">⚡ Copy Link</button></div></div>
      </div>
    </div>
  </div>
</div>
 
<div id="page-book" class="flex-page">
  <div class="bwrap">
    <div class="bback" onclick="goTo('landing')">← Back to SwiftBook</div>
    <div class="bcard">
      <div class="bcard-top"></div>
      <div class="bhead">
        <div class="blogo" id="bp-logo">SB</div>
        <div class="bname" id="bp-biz">My Business</div>
        <div class="bmeta"><span>30 min</span><span>·</span><span style="color:var(--elec2);font-weight:600;">Free</span><span>·</span><span style="color:var(--gold);">⭐ 5.0</span></div>
        <div class="bdesc" id="bp-desc">Book your appointment online. We confirm right away.</div>
      </div>
      <div class="bbody">
        <div class="bstep on" id="bs1"><div class="bstep-title">Select a date</div><div class="date-grid" id="bp-dates"></div><button class="bbtn" id="bp-dn" disabled onclick="bsStep(2)">Next →</button></div>
        <div class="bstep" id="bs2"><div class="bstep-title">Select a time</div><div class="time-grid" id="bp-times"></div><div style="display:flex;gap:8px;margin-top:10px;"><button class="bbtn bbtn-ghost" onclick="bsStep(1)">← Back</button><button class="bbtn" id="bp-tn" disabled onclick="bsStep(3)">Next →</button></div></div>
        <div class="bstep" id="bs3">
          <div class="bstep-title">Your information</div>
          <div class="bfg"><label>Full Name</label><input id="bp-n" placeholder="John Smith" /></div>
          <div class="bfg"><label>Phone</label><input id="bp-p" type="tel" placeholder="(817) 555-0000" /></div>
          <div class="bfg"><label>Address</label><input id="bp-a" placeholder="123 Main St, Fort Worth TX" /></div>
          <div class="pay-box"><div class="pay-title">💳 Secure Deposit — $50</div><div class="bfg" style="margin-bottom:8px;"><label>Card Number</label><input id="bp-card" placeholder="4242 4242 4242 4242" /></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;"><div class="bfg" style="margin-bottom:0;"><label>Expiry</label><input placeholder="MM/YY" /></div><div class="bfg" style="margin-bottom:0;"><label>CVV</label><input placeholder="123" /></div></div></div>
          <div style="display:flex;gap:8px;margin-top:8px;"><button class="bbtn bbtn-ghost" onclick="bsStep(2)">← Back</button><button class="bbtn" onclick="confirmBook()">⚡ Confirm & Pay $50</button></div>
        </div>
        <div class="bstep" id="bs4"><div class="confirm-wrap"><div class="confirm-circle">⚡</div><div class="confirm-title">Booking Confirmed!</div><div class="confirm-sub" id="bp-conf">Your appointment is confirmed and deposit collected. Confirmation text sent.</div><button class="bbtn" style="margin-top:16px;" onclick="bsStep(1);resetBook()">Book Another</button></div></div>
      </div>
    </div>
  </div>
</div>
 
<script>
var appts=[],selD='',selT='',calY=2026,calM=3;
var activeSlots=new Set(['9:00 AM','10:00 AM','11:00 AM','2:00 PM','3:00 PM','4:00 PM']);
var brandColor='#00d4ff',bizName='My Business',bizSlug='my-business',industry='Roofing';
function goTo(p){['landing','signup','dash','book'].forEach(function(id){document.getElementById('page-'+id).classList.remove('on');});document.getElementById('page-'+p).classList.add('on');if(p==='dash'){renderCal();renderAppts();renderTS();}if(p==='book'){renderBPDates();}}
function showTab(t){document.querySelectorAll('.dtab').forEach(function(e){e.classList.remove('on');});document.querySelectorAll('.dsb').forEach(function(e){e.classList.remove('on');});document.getElementById('tab-'+t).classList.add('on');var sb=document.getElementById('sb-'+t);if(sb)sb.classList.add('on');if(t==='calendar')renderCal();if(t==='setup')renderTS();}
function createAcc(){var first=document.getElementById('s-first').value.trim();var biz=document.getElementById('s-biz').value.trim();var ind=document.getElementById('s-ind').value;if(!first||!biz){alert('Please fill in your name and business name.');return;}bizName=biz;bizSlug=biz.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');industry=ind;document.getElementById('d-co').textContent=bizName;document.getElementById('d-ind').textContent=industry;document.getElementById('dash-link').textContent='swiftbook.io/'+bizSlug;document.getElementById('setup-biz').value=bizName;document.getElementById('setup-desc').value='Book a free '+ind.toLowerCase()+' appointment. We confirm right away.';document.getElementById('bp-biz').textContent=bizName;document.getElementById('bp-desc').textContent='Book your '+ind.toLowerCase()+' appointment online.';document.getElementById('bp-logo').textContent=bizName.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase();goTo('dash');}
function updateStats(){var now=new Date();var week=appts.filter(function(a){var d=new Date(a.date);return(d-now)/86400000>=-1&&(d-now)/86400000<=7;}).length;var rev=appts.reduce(function(s,a){return s+(parseFloat((a.pay||'').replace(/[^0-9.]/g,''))||0);},0);document.getElementById('st-total').textContent=appts.length;document.getElementById('st-week').textContent=week;document.getElementById('st-rev').textContent='$'+rev.toLocaleString();document.getElementById('st-reviews').textContent=appts.length;document.getElementById('a-cnt').textContent=appts.length;}
function renderAppts(){updateStats();if(!appts.length){var e='<div style="color:var(--txt2);font-size:0.875rem;text-align:center;padding:24px;font-family:var(--fb);">No bookings yet.</div>';document.getElementById('appt-list').innerHTML=e;document.getElementById('recent-list').innerHTML=e;return;}var html=appts.slice().reverse().map(function(a){return'<div class="appt-row"><div><div class="ar-name">'+a.name+'</div><div class="ar-addr">'+a.addr+'</div><div class="ar-phone">'+a.phone+'</div>'+(a.svc?'<span class="ar-svc">'+a.svc+'</span>':'')+'</div><div class="ar-r"><div class="ar-date">'+a.date+'</div><div class="ar-time">'+a.time+'</div>'+(a.pay?'<div class="ar-paid">💳 '+a.pay+'</div>':'<span class="confirmed">confirmed</span>')+'</div></div>';}).join('');document.getElementById('appt-list').innerHTML=html;document.getElementById('recent-list').innerHTML=html;}
function renderCal(){var months=['January','February','March','April','May','June','July','August','September','October','November','December'];document.getElementById('cal-lbl').textContent=months[calM]+' '+calY;var days=['Su','Mo','Tu','We','Th','Fr','Sa'];var html=days.map(function(d){return'<div class="cal-head">'+d+'</div>';}).join('');var first=new Date(calY,calM,1).getDay(),dim=new Date(calY,calM+1,0).getDate(),today=new Date();for(var i=0;i<first;i++)html+='<div></div>';for(var d=1;d<=dim;d++){var ds=calY+'-'+(calM+1).toString().padStart(2,'0')+'-'+d.toString().padStart(2,'0');var isT=d===today.getDate()&&calM===today.getMonth()&&calY===today.getFullYear();var da=appts.filter(function(a){return a.date===ds;});html+='<div class="cal-cell'+(isT?' today':'')+(da.length?' has':'')+'"><div class="cal-num">'+d+'</div>'+da.map(function(a){return'<div class="cal-dot">'+a.time+'</div>';}).join('')+'</div>';}document.getElementById('cal-grid').innerHTML=html;}
function prevMo(){calM--;if(calM<0){calM=11;calY--;}renderCal();}function nextMo(){calM++;if(calM>11){calM=0;calY++;}renderCal();}
function renderTS(){var slots=['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];document.getElementById('ts-grid').innerHTML=slots.map(function(t){var on=activeSlots.has(t);return'<div class="ts'+(on?' on':'')+'" onclick="toggleTS(this,\''+t+'\')"><span>'+t+'</span><span>'+(on?'⚡':'')+'</span></div>';}).join('');}
function toggleTS(el,t){if(activeSlots.has(t))activeSlots.delete(t);else activeSlots.add(t);el.classList.toggle('on');el.querySelector('span:last-child').textContent=activeSlots.has(t)?'⚡':'';}
function saveSetup(){bizName=document.getElementById('setup-biz').value||bizName;bizSlug=bizName.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');document.getElementById('d-co').textContent=bizName;document.getElementById('bp-biz').textContent=bizName;document.getElementById('bp-desc').textContent=document.getElementById('setup-desc').value;document.getElementById('bp-logo').textContent=bizName.split(' ').map(function(w){return w[0];}).join('').slice(0,2).toUpperCase();document.getElementById('bp-logo').style.background=brandColor;document.getElementById('dash-link').textContent='swiftbook.io/'+bizSlug;alert('Saved!');}
function setSw(el,c){document.querySelectorAll('.sw').forEach(function(s){s.classList.remove('on');});el.classList.add('on');brandColor=c;}
function copyLink(){var link='swiftbook.io/'+bizSlug;if(navigator.clipboard){navigator.clipboard.writeText(link).then(function(){alert('Copied: '+link);});}else alert('Your link: '+link);}
function showMF(){var mf=document.getElementById('mf');mf.style.display=mf.style.display==='none'?'block':'none';var d=new Date();d.setDate(d.getDate()+1);document.getElementById('m-date').value=d.toISOString().split('T')[0];}
function saveMF(){var name=document.getElementById('m-name').value.trim();var phone=document.getElementById('m-phone').value.trim();if(!name||!phone){alert('Name and phone required.');return;}appts.push({name:name,phone:phone,addr:document.getElementById('m-addr').value,date:document.getElementById('m-date').value,time:document.getElementById('m-time').value,svc:document.getElementById('m-svc').value,pay:document.getElementById('m-pay').value,status:'confirmed'});document.getElementById('mf').style.display='none';renderAppts();renderCal();}
function renderBPDates(){var days=['Su','Mo','Tu','We','Th','Fr','Sa'],today=new Date(),html='';for(var i=0;i<14;i++){var d=new Date(today);d.setDate(today.getDate()+i);var full=d.toISOString().split('T')[0];html+='<div class="dc" onclick="selDate(this,\''+full+'\')"><div class="dn">'+days[d.getDay()]+'</div>'+d.getDate()+'</div>';}document.getElementById('bp-dates').innerHTML=html;var slots=[...activeSlots].sort();document.getElementById('bp-times').innerHTML=slots.map(function(t){return'<div class="tc" onclick="selTime(this,\''+t+'\')">'+t+'</div>';}).join('');}
function selDate(el,date){document.querySelectorAll('.dc').forEach(function(c){c.classList.remove('on');});el.classList.add('on');selD=date;document.getElementById('bp-dn').disabled=false;}
function selTime(el,time){document.querySelectorAll('.tc').forEach(function(c){c.classList.remove('on');});el.classList.add('on');selT=time;document.getElementById('bp-tn').disabled=false;}
function bsStep(n){document.querySelectorAll('.bstep').forEach(function(s){s.classList.remove('on');});document.getElementById('bs'+n).classList.add('on');}
function confirmBook(){var name=document.getElementById('bp-n').value.trim();var phone=document.getElementById('bp-p').value.trim();var addr=document.getElementById('bp-a').value.trim();if(!name||!phone||!addr){alert('Please fill in name, phone, and address.');return;}appts.push({name:name,phone:phone,addr:addr,date:selD,time:selT,pay:'$50.00',status:'confirmed'});document.getElementById('bp-conf').textContent='Booked with '+bizName+' for '+selD+' at '+selT+'. Deposit collected. Confirmation text sent to '+phone+'.';bsStep(4);renderAppts();renderCal();updateStats();}
function resetBook(){selD='';selT='';['bp-n','bp-p','bp-a','bp-card'].forEach(function(id){document.getElementById(id).value='';});document.getElementById('bp-dn').disabled=true;document.getElementById('bp-tn').disabled=true;renderBPDates();}
renderBPDates();renderTS();
</script>
</body>
</html>`);
});
 
app.listen(PORT, function() {
  console.log('SwiftBook running on port ' + PORT);
});
