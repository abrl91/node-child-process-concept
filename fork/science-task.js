import { SCIENCE_TASK_MESSAGE } from "./constants.js";

process.on("message", (message) => {
  if (message === SCIENCE_TASK_MESSAGE) {
    console.log(`[${new Date().toISOString()}] ${SCIENCE_TASK_MESSAGE}`);
    // simulating a long-running task
    setTimeout(() => {
      process.send("Science task Completed");
      process.exit(0);
    }, 4000);
  }
});
