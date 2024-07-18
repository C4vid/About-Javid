//task1


// let person = {
//     mainname: "Coni",
//     age: 35,
//     occupation: "Developer"
//   };
  
//   person.country = "Azerbaijan";
//   let outputDiv = document.getElementById("output");
  
//   Object.keys(person).forEach(key => {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = `${key}: ${person[key]}`;
//     outputDiv.appendChild(paragraph);
//   });

//task2

// let people = [
//     { mainname: "John", age: 25, country: "USA" },
//     { mainname: "Alice", age: 30, country: "UK" },
//     { mainname: "Bob", age: 35, country: "Canada" },
//     { mainname: "Eve", age: 20, country: "Australia" }
//   ];
  
//   let person = people[2];
  
//   let country = person.country;
  
//   document.getElementById("output").textContent = `The country is: ${country}`;


//task3


// let person = {
//     mainname: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//       country: "USA"
//     },
//     interests: ["reading", "hiking", "coding"]
//   };
  
//   person.address.zipcode = "10001";
//   person. occupation = "Software Engineer";
//   person.interests.push("photography");
//   document.getElementById("output").textContent = JSON.stringify(person, null, 2);


//task4
// let person = {
//     mainname: "",
//     set mainname(value) {
//       this.mainname = value;
//     },
//     get mainname() {
//       return this.mainname;
//     }
//   };
  
//   person.mainname = "Cavid";
  
//   let mainname = person.mainname;
  
//   document.getElementById("output").textContent = `The name is: ${mainname}`;


//task5

// function Car(brand, model, year, price) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.price = price;
//   }
  
//   let car1 = new Car("Toyota", "Camry", 2021, 25000);
//   let car2 = new Car("Honda", "Civic", 2020, 20000);
//   let car3 = new Car("Ford", "Mustang", 2019, 30000);
  
//   Car.prototype.country = "Azerbaijan";
  
//   console.log(car1); 
//   console.log(car2); 
//   console.log(car3); 

