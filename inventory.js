// Product class
class Product {
    constructor(name, productId, price, stock = 0) {
      this.name = name;
      this.productId = productId;
      this.price = price;
      this.stock = stock;
    }
  
    addStock(quantity) {
      this.stock += quantity;
      console.log(`${quantity} units added to ${this.name}. Current stock: ${this.stock}`);
    }
  
    sell(quantity) {
      if (quantity <= this.stock) {
        this.stock -= quantity;
        console.log(`${quantity} units sold from ${this.name}. Remaining stock: ${this.stock}`);
      } else {
        console.log(`Not enough stock to sell ${quantity} units of ${this.name}.`);
      }
    }
  }
  
  // Inventory class
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
      console.log(`${product.name} added to inventory.`);
    }
  
    sellProduct(productId, quantity) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        product.sell(quantity);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  
    checkStock(productId) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        console.log(`Stock for ${product.name}: ${product.stock}`);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  }
  
  // Test the system
  const p1 = new Product("Pen", 101, 5);
  const p2 = new Product("Notebook", 102, 20, 50);
  
  const inventory = new Inventory();
  inventory.addProduct(p1);
  inventory.addProduct(p2);
  
  p1.addStock(30);
  p1.sell(10);
  inventory.sellProduct(102, 20);
  inventory.checkStock(101);
  inventory.checkStock(102);
  