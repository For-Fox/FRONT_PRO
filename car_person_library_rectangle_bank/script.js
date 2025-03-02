// 1. Создайте класс Car с свойствами mark(марка), model(модель) и year(год выпуска). 
// Добавьте метод age(), который вычисляет возраст автомобиля(на основе текущего года).

class Car {
   constructor(mark, model, year) {
      this.mark = mark;
      this.model = model;
      this.year = year;
   }
   age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
   }
}

const myCar = new Car("VW", "Beetle", 2023);
console.log(`myBird: ${myCar.age()}`);


// Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail),
//    который меняет email только если новый email содержит символ "@" и ".",
//       иначе выбрасывает исключение.

class Person {
   constructor(username, age = 18, email) {
      this.name = username;
      this.age = age;
      this.email = email;
   }
setName(username) {this.name = username}
incrementAge() {this.age++}


change_email(newEmail) {
   if (newEmail.includes("@") && newEmail.includes(".")) {
      this.email = newEmail;
   }
   else {
      throw new Error("invalid format")
   }
}
}


let user1 = new Person("John", 25, "lucky_john@gmail.com")
user1.setName("Jack")
console.log(user1)
let user2 = new Person("Johanna", 29)
console.log(user2);

let person = new Person("Alice", 25, "alice@gmail.com");
person.change_email("dream_alice@gmail.com");
console.log(`New email: ${person.email}`);


// Создайте класс Library, который хранит статический массив книг. 
// Каждая книга – это объект с свойствами title и author.
// Добавьте статический метод addBook(book), который добавляет книгу в библиотеку,
//    и статический метод listBooks(), который выводит список книг в консоль.

class Library {
   static books = [];
   static addBook(book) {
      if (book.title && book.author) {
         this.books.push(book);
      }
      else {
         throw new Error("invalid format")
      }
   }
   static listBooks() {
      this.books.forEach(book => console.log(`${book.title} ${book.author}`))
   }
}

Library.addBook({ title: "Alice in Wonderland", author: "Lewis Carroll" });
Library.addBook({ title: "Three Men in a Boat", author: "Jerome Klapka Jerome" });
Library.listBooks();

// Создайте класс Rectangle с приватными свойствами #width и #height. 
// Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли 
// устанавливаться только положительными числами.Добавьте метод area(),
//    который возвращает площадь прямоугольника.

class Rectangle {
   #width;
   #height;

   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   get width() {
      return this.#width;
   }

   set width(value) {
      if (value > 0) {
         this.#width = value;
      } else {
         throw new Error("invalid format")
      }
   }

   get height() {
      return this.#height;
   }

   set height(value) {
      if (value > 0) {
         this.#height = value;
      } else {
         throw new Error("invalid format")
      }
   }

   area() {
      return this.#width * this.#height;
   }
}

const rect = new Rectangle(10, 5);
console.log(`Rectangle area is: ${rect.area()}`);

// Создайте класс BankAccount с приватным свойством #balance. 
// Реализуйте методы для депозита и снятия средств.
// Добавьте геттер для получения текущего баланса.
// При попытке снять сумму, большую чем баланс, выбрасывайте исключение.
// Затем создайте статический метод, который ведёт учёт всех созданных счетов
//    (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.

class BankAccount {
   static accounts = [];

   #balance;

   constructor(initialBalance = 0) {
       if (initialBalance < 0) {
           throw new Error("balance is negative");
       }
       this.#balance = initialBalance;
       BankAccount.accounts.push(this);
   }

   deposit(amount) {
       if (amount > 0) {
           this.#balance += amount;
       } else {
           throw new Error("Deposit amount must be positive");
       }
   }

   remove(amount) {
       if (amount > this.#balance) {
           throw new Error("Not enough money");
       }
       this.#balance -= amount;
   }

   get balance() {
       return this.#balance;
   }

   static totalBalance() {
       return this.accounts.reduce((sum, account) => sum + account.#balance, 0);
   }
}

const acc1 = new BankAccount(3240);
const acc2 = new BankAccount(430);
acc1.deposit(654);
acc2.remove(342);
console.log(`overall balance: ${BankAccount.totalBalance()}`);