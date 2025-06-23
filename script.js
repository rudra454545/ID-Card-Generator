document.getElementById('generateBtn').addEventListener('click', function () {
  document.getElementById('loadingScreen').style.display = 'flex';

  const name = document.getElementById('name').value.trim();
  const regdNo = document.getElementById('regdNo').value.trim();
  const semester = document.getElementById('semester').value.trim();
  const bloodGroup = document.getElementById('bloodGroup').value.trim();
  const universityName = document.getElementById('universityName').value.trim();
  const phoneNo = document.getElementById('phoneNo').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !regdNo || !semester || !bloodGroup || !universityName || !phoneNo || !email) {
    alert('Please fill all fields before generating the ID card');
    document.getElementById('loadingScreen').style.display = 'none';
    return;
  }

  setTimeout(() => {
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardRegdNo').textContent = regdNo;
    document.getElementById('cardSemester').textContent = semester;
    document.getElementById('cardBloodGroup').textContent = bloodGroup;
    document.getElementById('cardUniversityName').textContent = universityName;
    document.getElementById('cardPhoneNo').textContent = phoneNo;
    document.getElementById('cardEmail').textContent = email;

    const qrData = `Name: ${name}\nRegd No: ${regdNo}\nSemester: ${semester}\nBlood Group: ${bloodGroup}\nPhone: ${phoneNo}\nEmail: ${email}`;
    const qrDiv = document.getElementById('qrCode');
    qrDiv.innerHTML = "";
    new QRCode(qrDiv, {
      text: qrData,
      width: 160,
      height: 160,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('loadingScreen').style.display = 'none';
  }, 1200);
});

document.getElementById('flipBtn').addEventListener('click', () => {
  document.querySelector('.card-wrapper').classList.toggle('flipped');
});
