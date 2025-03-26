# Binloader
This is a simple Node.js script that sends a binary payload (e.g., a  file) to a server via a TCP connection. The primary use case is for loading payloads into a specific server or device (e.g., a PS4 debug environment). The script reads the binary file from the specified file path and transmits it to the given IP address and port.

# Features
- Connects to a specified TCP server using IP and port.
- Reads binary payload files asynchronously using Node.js's `fs` module.
- Sends the binary payload to the server and handles connection events.
- Graceful error handling for file read errors and connection issues.
