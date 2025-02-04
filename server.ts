/*
Name: Soham Patel
Date: March 28, 2024
*/

// Importing required modules
import http from "http";
import fs from 'fs';
import mime from "mime-types";

// Creating a lookup function for MIME types
let lookup = mime.lookup;

// Defining the port to listen on
const port = process.env.PORT || 3000;

// Creating an HTTP server
const server = http.createServer((req, res) => {
    let path = req.url as string;

    // Handling root and home page requests
    if (path === '/' || path === "/home") {
        path = "/index.html";
    }

    // Determining the MIME type of the requested file
    let mime_type = lookup(path.substring(1));

    // Reading the requested file from the file system
    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            // Handling file not found error
            res.writeHead(404);
            res.end("Error 404 - File Not Found" + err.message);
            return;
        }

        // Setting security header to prevent MIME type sniffing
        res.setHeader("X-Content-Type-Options", "nosniff");

        // Defaulting to 'text/plain' MIME type if not determined
        if (!mime_type) {
            mime_type = "text/plain";
        }

        // Sending the file content with appropriate MIME type
        res.writeHead(200, "OK", { 'Content-Type': mime_type });
        res.end(data);
    });
});

// Starting the server
server.listen((port), () => {
    console.log(`Server Running at http:/localhost:${port}/`);
});
