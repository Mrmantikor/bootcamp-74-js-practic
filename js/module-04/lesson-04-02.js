// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

// const rectlange = {
//     width: 27,
//     height: 23,
//     calculateArea() {
//         // console.log("calculate");
//         return this.width * this.height;
//     }
// }

// console.log(rectlange.calculateArea());

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
    ownerName: 'Mango',
    accountNumber: 21,
    balance: 23098,
    deposit(sum) {
        this.balance += sum;
    },
    withdraw(sum) {
        this.balance -= sum;
    }
}

bankAccount.deposit(234)
console.log(bankAccount);

bankAccount.withdraw(234);
console.log(bankAccount);