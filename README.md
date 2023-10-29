# node-child-process-concept

### Spawn
This Node.js application showcases how to offload the processing of large CSV files to a child process, allowing the main Node.js thread to continue serving HTTP requests without delay. When a request is made to process a CSV file, the main process spawns a child to handle the file conversion. Once processing is completed, the child process communicates the result back to the main process.

``` bash
npm run child:spawn
```


### Fork
In this demonstration, the application utilizes the fork() method, a special case of the spawn() method specifically for spawning Node processes. The main advantage of fork() is that it creates an IPC (Inter-Process Communication) channel, allowing messages to be passed between the parent and child. This technique is applied to offload CPU-intensive tasks like processing specific math, English, and science tasks. By forking child processes, the main thread remains available, handling incoming requests, even during simulation of a "busy main thread."

Terminal 1:
``` bash
npm run child:fork
```

Terminal 2:
``` bash
npm run child:fork:invoke
```


### Why Use Child Processes?
Node.js's event loop handles incoming requests and asynchronous tasks. CPU-intensive operations can block the event loop, causing delays. By using child processes, such operations can be offloaded, ensuring the main thread remains unblocked. This optimizes Node's non-blocking architecture, leading to more efficient request handling, especially when concurrent processing is crucial. The fork() method takes this a step further by allowing direct communication between parent and child, providing a seamless way to offload tasks and retrieve results.

