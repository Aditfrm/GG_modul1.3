const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

wait(3000).then(() => console.log("4"));
wait(2000).then(() => console.log("3"));
wait(1000).then(() => console.log("2"));
console.log("1");
