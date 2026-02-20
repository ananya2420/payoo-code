document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("add-money-btn")
    .addEventListener("click", function() {

        const bankAccount = getValueFromInput("add-money-bank");

        if (bankAccount == "select a Bank") {
            alert("Select a Bank");
            return;
        }
       //2.get Bank account number
        const accono = getValueFromInput("add-money-number");

        if (!accono || accono.length != 11) {
            alert("Invalid acc no");
            return;
        }

        //3.get Amount
        const amount = getValueFromInput("add-money-account");
        const currentBalance=getBalance();
        const newBalance = currentBalance + Number(amount);
        
        const pin=getValueFromInput("add-money-pin");
        if(pin=="1234"){
            alert(`Add money success from ${bankAccount} at ${newDate()}`);
            setBalance(newBalance);
        }else{
            alert("Invalid pin");
            return;
        }
    });

});