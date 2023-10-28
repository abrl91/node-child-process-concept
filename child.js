import { csvToJson } from "./csv-to-json.js";
import fs from "node:fs";

process.on("message", (message) => {
  if (message.command === "process") {
    console.log(
      `[${new Date().toISOString()}] Child process received command to process CSV.`
    );
    fs.readFile("./data.csv", "utf8", (err, data) => {
      if (err) {
        console.log(
          `[${new Date().toISOString()}] Error reading CSV: ${err.message}`
        );
        process.send({ status: `Error: ${err.message}` });
        return;
      }

      // simulate a long running task
      setTimeout(() => {
        console.log(
          `[${new Date().toISOString()}] Child process started converting CSV to JSON.`
        );
        const json = csvToJson(data);
        fs.writeFile("data.json", json, (err) => {
          if (err) {
            console.log(
              `[${new Date().toISOString()}] Error writing JSON: ${err.message}`
            );
            process.send({ status: `Error: ${err.message}` });
            return;
          }

          console.log(
            `[${new Date().toISOString()}] Child process completed CSV to JSON conversion.`
          );
          process.send({ status: "done" });
        });
      }, 10000);
    });
  }
});
