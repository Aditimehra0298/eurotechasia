#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Checking configuration files for deployment...\n');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.error('❌ dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('✅ dist folder exists');

// Check if netlify.toml exists
if (!fs.existsSync('netlify.toml')) {
  console.error('❌ netlify.toml not found');
  process.exit(1);
}

console.log('✅ netlify.toml exists');

// Check if _redirects exists
if (!fs.existsSync('public/_redirects')) {
  console.error('❌ public/_redirects not found');
  process.exit(1);
}

console.log('✅ public/_redirects exists');

// Check if index.html exists in dist
if (!fs.existsSync('dist/index.html')) {
  console.error('❌ dist/index.html not found');
  process.exit(1);
}

console.log('✅ dist/index.html exists');

// Check if assets folder exists in dist
if (!fs.existsSync('dist/assets')) {
  console.error('❌ dist/assets folder not found');
  process.exit(1);
}

console.log('✅ dist/assets folder exists');

// Check package.json syntax
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('✅ package.json syntax is valid');
} catch (error) {
  console.error('❌ package.json has syntax errors:', error.message);
  process.exit(1);
}

// Check tsconfig files
const tsconfigFiles = ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'];
for (const file of tsconfigFiles) {
  try {
    const config = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`✅ ${file} syntax is valid`);
  } catch (error) {
    console.error(`❌ ${file} has syntax errors:`, error.message);
    process.exit(1);
  }
}

console.log('\n🎉 All configuration files are valid!');
console.log('🚀 Ready for deployment to Netlify');
console.log('\n📋 Next steps:');
console.log('1. Go to netlify.com');
console.log('2. Drag and drop the "dist" folder');
console.log('3. Or connect your GitHub repository');
console.log('4. Set build command: npm run build');
console.log('5. Set publish directory: dist'); 