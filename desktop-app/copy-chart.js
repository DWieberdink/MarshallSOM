const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'node_modules', 'chart.js', 'dist', 'chart.umd.min.js');
const dest = path.join(__dirname, 'dashboard', 'chart.umd.min.js');
const destDir = path.dirname(dest);

if (!fs.existsSync(src)) {
  console.warn('Chart.js not found at', src, '- run npm install first. Dashboard will need chart.umd.min.js in dashboard/ for offline use.');
  process.exit(0);
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(src, dest);
console.log('Copied chart.umd.min.js to dashboard/');
