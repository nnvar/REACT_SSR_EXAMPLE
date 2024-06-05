// https://youtu.be/00odfwhjoXU 9:57
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

const app = express();

app.length('/*', (req, res) => {
    const reactApp = renderToString(
        <h1>Hello fron the server side</h1>
    );

    return res.send(`
    <html>
        <body>
            <dic id="root">${reactApp}</div>        
        </body>
    </html>
    `)
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});