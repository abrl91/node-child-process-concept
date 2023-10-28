# node-child-process-concept
This Node.js application showcases how to offload the processing of large CSV files to a child process, allowing the main Node.js thread to continue serving HTTP requests without delay. When a request is made to process a CSV file, the main process spawns a child to handle the file conversion. Once processing is completed, the child process communicates the result back to the main process.

### Why Use Child Processes?
In Node.js, the event loop handles asynchronous tasks and incoming requests. CPU-intensive tasks can block this loop, delaying request handling. Child processes offload such tasks, keeping the main thread free. This ensures the event loop runs smoothly, responding to requests promptly, optimizing Node's non-blocking architecture.
