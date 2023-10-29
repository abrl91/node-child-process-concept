import { ENGLISH_TASK_MESSAGE } from "./constants.js";

process.on("message", (message) => {
  if (message === ENGLISH_TASK_MESSAGE) {
    console.log(`[${new Date().toISOString()}] ${ENGLISH_TASK_MESSAGE}`);
    // simulating a long-running task
    setTimeout(() => {
      process.send("English task Completed");
      process.exit(0);
    }, 2000);
  }
});
