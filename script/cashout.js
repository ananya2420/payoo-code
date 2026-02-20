document.getElementById("cashout-btn").addEventListener("click",function(){
  //1.get the agent number or validation
  const cashoutNumber=getValueFromInput("cashout-number");
  if(cashoutNumber.length!=11){
    alert("Invalid pin");
    return;
  }
  //2.get the amount
  const cashoutAmount=getValueFromInput("cashout-amount");

  const currentBalance=getBalance();

  //4.calculate balance
  const newBalance=currentBalance-Number(cashoutAmount);
  console.log(newBalance);

  if(newBalance<0){
    alert("Invalid Amount");
    return;
  }
  const pin=getValueFromInput("cashout-pin");
  if(pin==="1234"){
    alert("Cashout successful");
    setBalance(newBalance);
  }else{
    alert("Invalid pin");
    return;
  }
})
/*
document.getElementById("cashout-btn").addEventListener("click",function(){
    //get the agent number and validation
    const cashoutNumberInput=document.getElementById("cashout-number");
    const cashoutNumber=cashoutNumberInput.value;
    console.log(cashoutNumber);

    if(cashoutNumber.length!=11){
        alert("Invalid agent number");
        return;
    }
    //get the amount, validate, connect to number 
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount=cashoutAmountInput.value;
    console.log(cashoutAmount);
    //get the current balance
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log(balance);
    //calculate new balance
    const newBalance=Number(balance)-Number(cashoutAmount);
    console.log("new balance",newBalance);

    if(newBalance<0){
        alert("Invalid amount");
        return;
    }
    //get the pin and verify
    const cashoutpinInput=document.getElementById("cashout-pin");
    const pin=cashoutpinInput.value;
    if(pin=='1234'){
    //true:: show an alert > set balance
    alert("cashout successful");
    balanceElement.innerText=newBalance;
    }else{
       //false:: show error > null 
     alert("Invalid pin");
     return;
    }
})
    */