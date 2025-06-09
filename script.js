const form = document.getElementById("formSubmit");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 const name = e.target.nameField.value;
  const email = e.target.emailField.value;
  const text = e.target.textAreaField.value;
  const data = { name, email, text };

  fetch("https://portfolio-server-steel-nine.vercel.app/messages", {
    method: "POST",headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  .then(res=>res.json())
  .then(resData=>{
    console.log(resData);
form.reset()
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to submit data.');
  });

  console.log(data);
});



