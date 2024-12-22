// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const comments = require('./comments');

// Create server
http.createServer((req, res) => {
  // Get file path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  // Get file extension
  const extname = String(path.extname(filePath)).toLowerCase();
