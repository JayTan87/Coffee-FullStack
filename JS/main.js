"use strict"

function renderCoffee(coffee) {
    let html = '';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}
function updateCoffees2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection2.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
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
    coffees.forEach(function(coffee) {
    if(coffee.name.toLowerCase().includes(userInput.toLowerCase())){
        searchedCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(searchedCoffees);
}
function updateSearch2(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let userInput = searchInput2.value;
    let searchedCoffees = [];
    coffees.forEach(function(coffee) {
        if(coffee.name.toLowerCase().includes(userInput.toLowerCase())){
            searchedCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(searchedCoffees);
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


coffeeDiv.innerHTML = renderCoffees(coffees);
roastSelection.addEventListener('change', updateCoffees);
roastSelection2.addEventListener('change', updateCoffees2);
searchInput.addEventListener('input', updateSearch);
searchInput2.addEventListener('input', updateSearch2)

// Autocomplete
