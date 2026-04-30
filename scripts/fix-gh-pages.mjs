import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist', 'client');
const assetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory not found');
  process.exit(1);
}

// Find main JS file and CSS file
const files = fs.readdirSync(assetsDir);
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (!mainJs) {
  console.error('Main JS file not found');
  process.exit(1);
}

const basePath = '/terrace-kilifi-digital-sanctuary/';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Terrace Kilifi — Artist-led Arts Space & Residency</title>
    <meta name="description" content="An independent, artist-led arts space and residency on Kilifi Creek, Kenya.">
    <meta property="og:title" content="The Terrace Kilifi">
    <meta property="og:description" content="An artist-led independent arts space and residency on Kilifi Creek, Kenya.">
    <meta property="og:type" content="website">
    ${mainCss ? `<link rel="stylesheet" href="${basePath}assets/${mainCss}">` : ''}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    <script type="module" src="${basePath}assets/${mainJs}"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
fs.writeFileSync(path.join(distDir, '404.html'), html);

console.log('Generated index.html and 404.html in dist/client');
