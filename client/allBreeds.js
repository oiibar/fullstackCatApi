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
	return fetch(`http://localhost:5000/api/breeds/${id}`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
};

const createOptions = async (allBreeds) => {
	let select = document.getElementById('breed_selector');
  for (let i = 0; i < allBreeds.length; i++) {
    let option = document.createElement("option");
		option.innerHTML = `${allBreeds[i].name}`;
    option.value = allBreeds[i].id;
		select.appendChild(option);
  }
	select.onchange = async () => {
		const selectedElement = select.value;
		const data = await getOneBreed(selectedElement);
		console.log(data)
		renderInfo(data);
	}
};

const renderInfo = (data) => {
	let info = document.getElementById('info');
	info.innerHTML = `
		<h2>${data.name}</h2>
		<p>${data.description}</p>
		<p>${data.temperament}</p>
		<p>${data.life_span}</p>
		<p>${data.origin}</p>
	`;
}
