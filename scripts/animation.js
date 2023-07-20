
(function init() {
  "use strict";

  const offers = Array.from(document.getElementsByClassName("offer"));

  function loadOffers(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loadVisible");
        observer.unobserve(entry.target); // Stop observing once the offer is visible
      }
    });
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.01],
  };

  const observer = new IntersectionObserver(loadOffers, options);

  offers.forEach((offer) => {
    observer.observe(offer);
  });



  // bei save search on click Bestätigung
  const saveSearchButton = document.getElementById('save-search');
  saveSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const newElement = document.createElement('p');
    newElement.textContent = `Wir suchen eine Reise für dich nach ${location}.`;
    const resultArea = document.getElementById('result-search');
    resultArea.innerHTML = '';
    resultArea.appendChild(newElement);
  });

  // bei save appointment on click Bestätigung
  const saveAppointmentButton = document.getElementById('save-appointment');
  saveAppointmentButton.addEventListener('click', function (event) {
    event.preventDefault();
    const newElement = document.createElement('p');
    newElement.textContent = `Email wurde versandt.`;
    const resultArea = document.getElementById('result-appointment');
    resultArea.innerHTML = '';
    resultArea.appendChild(newElement);
  });
})();