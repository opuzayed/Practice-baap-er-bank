document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithDrawAmountString = withdrawField.value;
   const newWithDrawAmount = parseFloat(newWithDrawAmountString);
   
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   //get balance
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   
   const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;

   withdrawField.value = "";
})