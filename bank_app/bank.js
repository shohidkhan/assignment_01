class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }

  //account number one

  const account1 = new BankAccount(123456789, 'John Doe', 2000);
  account1.deposit(1000);
  account1.withdraw(500);
  account1.displayAccountInfo();