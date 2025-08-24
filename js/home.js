const pin = 1234;

// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName('form');

  for (const form of forms) {
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
}

// handle toggle button/card
function handleToggleBtn(id) {
  const formBtn = document.getElementsByClassName('form-btn');
  for (const btn of formBtn) {
    btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
    btn.classList.add('border-gray-300');
  }

  document.getElementById(id).classList.remove('border-gray-300');
  document
    .getElementById(id)
    .classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

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
      alert('Please Provide Valid Account Number');
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

  const phoneNumber = document.getElementById('phone-number').value;
  const amount = parseInt(document.getElementById('withdraw-amount').value);
  const cashOutPin = parseInt(document.getElementById('cash-out-pin').value);
  const availableBalance = parseInt(
    document.getElementById('available-balance').innerText
  );

  if (phoneNumber.length < 11 || phoneNumber.length > 11) {
    alert('Invalid Phone Number');
    return;
  }
  if (cashOutPin !== pin) {
    alert('Invalid Pin');
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  document.getElementById('available-balance').innerText =
    totalNewAvailableBalance;
});

// toggling feature
document
  .getElementById('add-money-card')
  .addEventListener('click', function () {
    handleToggle('add-money-parent');

    // const formBtn = document.getElementsByClassName('form-btn');
    // for (const btn of formBtn) {
    //   btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
    //   btn.classList.add('border-gray-300');
    // }

    // document
    //   .getElementById('add-money-card')
    //   .classList.remove('border-gray-300');
    // document
    //   .getElementById('add-money-card')
    //   .classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
    handleToggleBtn('add-money-card');
  });

document.getElementById('cash-out-card').addEventListener('click', function () {
  handleToggle('cash-out-parent');

  handleToggleBtn('cash-out-card');
});

document
  .getElementById('transfer-money-card')
  .addEventListener('click', function () {
    handleToggle('transfer-money-parent');

    handleToggleBtn('transfer-money-card');
  });

document.getElementById('bonus-card').addEventListener('click', function () {
  handleToggle('bonus-parent');

  handleToggleBtn('bonus-card');
});

document.getElementById('pay-bll-card').addEventListener('click', function () {
  handleToggle('pay-bill-parent');
  handleToggleBtn('pay-bll-card');
});

document
  .getElementById('transaction-card')
  .addEventListener('click', function () {
    handleToggle('transaction-parent');

    handleToggleBtn('transaction-card');
  });

// logout
document.getElementById('logout-btn').addEventListener('click', function () {
  window.location.href = './index.html';
});
