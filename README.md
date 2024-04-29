# PS4 Debug Payload Sender

This Node.js script is designed to send a binary payload to a PlayStation 4 debug server via TCP. The script connects to a specified PS4 IP address and port, reads a binary file (e.g., a debug payload), and sends this file to the PS4.

## Prerequisites

To use this script, you need:
- Node.js installed on your computer ([Download Node.js](https://nodejs.org/)).
- Network access to the PS4 debug server (ensure the PS4 is reachable over the network).
- A binary file named `ps4debug.bin` that contains the payload to be sent.

## Installation

1. Clone this repository or download the script to your local machine.
2. Place the binary payload file (`ps4debug.bin`) in the same directory as the script.

## Usage

To run the script, navigate to the directory containing the script and execute it using Node.js:

```bash
node sendPayload.js
