// import functions and grab DOM elements
const waterDropdownEl = document.getElementById('water-dropdown');
const tropicalDropdownEl = document.getElementById('tropical-dropdown');
const snowyDropdownEl = document.getElementById('snowy-dropdown');

const waterImgTag = document.getElementById('water-img');
const tropicalImgTag = document.getElementById('tropical-img');
const snowyImgTag = document.getElementById('snowy-img');

const timesChangedEl = document.getElementById('time-changed');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
// let state
let timesWaterChanged = 0;
let timesTropicalChanged = 0;
let timesSnowyChanged = 0;

// set event listeners
const slogansEl = document.getElementById('slogans');

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;
    slogans.push(newSlogan);
    sloganInputEl.value = '';
    displayslogans();
});

waterDropdownEl.addEventListener('change', () => {
    waterImgTag.src = `assets/${waterDropdownEl.value}.PNG`;
    timesWaterChanged++;
    displayStats();
});
tropicalDropdownEl.addEventListener('change', () => {
    tropicalImgTag.src = `assets/${tropicalDropdownEl.value}.PNG`;
    timesTropicalChanged++;
    displayStats();
});
snowyDropdownEl.addEventListener('change', () => {
    snowyImgTag.src = `assets/${snowyDropdownEl.value}.PNG`;
    timesSnowyChanged++;
    displayStats();
});

function displayStats() {
    timesChangedEl.textContent = `you've changed the water destination ${timesWaterChanged} times, the tropical destination ${timesTropicalChanged} times, and the snowy destination ${timesSnowyChanged} times.`;
}

function displaySlogans() {
    slogansEl.textContent = '';

    for (let slogan of slogan) {
        const sloganEl = document.createElement('p');
        sloganEl.textContent = slogan;
        sloganEl.classList.add('slogan');
        slogansEl.append(sloganEl);
    }
}

displaySlogans();