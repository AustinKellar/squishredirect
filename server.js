var express = require('express');

var port = 4000;
var app = express();

app.get('*', (req, res) => {
        return res.redirect('https://www.sitonitgames.com/Squish');
});

app.listen(process.env.PORT || port, ()=> {
        console.log('server listening on port ' + port);
});

