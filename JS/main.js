(function () {
	"use strict"

	function renderCoffee(coffee) {
		let roastImage = "";
		if (coffee.roast === "light") {
			roastImage = '../IMG/light-roast.jpeg'
		}
		if (coffee.roast === "medium") {
			roastImage = '../IMG/medium-roasted.jpeg'
		}
		if (coffee.roast === "dark") {
			roastImage = '../IMG/dark-roasted.jpeg'
		}
		let html = `
        <div class="col-6">
            <h2>${coffee.name}</h2>
            <img src=${roastImage} width="50px" height="50px" class="img-custom">
            <p class="mt-2">${coffee.roast}</p>
        </div>
    `;
		return html;
	}


	function renderCoffees(coffees) {
		let html = '';
		for (let i = 0; i < coffees.length; i++) {
			html += renderCoffee(coffees[i]);
		}
		return html;
	}


	function updateCoffees(e) {
		e.preventDefault(); // don't submit the form, we just want to update the data
		let selectedRoast = roastSelection.value;
		let filteredCoffees = [];
		coffees.forEach(function (coffee) {
			if (selectedRoast === "all") {
				filteredCoffees = coffees;
			} else if (coffee.roast === selectedRoast) {
				filteredCoffees.push(coffee);
			}
		});
		coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
	}

	function updateCoffees2(e) {
		e.preventDefault(); // don't submit the form, we just want to update the data
		let selectedRoast = roastSelection2.value;
		let filteredCoffees = [];
		coffees.forEach(function (coffee) {
			if (coffee.roast === selectedRoast) {
				filteredCoffees.push(coffee);
			}
		});
		coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
	}

	function updateSearch(e) {
		e.preventDefault(); // don't submit the form, we just want to update the data
		let userInput = searchInput.value;
		let searchedCoffees = [];
		coffees.forEach(function (coffee) {
			if (coffee.name.toLowerCase().includes(userInput.toLowerCase())) {
				searchedCoffees.push(coffee);
			}
		});
		coffeeDiv.innerHTML = renderCoffees(searchedCoffees);
	}

	function addCoffee(e) {
		e.preventDefault();
		let userInput2 = searchInput2.value;
		let userRoast = roastSelection2.value;
		let newCoffee = {id: coffees.length + 1, name: `${userInput2}`, roast: `${userRoast}`};
		coffees.push(newCoffee);
		coffeeDiv.innerHTML = renderCoffees(coffees);
	}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
	let coffees = [
		{id: 1, name: 'Light City', roast: 'light'},
		{id: 2, name: 'Half City', roast: 'light'},
		{id: 3, name: 'Cinnamon', roast: 'light'},
		{id: 4, name: 'City', roast: 'medium'},
		{id: 5, name: 'American', roast: 'medium'},
		{id: 6, name: 'Breakfast', roast: 'medium'},
		{id: 7, name: 'High', roast: 'dark'},
		{id: 8, name: 'Continental', roast: 'dark'},
		{id: 9, name: 'New Orleans', roast: 'dark'},
		{id: 10, name: 'European', roast: 'dark'},
		{id: 11, name: 'Espresso', roast: 'dark'},
		{id: 12, name: 'Viennese', roast: 'dark'},
		{id: 13, name: 'Italian', roast: 'dark'},
		{id: 14, name: 'French', roast: 'dark'},
	];

	let coffeeDiv = document.querySelector('#coffees');

	let roastSelection = document.querySelector('#roast-selection');
	let roastSelection2 = document.querySelector('#roast-selection2');
	let searchInput = document.querySelector('#search');
	let searchInput2 = document.querySelector('#search2');
	let submit = document.querySelector('#submit2');


	coffeeDiv.innerHTML = renderCoffees(coffees);
	roastSelection.addEventListener('change', updateCoffees);
	roastSelection2.addEventListener('change', updateCoffees2);
	searchInput.addEventListener('input', updateSearch);
	submit.addEventListener('click', addCoffee)


})();
