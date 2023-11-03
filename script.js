const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    transferAmountInput = document.getElementById('transfer-amount'),
    recipientEmailInput = document.getElementById('recipient-email'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    transferBtn = document.getElementById('transfer-btn'),
    submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
});

depositBtn.addEventListener('click', () => {
    const value = parseFloat(depositInput.value);
    if (!isNaN(value) && value > 0) {
        const depositValue = parseFloat(deposit.innerText) + value;
        const balanceValue = parseFloat(balance.innerText) + value;
        deposit.innerText = depositValue.toFixed(2);
        balance.innerText = balanceValue.toFixed(2);
        depositInput.value = '';
    } else {
        alert('Invalid deposit amount');
    }
});

withdrawBtn.addEventListener('click', () => {
    const value = parseFloat(withdrawInput.value);
    if (!isNaN(value) && value > 0) {
        if (value > parseFloat(balance.innerText)) {
            alert("You don't have that much balance to withdraw");
        } else {
            const balanceValue = parseFloat(balance.innerText) - value;
            const withdrawValue = parseFloat(withdraw.innerText) + value;
            withdraw.innerText = withdrawValue.toFixed(2);
            balance.innerText = balanceValue.toFixed(2);
            withdrawInput.value = '';
        }
    } else {
        alert('Invalid withdrawal amount');
    }
});

transferBtn.addEventListener('click', () => {
    const transferAmount = parseFloat(transferAmountInput.value);
    const recipientEmail = recipientEmailInput.value.trim();
    if (!isNaN(transferAmount) && transferAmount > 0 && recipientEmail !== '') {
        const senderBalance = parseFloat(balance.innerText);
        if (transferAmount <= senderBalance) {
            const recipientBalance = parseFloat(document.getElementById(recipientEmail).innerText);
            const senderNewBalance = senderBalance - transferAmount;
            const recipientNewBalance = recipientBalance + transferAmount;
            balance.innerText = senderNewBalance.toFixed(2);
            document.getElementById(recipientEmail).innerText = recipientNewBalance.toFixed(2);
            transferAmountInput.value = '';
            recipientEmailInput.value = '';
        } else {
            alert("You don't have that much balance to transfer");
        }
    } else {
        alert('Invalid transfer amount or recipient email');
    }
});