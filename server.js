const express = require('express');
const app = express();
const DIST_FOLDER = process.cwd() + '/docs';
const PORT = process.env.PORT || 8080;

const rendertron = require('rendertron-middleware');
const BOTS = rendertron.botUserAgents.concat('googlebot');
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i');

app.use(rendertron.makeMiddleware({
    proxyUrl: 'http://localhost:8080',
    userAgentPattern: BOT_UA_PATTERN
}));

// Start Express Server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT} from ${DIST_FOLDER}`);
});

// Serve static assets (images, css, etc.)
app.get('*.*', express.static(DIST_FOLDER));

// Point all other URLs to index.html for our single page app
app.get('*', (req, res) => {
    res.sendFile(DIST_FOLDER + '/index.html');
});