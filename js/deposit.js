//step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
   //get the deposit amount from the deposit input field
   //for input field use .value to get the value into the deposit input field
   const depositField = document.getElementById('deposit-field');
   const depositAmount = depositField.value;
   //get the current deposit total
   const depositTotalElement = document.getElementById('deposit-total');
   const depositTotal = depositTotalElement.innerText;
   depositTotalElement.innerText = depositAmount;
   
})