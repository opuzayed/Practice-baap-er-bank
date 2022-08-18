document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithDrawAmountString = withdrawField.value;
   const newWithDrawAmount = parseFloat(newWithDrawAmountString);

   withdrawField.value = "";

   if(isNaN(newWithDrawAmount))
   {
    alert('Please type a valid amount');
    return;
   }
   
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   //get balance
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   

   //check condition
   if(newWithDrawAmount > previousBalanceTotal)
   {
    alert('You have a insufficient fund. Try another amount');
    return;
   }

   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;
   
   const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;

   
})