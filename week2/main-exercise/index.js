/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {number} min - The min number
 * @param {number} max - The max number
 * @returns {Number} Random number between min and max
 */
const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Render the listings
 * @param {array} listings - array of listings
 * @returns {void}
 */
const addListingsToHTML = (listings) => {
    const listingsElement = document.querySelector('#listings');
    listingsElement.innerHTML = '';
    if (listings.length === 0) {
        listingsElement.innerHTML = '<h1>No listings found</h1>';
        return;
    }
    listings.forEach(listing => {
        listingsElement.innerHTML += `
            <li>
                <h2>${listing.type}</h2>
                <p>Price: ${listing.price}</p>
                <p>Size: ${listing.size}</p>
                <p>Facilities: ${listing.facilities}</p>
                <p>Has garden: ${listing.hasGarden}</p>
            </li>
        `;
    });
}

/**
 * Function to render the listings
 * @param {array} listings - array of filtered listings
 * @param {string} filterType - the string with the type to filter on
 * @returns {void}
 */
const renderFilteredListByType = (listings, filterType) => {
    const filteredListing = listings.filter(item => item.type === filterType)
    addListingsToHTML(filteredListing);
}

/**
 * Function to render the listings
 * @param {array} listings - array of filtered listings
 * @param {string} facilityType - a string that contains the facility to filter on
 * @returns {void}
 */
const renderFilteredListByFacilities = (listings, facilityType) => {
    let filteredListing = [];
    listings.forEach(listing => {
        if (listing.facilities.includes(facilityType)) {
            filteredListing.push(listing);
        }
    })
    addListingsToHTML(filteredListing);
}

/**
 * Function to render the listings by price
 * @param {array} listings - array of filtered listings
 * @param {string} price - price to filter on
 * @returns {void}
 */
const renderFilteredListByPrice = (listings, price) => {
    const biggerOrSmaller = price.substring(0, 1);
    const priceNumber = parseInt(price.substring(1));
    const filteredListing = listings.filter(listing => biggerOrSmaller === '-' ?
        listing.price < priceNumber :
        listing.price > priceNumber
    );
    addListingsToHTML(filteredListing);
}

/**
 * Function to render the listings by size
 * @param {array} listings - array of filtered listings
 * @param {string} size - size to filter on
 * @returns {void}
 */
const renderFilteredListBySize = (listings, size) => {
    const biggerOrSmaller = size.substring(0, 1);
    const sizeNum = parseInt(size.substring(1));
    const filteredListing = listings.filter(listing => biggerOrSmaller === '-' ?
        listing.size < sizeNum :
        listing.size > sizeNum
    );
    addListingsToHTML(filteredListing);
}

/**
 * Function to render the listings by listings with garden
 * @param {array} listings - array of filtered listings
 * @returns {void}
 */
const renderFilteredListByHasGarden = (listings) => {
    const filteredListing = listings.filter(listing => listing.hasGarden);
    addListingsToHTML(filteredListing);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {number} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
const generateListings = (numberOfListings) => {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

    for (let i = 0; i < numberOfListings; i++) {

        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];

            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }
    // ForEach exercise
    // listings.forEach(listing => console.log(listing))


    // Map exercise
    const listingPrices = listings.map(listing => listing.price)
    // console.log('listingPrices ', listingPrices)

    // Filter exercise
    // Cheap listings
    const cheapListings = listings.filter(listing => listing.price < 500)
    // console.log('cheapListings ', cheapListings)

    // Expensive listings
    const expensiveListings = listings
        .filter(listing => listing.price > 500)
        .map(listing => listing.price);
    // console.log('expensiveListings ', expensiveListings)

    // Listings with parking
    const listingsWithParking = listings.filter(listing => listing.facilities.includes('Parkering'))
    // console.log('listingsWithParking ', listingsWithParking)
    addListingsToHTML(listings)
    return listings;
}

const listings = generateListings(5);


const selectedTypeFilter = document.querySelector('#type-filter');
selectedTypeFilter.addEventListener('change', (event) => {
    const filterType = event.target.value;
    renderFilteredListByType(listings, filterType);
});

const selectedFacilitiesFilter = document.querySelector('#facilities-filter');
selectedFacilitiesFilter.addEventListener('change', (event) => {
    const facilityType = event.target.value;
    renderFilteredListByFacilities(listings, facilityType);
});


const selectedPriceFilter = document.querySelector('#price-filter');
selectedPriceFilter.addEventListener('change', (event) => {
    const price = event.target.value;
    renderFilteredListByPrice(listings, price);
});


const gardenFilter = document.querySelector('#garden-filter');
gardenFilter.addEventListener('change', (event) => {
    if (event.target.checked) {
        renderFilteredListByHasGarden(listings);
        return;
    }
    addListingsToHTML(listings)
});

const sizeFilter = document.querySelector('#size-filter');
sizeFilter.addEventListener('change', (event) => {
    const size = event.target.value;
    renderFilteredListBySize(listings, size);
});


// event listener for generating 5 new listings and removing all filters
const removeAllFilters = document.querySelector('#remove-filters');
removeAllFilters.addEventListener('click', (event) => {
    generateListings(5);
});
