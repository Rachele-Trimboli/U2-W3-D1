class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  showComparateAge(person) {
    if (this.age > person.age) {
      console.log(this.firstName + " è più vecchio di " + person.firstName);
    } else {
      console.log(person.firstName + " è più vecchio di " + this.firstName);
    }
  }
}

const person1 = new User("Mario", "Rossi", 70, "Roma");
const person2 = new User("Anna", "Bianchi", 50, "Firenze");

console.log(person1);
console.log(person2);
person1.showComparateAge(person2);
