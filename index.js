let emailCollector = document.getElementById("email-collector");

emailCollector.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(e.target);
  let userFirstName = formData.get("firstName");
  let mainContent = document.getElementById("main-content");

  let updatedHtmlContent = `
    <h2>Congratulations, ${userFirstName}!</h2>
    <h3>You're on your way to becoming a BBQ Master!</h3>
    <p class="small-text">We'll never share your information without your permission</p>
  `;

  mainContent.innerHTML = updatedHtmlContent;
});
