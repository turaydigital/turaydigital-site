const form = document.getElementById("waitlistForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  statusText.textContent = "Submitting...";

  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch("https://waitlist-api.danieljturay.workers.dev/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Something went wrong.");
    }

    statusText.textContent = "Thank you — you're on the waitlist!";
    form.reset();
  } catch (error) {
    statusText.textContent = "Could not submit. Please try again.";
  }
});