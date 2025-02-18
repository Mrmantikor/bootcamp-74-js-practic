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

// const bankAccount = {
//     ownerName: 'Mango',
//     accountNumber: 21,
//     balance: 23098,
//     deposit(sum) {
//         this.balance += sum;
//     },
//     withdraw(sum) {
//         this.balance -= sum;
//     }
// }

// bankAccount.deposit(234)
// console.log(bankAccount);

// bankAccount.withdraw(234);
// console.log(bankAccount);

/*
 * Працюємо з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */
const cart = {
    items: [
    
    ],
    getItems(){
        return this.items;
    },
    add(product){
    
        for (let item of this.items){
            if (item.name === product.name){
                item.quantity += 1;
               return ; 
            } 
        }
        this.items.push({...product, quantity: 1});

    },
    remove(productName){
        
        for (let i=0; i < this.items.length; i++){
           
            const item = this.items[i];

            if (productName === item.name){
                if (item.quantity === 1){
                    this.items.splice(i, 1);
                } else item.quantity -= 1;
            }
        }
        // const arr = [];

        // for (let item of this.items){
        //     if (item.name === productName){
        //         item.quantity -= 1;
        //         if (item.quantity > 0){
        //             arr.push(item);
        //         }

        //     }  else arr.push(item);
        // }  
        // this.items = arr;


    }
  }

  cart.add({ name: '🍇', price: 70 });
  cart.add({  name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍇', price: 70 });
  cart.add({  name: '🍎', price: 50 });
  cart.add({ name: '🍇', price: 70 });
  cart.remove('🍇');
  cart.remove('🍇');
  cart.remove('🍇');
  console.table(cart.getItems());
  