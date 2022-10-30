// Add your code here
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then((response) => {
    return response.json();
  })
  .then((object) => {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things!");
    console.log(error.message);
  });

function submitData(name, email) {
  const emailConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      //id: Math.random(),
    }),
  };
  return fetch("http://localhost:3000/users", emailConfig)
    .then((response) => {
     return  response.json();
    })
    .then((object) => {
      document.querySelector("body").append(object.id);
    })
    .catch(function (error) {
      alert("Bad things in users!");
      document.querySelector("body").innerHTML = error.message
      console.log(error.message);
    });
}

submitData ("user","user@gmail.com");