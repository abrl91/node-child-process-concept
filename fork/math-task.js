import { MATH_TASK_MESSAGE } from "./constants.js";

process.on("message", (message) => {
  if (message === MATH_TASK_MESSAGE) {
    console.log(`[${new Date().toISOString()}] ${MATH_TASK_MESSAGE}`);
    // simulating a long-running task
    setTimeout(() => {
      process.send("Math task Completed");
      process.exit(0);
    }, 5000);
  }
});
