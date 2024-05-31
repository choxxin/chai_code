//Promise is something which either completes all or fails
const promiseone = new Promise(function (resolve, reject) {
  // do any asu=ync task
  //db calls ,network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //used to call .then function
  }, 1000);
});

promiseone.then(function () {
  //used to define resolve function ().then)
  console.log("promise is consumed");
});

//WITHOUT STORING IN THE EXTERNAL VARIVBLE
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 is resolved ");
});

//PASSING VALUE IN REOLVE
const promsiethree = new Promise(function (resolve, reject) {
  //async work
  setTimeout(() => {
    resolve({ username: "Ansh", email: "dazelfink$gmail.com" }); // passing obj
  }, 1000);
});
promsiethree.then((data) => {
  console.log(data);
});

// HANDLING ERROR
const fourpromise = new Promise((resolve, reject) => {
  //asunc work
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ansh", reg: "12307", nick: "meow" });
    } else {
      reject("ERROR: Somwthing is wrong");
    }
  }, 1000);
});
fourpromise
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    //not of anyuse just to finalise
    console.log("The promise is resolved fully or rejected");
  });
//BY USING THE AYSUNC FUCNTION
const fivepromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Javascript", Password: "123" });
    } else {
      reject("Error");
    }
  }, 1000);
});

async function consumepromsiefive() {
  //keep trying if didt get any throw error
  try {
    const response = await fivepromise;
    console.log(response);
  } catch (error) {
    console.log("Error" + " " + error);
  }
}
consumepromsiefive();
