# ps4debug sender

This script is designed to send ps4debug.bin to a PS4 console. It uses the `fs` and `net` modules in Node.js to read the ps4debug.bin file and send it to the PS4.

## Dependencies

- Node.js
- fs
- net

## Usage

1. Update the `host` variable in the `main` function with the IP address of your PS4.
2. Update the `port` variable in the `main` function with the port number (default is 9090).
3. Update the `filePath` variable in the `main` function with the path to your payload file.
4. Run the script in your terminal: `node script.js`

The script will then connect to the PS4 and send the payload. You will see a message in the console when the payload is sent successfully.

## Functions

- `SendPS4Payload(host, port, filePath)`: This function reads a payload file, establishes a connection to the PS4, and sends the payload. It returns a promise that resolves when the payload is sent.
- `main()`: This function sets up the parameters for the payload transfer and calls `SendPS4Payload`.

make sure to install the necessary dependencies before running the script. You can install them using npm: `npm install fs net`.
