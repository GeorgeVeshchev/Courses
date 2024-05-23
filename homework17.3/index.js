class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Сума для внесення повинна бути більше нуля");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Недостатньо коштів на рахунку або введена невірна сума");
        }
    }

    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(800);

console.log(account1.getBalance());

account1.withdraw(300);

console.log(account1.getBalance()); 
