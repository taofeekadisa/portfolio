function sendWhatsAppMessage(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get the form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Replace with your phone number (including country code, no "+" sign)
  const phoneNumber = "add your phone number";

  // Create the WhatsApp message
  const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;

  // Encode the message and redirect to WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, "_blank");
}
