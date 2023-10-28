import http from "node:http";
import { fork } from "node:child_process";

const PORT = 8080;

http
  .createServer((req, res) => {
    if (req.url === "/process-csv" && req.method === "POST") {
      console.log(
        `[${new Date().toISOString()}] Received request to process CSV.`
      );

      // stimulate the main process doing some "busy" task
      setTimeout(() => {
        console.log(
          `[${new Date().toISOString()}] Main process done with its "busy" task. Starting child process.`
        );
        const child = fork("./child.js");

        child.on("message", (message) => {
          console.log(
            `[${new Date().toISOString()}] Received message from child process: ${
              message.status
            }`
          );
          res.end(message.status);
        });

        child.send({ command: "process" });
      }, 5000);
    } else {
      res.end("Hello World!");
    }
  })
  .listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
