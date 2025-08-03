// script.js
// Fetch page visit count from CountAPI and update the footer

// Define namespace and key for CountAPI. The namespace and key should
// remain constant so that visits accumulate over time. If this is the
// first time the endpoint is called it will be automatically created.
const COUNT_API_URL = 'https://api.countapi.xyz/hit/fieryash-portfolio/pageviews';

function updateVisitCount() {
  fetch(COUNT_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const countElem = document.getElementById('visit-count');
      if (countElem && data.value !== undefined) {
        countElem.textContent = `Visits: ${data.value}`;
      }
    })
    .catch((error) => {
      console.error('Error fetching visit count:', error);
    });
}

// Call update function on page load
document.addEventListener('DOMContentLoaded', updateVisitCount);