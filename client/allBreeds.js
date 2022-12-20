const getAllBreeds = () => {
  let allBreeds;
  fetch("http:localhost:5000/api/breeds/")
    .then((res) => res.json())
    .then((data) => {
      allBreeds = data;
    })
    .then(() => {
      console.log(allBreeds);
    })
    .then(() => {
      createOptions(allBreeds);
    });
};
getAllBreeds();

const getOneBreed = (id) => {
  let oneBreed;
  fetch(`http:localhost:5000/api/breeds/${id}`)
    .then((res) => res.json())
    .then((data) => {
      oneBreed = data
    })
    .then(() => {
      return oneBreed;
    });
};

const createOptions = (allBreeds) => {
  for (let i = 0; i < allBreeds.length; i++) {
    let breed = allBreeds[i];
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = `${breed}`;
    document.getElementById("breed_selector").appendChild(option);
  }
};