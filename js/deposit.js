//step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
   //get the deposit amount from the deposit input field
   //for input field use .value to get the value into the deposit input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);
   //get the current deposit total
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const previousDepositTotal = parseFloat(previousDepositTotalString);
    //add numbers to set the total deposit
   const currentDepositTotal = previousDepositTotal + newDepositAmount;

   depositTotalElement.innerText = currentDepositTotal;

   //get balance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //CALCULATE CURRENT TOTAL BALANCE
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
   
})