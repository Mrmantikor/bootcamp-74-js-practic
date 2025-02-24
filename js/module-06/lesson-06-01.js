// Створити об'єкт, який представляє користувача.
//  У об'єкті повинні бути наступні поля: ім'я, прізвище,
//  вік, email та метод, який виводить
// повну інформацію про користувача.
// Для обьекта "user", написати метод для зміни ім'я або прізвища
// (змінити можна лише якесь з цих полів, змінювати або додавати нові
//потрібно заборонити) з перевіркою на валідність даних
// (Перша літера має бути у верхньому реєстрі,
//  довжина слова не менше 3 літер)
const user = {
    firstName: 'Poly',
    lastName: 'Gaby',
    age: 25,
    email: 'gaby@gmail.com',
    showUserInfo() {
        console.log(`This is ${this.firstName} ${this.lastName}. age:${this.age} email${this.email}`);

    },
    modify(key, value) {
        if (key !== 'firstName' && key !== 'lastName') {
            console.log('This key cannot be changed❌');
            return
        }
           if (!value.startsWith(value[0].toUpperCase()) || value.length < 3) {
            console.log(`Value its not valid`);
            return
        }
        // if (value[0].toUpperCase() !== value[0] || value.length < 3) {
        //     console.log(`Value its not valid`);
        //     return
        // }
      this[key]= value  
    }

}
user.modify('firstName', 'Mango');
user.showUserInfo();
