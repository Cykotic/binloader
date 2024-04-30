const fs = require('fs').promises;
const net = require('net');

async function SendPS4Payload(host, port, filePath) {
    try {
        // Read the file asynchronously
        const content = await fs.readFile(filePath);

        // Return a promise that resolves when the payload is sent
        return new Promise((resolve, reject) => {
            const client = net.createConnection({
                host,
                port
            }, () => {
                console.log('[ps4debug] - Connected');
                client.write(content, () => {
                    console.log('[ps4debug] - Payload Sent!');
                    client.end();
                    resolve();
                });
            });

            client.on('error', reject);
            client.on('end', resolve);
        });
    } catch (error) {
        throw new Error(error);
    }
}

async function main() {
    const host = '192.168.137.151'; // PS4 IP address
    const port = 9090; // Default port
    const filePath = 'ps4debug.bin'; // File to send

    try {
        await SendPS4Payload(host, port, filePath);
        console.log('[ps4debug] - Payload transfer completed successfully.');
    } catch (error) {
        throw new Error(error);
    }
}

main();
