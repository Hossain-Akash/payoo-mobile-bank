// login button functionality
document.getElementById('btn-login').addEventListener('click', function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById('phone-number').value;
  const mobileNumberValueUpdate = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById('pin-number').value;
  const pinNumberValueUpdate = parseInt(pinNumberValue);

  if (
    mobileNumberValueUpdate === mobileNumber &&
    pinNumberValueUpdate === pinNumber
  ) {
    window.location.href = './home.html';
  } else {
    alert('Invalid Phone or Pin');
  }
});
