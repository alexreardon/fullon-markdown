const config = require('./config.json');

module.exports = () => `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Full On Youth Camp</title>
    <link href="${config.font.url}" rel="stylesheet">
</head>
<body>
<div id="app"></div>
</body>
</html>`;
