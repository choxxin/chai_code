//DEF :- It calls and returns a method with the owner object being the argument.
function setusername(username) {
  //complex db calls
  this.username = username;
  console.log("changed!!");
}

function createuser(username, email, Password) {
  //WE DONT DO IT   setusername(username)  //bcz it will call the function but the the temp variable will keep initializing for that we use call

  setusername.call(this, username);
  this.email = email; //someotherfunction would be there
  this.Password = Password; //someotherfunction would be there
}

const chai = new createuser("chai", "chat@", "123");
console.log(chai);
