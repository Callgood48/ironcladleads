const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function(req, res) {
  res.send('IronClad Leads is live!');
});

app.post('/roof-call', function(req, res) {
  res.set('Content-Type', 'text/xml');
  var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<Response><Pause length="1"/>' +
    '<Gather numDigits="1" action="/handle-response" method="POST" timeout="8">' +
    '<Say voice="Polly.Matthew-Neural" language="en-US">' +
    'Hi, this is an important message for the homeowner. ' +
    'My name is Matthew, calling on behalf of IronClad Leads, ' +
    'a Texas roofing lead generation company serving Fort Worth, Houston, Austin, and San Antonio. ' +
    'Your neighborhood recently experienced hail and storm damage, ' +
    'and many homeowners qualify for a full roof replacement ' +
    'covered entirely by their homeowners insurance at zero out of pocket cost. ' +
    'We have limited exclusive inspection slots available this week. ' +
    'Press 1 now to speak with a roofing specialist. ' +
    'Press 9 to be removed from our list.' +
    '</Say></Gather></Response>';
  res.send(xml);
});

app.post('/handle-response', function(req, res) {
  res.set('Content-Type', 'text/xml');
  var digit = req.body.Digits;
  var xml;
  if (digit === '1') {
    xml = '<?xml version="1.0" encoding="UTF-8"?><Response>' +
      '<Say voice="Polly.Matthew-Neural">Perfect! Please hold while we connect you with a specialist.</Say>' +
      '<Dial>+18065700231</Dial></Response>';
  } else if (digit === '9') {
    xml = '<?xml version="1.0" encoding="UTF-8"?><Response>' +
      '<Say voice="Polly.Matthew-Neural">You have been removed from our list. Have a wonderful day.</Say></Response>';
  } else {
    xml = '<?xml version="1.0" encoding="UTF-8"?><Response>' +
      '<Say voice="Polly.Matthew-Neural">Thank you for your time. Have a great day.</Say></Response>';
  }
  res.send(xml);
});

app.listen(PORT, function() {
  console.log('IronClad Leads running on port ' + PORT);
});
