const processForm = (event) => {
    event.preventDefault();
    // Get the form input values
    const [id, name, ext, email, department] = Array.from(document.getElementsByClassName("empInput"), input => input.value);
    // Display the form input values in the console
    console.log("Employee ID:", id);
    console.log("Name:", name);
    console.log("Extension:", ext);
    console.log("Email:", email);
    console.log("Department:", department);
};

const form = document.getElementById("empForm");
form.addEventListener("submit", processForm);
