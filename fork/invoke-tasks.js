import http from "node:http";
import {
  PORT,
  MATH_TASK_URL,
  ENGLISH_TASK_URL,
  SCIENCE_TASK_URL,
} from "./constants.js";

console.log(
  `[${new Date().toISOString()}] Making request to http://localhost:4200/fibonacci`
);
http.get("http://localhost:4200/fibonacci", (res) => {
  res.on("data", (data) => {
    console.log(`Fibonacci response: ${data}`);
  });
});

http.get("http://localhost:4200/simulate-async", (res) => {
  res.on("data", (data) => {
    console.log(`Simulate async response: ${data}`);
  });
});

console.log(
  `[${new Date().toISOString()}] Making request to http://localhost:${PORT}${MATH_TASK_URL}`
);
http.get(`http://localhost:${PORT}${MATH_TASK_URL}`, (res) => {
  res.on("data", (data) => {
    console.log(`Math task response: ${data}`);
  });
});

console.log(
  `[${new Date().toISOString()}] Making request to http://localhost:${PORT}${ENGLISH_TASK_URL}`
);
http.get(`http://localhost:${PORT}${ENGLISH_TASK_URL}`, (res) => {
  res.on("data", (data) => {
    console.log(`English task response: ${data}`);
  });
});

http.get("http://localhost:4200/simulate-async", (res) => {
  res.on("data", (data) => {
    console.log(`Simulate async response: ${data}`);
  });
});

console.log(
  `[${new Date().toISOString()}] Making request to http://localhost:${PORT}${SCIENCE_TASK_URL}`
);
http.get(`http://localhost:${PORT}${SCIENCE_TASK_URL}`, (res) => {
  res.on("data", (data) => {
    console.log(`Science task response: ${data}`);
  });
});
