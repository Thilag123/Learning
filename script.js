const form = document.querySelector(".registration-form");
const userDetails = document.getElementById("userdetails");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const category = document.getElementById("category").value.trim();
  const newsletter = form.newsletter.checked ? "Yes" : "No";

  userDetails.innerHTML = `
  
    <h3>Submitted Details:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Newsletter:</strong> ${newsletter}</p>
  `;

  userDetails.style.display='block';

});
