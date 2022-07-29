// import functions and grab DOM elements
const waterDropdownEl = document.getElementById('water-dropdown');
const tropicalDropdownEl = document.getElementById('tropical-dropdown');
const snowyDropdownEl = document.getElementById('snowy-dropdown');

const waterImgTag = document.getElementById('water-img');
const tropicalImgTag = document.getElementById('tropical-img');
const snowyImgTag = document.getElementById('snowy-img');

const timesChangedEl = document.getElementById('times-changed');
const sloganInputEl = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
// let state
let timesWaterChanged = 0;
let timesTropicalChanged = 0;
let timesSnowyChanged = 0;
let slogans = [];

// set event listeners
const slogansEl = document.getElementById('slogans');

sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInputEl.value;
    slogans.push(newSlogan);
    sloganInputEl.value = '';
    displaySlogans();
});

waterDropdownEl.addEventListener('change', () => {
    waterImgTag.src = `assets/${waterDropdownEl.value}.PNG`;
    timesWaterChanged++;
    displayCountStats();
});

tropicalDropdownEl.addEventListener('change', () => {
    tropicalImgTag.src = `assets/${tropicalDropdownEl.value}.PNG`;
    timesTropicalChanged++;
    displayCountStats();
});

snowyDropdownEl.addEventListener('change', () => {
    snowyImgTag.src = `assets/${snowyDropdownEl.value}.PNG`;
    timesSnowyChanged++;
    displayCountStats();
});

function displayCountStats() {
    timesChangedEl.textContent = `You have changed your water destination ${timesWaterChanged} times, your tropical destination ${timesTropicalChanged} times, and your snowy destinations ${timesSnowyChanged} times. It's best to make up your mind!`;
} 

function displaySlogans() {
    slogansEl.textContent = '';

    for (let slogan of slogans) {
        const sloganEl = document.createElement('p');
        sloganEl.textContent = slogan;
        sloganEl.classList.add('slogan');
        slogansEl.append(sloganEl);
    }
}

displaySlogans();