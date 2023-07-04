const account = {
    balance: 0,
    transactions: [],
    
    deposit(amount) {
      this.balance += amount;
      const transaction = { type: 'deposit', amount };
      this.transactions.push({ ...transaction });
      console.log(`Successfully deposited ${amount} into your account.`);
    },
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        const transaction = { type: 'withdrawal', amount };
        this.transactions.push({ ...transaction });
        console.log(`Successfully withdrew ${amount} from your account.`);
      } else {
        console.log(`Insufficient balance. Unable to withdraw ${amount}.`);
      }
    },
  
    getBalance() {
      console.log(`Your current balance is ${this.balance}.`);
    },
  
    getTransactionHistory() {
      console.log('Transaction History:');
      this.transactions.forEach(transaction => {
        console.log(`- Type: ${transaction.type}, Amount: ${transaction.amount}`);
      });
    }
  };
  

  account.deposit(1000);
  account.getBalance();
  account.withdraw(500);
  account.getBalance();
  account.withdraw(800);
  account.getBalance();
  account.getTransactionHistory();