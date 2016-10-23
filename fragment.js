const config = require('./config.json');

module.exports = () => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Full on</title>
    <link href="${config.font.url}" rel="stylesheet">
    <meta property="og:image" content="${config.facebook.image}">
</head>
<body>
<div id="app"></div>
</body>
</html>`;
