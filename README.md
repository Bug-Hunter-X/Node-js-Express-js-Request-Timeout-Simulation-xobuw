# Node.js Express.js Request Timeout Simulation

This repository demonstrates a potential issue with request timeouts in Node.js applications using Express.js.

The `bug.js` file contains a simple Express.js server that introduces a 5-second delay in its response.  This delay could cause issues if clients have short timeout periods.

The `bugSolution.js` file shows how to handle timeouts and improve the user experience by providing a timeout mechanism.