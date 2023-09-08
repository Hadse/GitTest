// Step 1: JavaScript Function to Add Countries
function addCountry() {
    const countryInput = document.getElementById('countryInput');
    const countryName = countryInput.value.trim();

    if (countryName !== '') {
        const countryList = document.getElementById('countryList');
        const listItem = document.createElement('li');
        listItem.textContent = countryName;
        countryList.appendChild(listItem);

        // Clear the input
        countryInput.value = '';
    }
}

// Step 2: JavaScript Function to Delete List Items
function deleteCountry(event) {
    const listItem = event.target.parentElement;
    const countryList = document.getElementById('countryList');
    countryList.removeChild(listItem);
}

// Step 3A: Function to Check if Element Starts with Search Word
function startsWith(element, searchWord) {
    return element.toLowerCase().startsWith(searchWord.toLowerCase());
}

// Step 3B: Function to Filter List Based on Search Word
function filterList(list, searchWord) {
    return list.filter((element) => startsWith(element, searchWord));
}

// Step 4: JavaScript Function to Update List Based on Search
function updateList() {
    const countryInput = document.getElementById('countryInput');
    const searchWord = countryInput.value.trim();
    const countries = Array.from(document.querySelectorAll('#countryList li'));

    const filteredCountries = filterList(countries.map((item) => item.textContent), searchWord);

    countries.forEach((item, index) => {
        if (filteredCountries.includes(item.textContent)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event listeners
const addButton = document.getElementById('addButton');
const countryList = document.getElementById('countryList');
const countryInput = document.getElementById('countryInput');

addButton.addEventListener('click', addCountry);
countryList.addEventListener('click', deleteCountry);
countryInput.addEventListener('input', updateList);
