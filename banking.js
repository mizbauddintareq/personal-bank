document.getElementById('deposit-btn').addEventListener('click', function(){
    // get deposit input value
    const depositField = document.getElementById('deposit-amount');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);

    // get deposit input value and update total deposit
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const totalDepositAmount = parseFloat(totalDepositText);
    totalDeposit.innerText = totalDepositAmount + depositAmount;

    // update total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount + depositAmount;

    // clear deposit input field
    depositField.value = '';
    
    
});

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get withdraw input value
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

     // get withdraw input value and update total withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount

    // update total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;

    // clear withdraw input field
    withdrawField.value = '';
});