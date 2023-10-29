import http from "node:http";
import { fork } from "node:child_process";
import {
  PORT,
  MATH_TASK_URL,
  MATH_TASK_MESSAGE,
  ENGLISH_TASK_URL,
  ENGLISH_TASK_MESSAGE,
  SCIENCE_TASK_URL,
  SCIENCE_TASK_MESSAGE,
} from "./constants.js";
import { fibonacci } from "./fibonacci.js";

http
  .createServer((req, res) => {
    if (req.url === MATH_TASK_URL) {
      const mathTaskProcess = fork("./math-task.js");
      console.log(MATH_TASK_MESSAGE);
      mathTaskProcess.send(MATH_TASK_MESSAGE);
      mathTaskProcess.on("message", (message) => {
        console.log(`[${new Date().toISOString()}] ${message}`);
        res.end(`math task result: ${message}`);
      });
    } else if (req.url === ENGLISH_TASK_URL) {
      const englishTaskProcess = fork("./english-task.js");
      englishTaskProcess.send(ENGLISH_TASK_MESSAGE);
      englishTaskProcess.on("message", (message) => {
        console.log(`[${new Date().toISOString()}] ${message}`);
        res.end(`english task result: ${message}`);
      });
    } else if (req.url === SCIENCE_TASK_URL) {
      const scienceTaskProcess = fork("./science-task.js");
      scienceTaskProcess.send(SCIENCE_TASK_MESSAGE);
      scienceTaskProcess.on("message", (message) => {
        console.log(`[${new Date().toISOString()}] ${message}`);
        res.end(`science task result: ${message}`);
      });
    } else if (req.url === "/fibonacci") {
      const n = 42;
      const result = fibonacci(n);
      res.end(`fibonacci of ${n} is ${result}`);
    } else {
      res.end("Hello world!");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
  });
