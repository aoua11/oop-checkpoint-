class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    getTotalItems() {
        let totalItems = 0;
        for (let item of this.items) {
            totalItems += item.quantity;
        }
        return totalItems;
    }

    addItem(product, quantity) {
   
        for (let item of this.items) {
            if (item.product.id === product.id) {
                item.quantity += quantity;
                return; 
            }
        }
       
        const newItem = new ShoppingCartItem(product, quantity);
        this.items.push(newItem);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    displayItems() {
        console.log("Shopping Cart Items:");
        for (let item of this.items) {
            console.log(`${item.product.name} - Quantity: ${item.quantity}`);
        }
    }
}

const product1 = new Product(1, 'Laptop', 999);
const product2 = new Product(2, 'Smartphone', 599);


const cart = new ShoppingCart();


cart.addItem(product1, 2); 
cart.addItem(product2, 1); 


cart.displayItems();

console.log(`Total Items in Cart: ${cart.getTotalItems()}`);



cart.removeItem(1); 


cart.displayItems();

console.log(`Total Items in Cart: ${cart.getTotalItems()}`);
