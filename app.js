// api url
const my_api = "https://jsonplaceholder.typicode.com/users";

// async func to show data
const showdata = async () => {
  const data = await getData();
  tableMaker(data);
};

//define async function
async function getData() {
  try {
    // store response
    const response = await fetch(my_api);
    // sotre data in form of JSON
    if (response.status === 200) {
      const data = await response.json();
      console.log("data in getData", data);
      return data;
    }
  } catch (error) {
    alert(error);
  }
}

// function to generate a table from data
const tableMaker = (data) => {
  // for each obj in data, create 1 tr & 3 td
  data.forEach((person, index) => {
    const personRow = document.createElement("tr");
    personRow.setAttribute("id", `person-row${index}`);
    // add username, email and phone
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const phoneTd = document.createElement("td");
    nameTd.innerText = person.username;
    emailTd.innerText = person.email;
    phoneTd.innerText = person.phone;
    // append current personRow into tbody tag
    document.querySelector("tbody").appendChild(personRow);
    // append each item to current person-row
    document.getElementById(`person-row${index}`).appendChild(nameTd);
    document.getElementById(`person-row${index}`).appendChild(emailTd);
    document.getElementById(`person-row${index}`).appendChild(phoneTd);
  });
};

//showdata(data);
let fetchedOnce = false;
document.querySelector("button").addEventListener("click", () => {
  if (!fetchedOnce) {
    showdata();
    fetchedOnce = true;
  }
});
//console.log(data);
