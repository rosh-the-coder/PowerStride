// for validating the user form and DOB

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    const leapCardNumber = document.getElementById("leapCardNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dobInput = document.getElementById("exampleInputDOB1").value;

    // Predefined values for validation
    const validLeapCardNumber = "10410125880623";
    const validEmail = "yolo@tud.com";
    const validPassword = "qwerty123";

    // Check Leap Card Number
    if (
      !/^[0-9]{14}$/.test(leapCardNumber) ||
      leapCardNumber !== validLeapCardNumber
    ) {
      alert("Invalid Leap Card Number.");
      return;
    }

    // to check Email ID
    if (email !== validEmail) {
      alert("This email ID is not registered with this Leap Card Number.");
      return;
    }

    // to check Password
    if (password !== validPassword) {
      alert("Invalid Password.");
      return;
    }

    // to check Date of Birth
    if (!dobInput) {
      alert("Please enter a valid Date of Birth.");
      return;
    }

    const enteredDate = new Date(dobInput);
    const today = new Date();

    // to check if the entered date is in the future
    if (enteredDate > today) {
      alert("Date entered is Invalid.");
      return;
    }

    // Calculate the user's age
    const age = today.getFullYear() - enteredDate.getFullYear();
    const monthDifference = today.getMonth() - enteredDate.getMonth();
    const dayDifference = today.getDate() - enteredDate.getDate();

    // Adjust age if the user's birthday has not occurred yet this year
    const isBirthdayPassed =
      monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0);
    const adjustedAge = isBirthdayPassed ? age : age - 1;

    // to check if the user is under 18
    if (adjustedAge < 18) {
      alert("User should be above 18.");
      return;
    }

    // If all criteria are met
    alert("All criteria fulfilled.");
    window.location.href = "powerstride.html";
  });
