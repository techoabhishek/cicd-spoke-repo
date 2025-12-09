
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const serviceName = process.env.SERVICE_NAME || 'sample-node-app';


app.get('/', (req, res) => {
  console.log(`Request received for service: ${serviceName}`);
  res.status(200).send(`
    <h1>Hello from the Vonage Enterprise CI/CD !</h1>
    <p>Service: <strong>${serviceName}</strong> (🚀 Deployed via GitHub Actions Hub)</p>
  `);
});

app.listen(port, () => {
  console.log(`Sample-Node-API listening on port ${port}`);
});