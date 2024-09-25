//Task-1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// let promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//        res("hello promise")
//     },2000)
// })
// promise1.then( (message)=>{
//     console.log(message);

// })

//Task-2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// let promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//        rej("404 not found")
//     },2000)
// })
// promise1
// // .then((data)=>{console.log(data);
// // })
// .catch((data)=>{console.log("error",data);
// })
//Task-3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order
// function fetchDataFromServer1() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Fetched data from server 1");
//       }, 1000); // Simulating 1 second delay for server 1
//     });
//   }

//   function fetchDataFromServer2() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Fetched data from server 2");
//       }, 2000); // Simulating 2 second delay for server 2
//     });
//   }

//   function fetchDataFromServer3() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Fetched data from server 3");
//       }, 1500); // Simulating 1.5 second delay for server 3
//     });
//   }

//   // Chaining promises to log the messages in a specific order
//   fetchDataFromServer1()
//     .then((message1) => {
//       console.log(message1);
//       return fetchDataFromServer2(); // Return the second promise
//     })
//     .then((message2) => {
//       console.log(message2);
//       return fetchDataFromServer3(); // Return the third promise
//     })
//     .then((message3) => {
//       console.log(message3);
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });

//Task-4 : Write an async function that waits for a promise to resolve and then logs the resolved value.
// function myPromise(){
//     return new Promise((res,rej)=>{
//        setTimeout(()=>{
//         res("async is resolve")
//        },4000)
//     })
// }
// async function wait (){
//     const result = await myPromise()
//     console.log(result);
//     }
//     wait()
//Task-5 : Write an async function that handles a rejected promise using try-catch and logs the error message.
function myPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("promise was rejected");
    }, 4000);
  });
}
async function wait() {
  try {
    const result = await myPromise();
    console.log(result);
  } catch (err) {
    console.log(err, "error");
  }
}
wait();

//Task-6 : Use the fetch API to get data from a public API and log the response data to the console using Promises.

// Task-7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.
//Task-8 : Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
//Task-9 : Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
