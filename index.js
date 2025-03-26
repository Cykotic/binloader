const fs = require('fs').promises;
const net = require('net');

async function main(host, port, filePath) {
    try {
        const content = await fs.readFile(filePath);

        const client = net.createConnection({
            host,
            port
        }, () => {
            console.log('[binloader] - Connected');
            client.write(content, () => {
                console.log('[binloader] - Payload Sent!');
                client.end();
            });
        });
    } catch (error) {
        console.error('[binloader] - Failed to send payload:', error.message);
    }
}

main('192.168.137.207', 9090, 'ps4debug.bin');
