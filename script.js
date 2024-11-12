/* 1.  Створіть об'єкт product з властивостями name, price та discount. Додайте метод для виведення повної ціни товару з урахуванням знижки. Викличте цей метод та результат виведіть в консоль. */

const product = {
  name: "smartphone Sumsung-100",
  price: 10000,
  discount: 25,

  getFinalPrice () {
    let discountPrice =  (this.price * this.discount) / 100;
    let finalPrice = this.price - discountPrice;
    console.log(`Ціна товару зі знижкою "${this.name}": ${finalPrice} грн.`);
  }
};

product.getFinalPrice();


/* 2. Завдання: Напишіть функцію greeting, яка приймає об'єкт з властивостями name та age, і повертає рядок з привітанням і віком, наприклад "Привіт, мені 30 років".
Попросіть користувача ввести своє ім'я та вік за допомогою prompt, і викличте функцію gteeting з введеними даними(передавши їх як аргументи). Результат виклику функції виведіть з допомогою alert.*/

function greeting(user) {
  return `Привіт, мене звати ${user.name} мені ${user.age} років.`;
}

let userName = prompt("Введіть Ваше ім'я:");
let userAge = +prompt("Введіть Ваш вік:", 0);

const user = {
  name: userName,
  age: userAge,
};

const greetingMessage = greeting(user);
alert(greetingMessage);
  
  
/* 3. Опціонально. Завдання:
Реалізувати повне клонування об'єкта.


Технічні вимоги:
- Написати функцію для рекурсивного повного клонування об'єкта (без єдиної передачі за посиланням, внутрішня вкладеність властивостей об'єкта може бути досить великою).
- Функція має успішно копіювати властивості у вигляді об'єктів та масивів на будь-якому рівні вкладеності.
- У коді не можна використовувати вбудовані механізми клонування, такі як функція Object.assign() або spread.*/


function getDeepClone(myObject) {
  if (typeof myObject !== "object" || myObject === null) {
    return myObject;
  }

  const clone = Array(myObject);

  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      clone[key] = getDeepClone(myObject[key]);
    }
  }
  return clone;
}

 const productPrice = {
   name: "smartphone Sumsung-100",
   price: 10000,
   discount: 25,
 };

const clonedProductPrice = getDeepClone(productPrice);
console.log(clonedProductPrice);

