const bankAccount = {
    balance: 0,
    accountHistory: [ ],
    deposit: function (amount) {   
        this.balance += amount;
        this.accountHistory.push(`deposit: ${amount}`);
        console.log(`you have deposited ${amount}$ into your account`);
      },
    withdraw: function (amount) { 
        if (this.balance >= amount) {
        this.balance -= amount;
        this.accountHistory.push(`withdraw: ${amount}`)
        console.log(`you have withdrawn ${amount}$ from your account`);
        } else {
            alert("There is not enough money in your account");
            this.accountHistory.push(`withdraw of ${amount}$ denied ==> insufficient money in your account`);
        }
     },
    getBalance: function () { 
        console.log(` Your balance: ${this.balance}$`);
     },
    showAccountHistory: function () { 
         console.log(this.accountHistory);
    },
}

bankAccount.deposit(30000);

bankAccount.getBalance();

bankAccount.withdraw(3000);

bankAccount.getBalance();

bankAccount.deposit(50000);

bankAccount.getBalance();

bankAccount.withdraw(500000);

bankAccount.getBalance();

bankAccount.showAccountHistory();