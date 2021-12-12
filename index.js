let BankAcc = function (name, balance) {
    this.name = name;
    this.balance = balance;

    this.deposit = function (depositAmount) {
        newBalance = this.balance - depositAmount;
        console.log("your current balance is" + newBalance);
        if (newBalance <= 0) {
            console.log("")
        }

    }
}