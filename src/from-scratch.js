class Rectangle {
constructor(length, width) {
  this.length = length;
  this.width = width;
}
getArea() {
  return this.length * this.width
}
getPerimeter() {
return  (this.length + this.width) * 2
}
isSquare() {
 return this.length === this.width
}
}

class Vehicle {
  passengers = []
  constructor(type, capacity, color){
  this.type = type;
  this.capacity = capacity;
  // if color is true/exists ? if true run this : if false run this.
  color ? this.color = color : this.color = `black`;
  }
  paint(color) {
    return this.color = color
  }
  addPassenger(passenger){
    if(this.passengers.length < this.capacity) {
      this.passengers.push(passenger);
      return this.passengers.length;
    } else {
     return -1;
    }
  }
}



class PasswordManager {
  #password
  constructor(attempt){
    this.#password = attempt
  } 
  checkPassword(attempt){
  return attempt === this.#password ? true : false
  
  }
  setPassword(oldPassword, newPassword) {
    if (oldPassword === this.#password){
      this.#password = newPassword;
      return true;
    } else {
      return false;  
    } 
  }
 
}

class TodoList {
  #toDo = []
 constructor(title){
  this.title = title
 }
  
  addItem(description){
     this.#toDo.push(description)
  }
  removeItem(description){
   const foundItem = this.#toDo.findIndex((item)=> item === description)
     
    
  }

}

class BankAccount {

}

module.exports = {
  Rectangle,
  Vehicle,
  PasswordManager,
  TodoList,
  BankAccount,
};
