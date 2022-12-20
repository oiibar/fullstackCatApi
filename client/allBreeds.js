const getAllBreeds = () => {
  fetch("http://localhost:5000/api/breeds/")
    .then((res) => res.json())
    .then((data) => {
      createOptions(data);
			return data;
    })
};
getAllBreeds();

const getOneBreed = (id) => {
  fetch(`http://localhost:5000/api/breeds/${id}`)
    .then((res) => res.json())
    .then((data) => data)
};

const createOptions = async (allBreeds) => {
	let select = document.getElementById('breed_selector');
  for (let i = 0; i < allBreeds.length; i++) {
    let option = document.createElement("option");
		option.innerHTML = `${allBreeds[i].name}`;
    option.value = allBreeds[i].id;
		select.appendChild(option);
  }
	select.onchange = () => {
		const selectedElement = select.value;
		console.log(getOneBreed(selectedElement))
	}
};
