#!/usr/bin/env node

import fs from 'fs';

console.log('🔍 Validating netlify.toml syntax...\n');

try {
  const tomlContent = fs.readFileSync('netlify.toml', 'utf8');
  
  // Basic TOML structure validation
  const requiredSections = ['[build]', '[[redirects]]', '[[headers]]'];
  const missingSections = requiredSections.filter(section => !tomlContent.includes(section));
  
  if (missingSections.length > 0) {
    console.error('❌ Missing required sections:', missingSections);
    process.exit(1);
  }
  
  // Check for basic syntax issues
  const lines = tomlContent.split('\n');
  let lineNumber = 1;
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines
    if (trimmedLine === '') {
      lineNumber++;
      continue;
    }
    
    // Check for proper section headers
    if (trimmedLine.startsWith('[') && !trimmedLine.endsWith(']')) {
      console.error(`❌ Line ${lineNumber}: Malformed section header: ${trimmedLine}`);
      process.exit(1);
    }
    
    // Check for proper key-value pairs
    if (trimmedLine.includes('=') && !trimmedLine.startsWith('[') && !trimmedLine.startsWith('#')) {
      const parts = trimmedLine.split('=');
      if (parts.length !== 2) {
        console.error(`❌ Line ${lineNumber}: Malformed key-value pair: ${trimmedLine}`);
        process.exit(1);
      }
    }
    
    lineNumber++;
  }
  
  console.log('✅ netlify.toml syntax appears valid');
  console.log('✅ All required sections present');
  console.log('✅ No obvious syntax errors found');
  
} catch (error) {
  console.error('❌ Error reading or parsing netlify.toml:', error.message);
  process.exit(1);
} 