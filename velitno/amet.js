    // app.js
    require('dotenv').config();
    const express = require('express');
    const request = require('request'); // Or any other HTTP client library

    const app = express();
    const PORT = process.env.PORT || 3000;

    const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    app.get('/login', (req, res) => {
        const scopes = 'user-read-private user-read-email';
        const redirectUri = 'http://localhost:3000/callback'; // Your redirect URI
        const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

        res.redirect(authUrl);
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    