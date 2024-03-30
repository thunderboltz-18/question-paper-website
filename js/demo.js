// Using addEventListener
var form = document.getElementById("myForm"); // Get the form element by id
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the default form submission
  // Do something with the form data
  console.log("Form submitted");
});

// Using onsubmit attribute
<form id="myForm" onsubmit="return handleSubmit();" // Add the onsubmit attribute to the form element
  // Form fields
  input type="submit" value="Submit">
</form>


  function handleSubmit() {
    // Do something with the form data
    console.log("Form submitted");
    return false; // Prevent the default form submission
  }
