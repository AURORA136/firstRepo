let BankAcc = function (name, balance) {
    this.name = name;
    this.balance = balance;

    this.deposit = function (depositAmount) {
        newBalance = this.balance + depositAmount;
        console.log("your current balance is" + newBalance)

        this.balance = newBalance ;
        console.log(this);
    };

    this.withdraw = function (withdrawAmount) {
        newBalance = this.balance - withdrawAmount;
        console.log("your current balance is" + newBalance);
        if (newBalance < 0) {
            console.log("insufficient");
        } else {
            console.log("sufficient");
        }

        this.balance = newBalance ;
        console.log(this);
    };

};




