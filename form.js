const data = [];
let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputForFirstName = form["fname"];
    const inputForLastName = form["lname"];
    const inputForStartDate = form["start"];
    const inputForEmail = form["email"];
    const inputForMassage = form["name"];

    const person = {
    fname: inputForFirstName.value,
    lname: inputForLastName.value,
    start: inputForStartDate.value,
    email: inputForEmail.value,
    name: inputForMassage.value,
    };

    data.push(person);
    form.reset();
    console.log(data);
});
