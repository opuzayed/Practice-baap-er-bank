document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-field');
   const newWithDrawAmountString = withdrawField.value;
   const newWithDrawAmount = parseFloat(newWithDrawAmountString);
   
   const withdrawTotalElement = document.getElementById('withdraw-total');
   const previousWithdrawTotalString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;


   withdrawField.value = "";
})