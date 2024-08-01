// $(document).ready(function () {
//     console.log("Ready");

//     // Validation function
//     function validateForm() {
//       let isValid = true;
//       let errorMessage = "";

//       // Array of field definitions
//       const fields = [
//         { id: "#fname", name: "First name", validation: (val) => val.trim() !== "" },
//         { id: "#lname", name: "Last name", validation: (val) => val.trim() !== "" },
//         {
//           id: "#email",
//           name: "Email",
//           validation: (val) => val.trim() !== "" && validateEmail(val),
//         },
//         {
//           id: "#password",
//           name: "Password",
//           validation: (val) => val.trim().length >= 6,
//         },
//       ];

//       // Iterate over each field for validation
//       fields.forEach((field) => {
//         const value = $(field.id).val();
//         if (!field.validation(value)) {
//           isValid = false;
//           errorMessage += `${field.name} is invalid. `;
//         }
//       });

//       $(".error").text(errorMessage);
//       return isValid;
//     }

//     // Email validation function
//     function validateEmail(email) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//     }

//     // Submit event handler
//     $("#forma").submit(function (event) {
//       event.preventDefault(); // Prevent form submission
//       if (validateForm()) {
//         alert("Form submitted successfully!");
//         // Here you can add code to submit the form data
//       }
//     });
//   });

$(document).ready(function () {
  console.log("Ready");

  // Validation function
  function validateForm() {
    let isValid = true;
    let errorMessage = "";

    // Array of field definitions
    const fields = [
      {
        id: "#fname",
        name: "First name",
        validation: (val) => val.trim() !== "",
      },
      {
        id: "#lname",
        name: "Last name",
        validation: (val) => val.trim() !== "",
      },
      {
        id: "#email",
        name: "Email",
        validation: (val) => val.trim() !== "" && validateEmail(val),
      },
      {
        id: "#password",
        name: "Password",
        validation: (val) => val.trim().length >= 6,
      },
    ];

    // Iterate over each field for validation
    fields.forEach((field) => {
      const value = $(field.id).val();
      if (!field.validation(value)) {
        isValid = false;
        errorMessage += `${field.name} is invalid. `;
      }
    });

    $(".error").text(errorMessage);
    return isValid;
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Submit event handler
  $("#forma").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
      alert("Form submitted successfully!");
      // Here you can add code to submit the form data
    }
  });
});
