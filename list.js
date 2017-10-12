var toDoList = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
  if (input === "new"){
    var newItem = prompt("Enter your new to do item");
    toDoList.push(newItem);
  }

  else if(input === "list"){
  console.log(toDoList);
  }

  input = prompt("What would you like to do?");
}

console.log("You have quit the app =( ");
