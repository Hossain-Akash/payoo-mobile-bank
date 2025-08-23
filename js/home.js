const pin = 1234;

document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();

    const bank = document.getElementById('account-number').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = parseInt(document.getElementById('add-pin').value);

    // console.log(bank, accountNumber, addAmount, addPin);

    if (accountNumber.length < 11 || accountNumber.length > 11) {
      alert('Please Provide VAlid Account Number');
      return;
    }

    if (addPin !== pin) {
      alert('Invalid Pin');
      return;
    }

    const availableBalance = parseInt(
      document.getElementById('available-balance').innerText
    );

    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

//   cash out function
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById('withdraw-amount').value);

  const availableBalance = parseInt(
    document.getElementById('available-balance').innerText
  );

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  document.getElementById('available-balance').innerText =
    totalNewAvailableBalance;
});

// toggling feature
document
  .getElementById('add-money-card')
  .addEventListener('click', function () {
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
  });

document.getElementById('cash-out-card').addEventListener('click', function () {
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'block';
});

// logout
document.getElementById('logout-btn').addEventListener('click', function () {
  window.location.href = './index.html';
});
