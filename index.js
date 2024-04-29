const fs = require("fs");
const net = require('net');

(async () => {
    try {
        const host = '192.168.137.151'; // PS4 IP address
        const port = 9090; // Default port
        const filePath = 'ps4debug.bin'; // File to send

        fs.readFile(filePath, (err, content) => {
            if (err) {
                console.error('Failed to read file:', err);
                return; // Exit if file reading fails
            }

            // Create a TCP connection to the PS4 debug server
            const client = net.createConnection({
                port,
                host
            }, () => {
                console.log('[ps4debug] - connected');
                client.write(content, () => {
                    console.log('[ps4debug] - Payload Sent!');
                    client.end(); // Close the connection after sending the payload
                });
            });

            client.on('error', (error) => {
                console.error('Connection error:', error);
                client.end(); // Ensure to close the connection on error
            });

            // Log when the connection is closed
            client.on('close', () => {
                console.log('Connection to PS4 debug server closed');
            });
        });
    } catch (error) {
        console.error('An unexpected error occurred:', error);
    }
})().catch(console.error);
