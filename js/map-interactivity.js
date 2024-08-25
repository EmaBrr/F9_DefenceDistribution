// // https://simplemaps.com/resources/svg-europe

// document.getElementById('europe-map').addEventListener('load', function () {
//   var svgDoc = this.contentDocument;  
//   var tooltip = document.getElementById('tooltip');

//   var countryColors = {
//       'LV': '#bd9f7c', // Latvia
//       'LT': '#bd9f7c', // Lithuania
//       'EE': '#bd9f7c', // Estonia
//       'FI': '#bd9f7c', // Finland
//       'SE': '#bd9f7c'  // Sweden
//   };

//   for (var id in countryColors) {
//       var countryElement = svgDoc.getElementById(id);
//       if (countryElement) {
//           countryElement.style.fill = countryColors[id];
//       }
//   }

//   var countries = svgDoc.querySelectorAll('path');

//   countries.forEach(function(country) {
//       country.addEventListener('mouseover', function() {
//           var countryName = country.getAttribute('name');  
//           var brandInfo = country.getAttribute('data-brands'); 
//           tooltip.innerHTML = `<strong>${countryName}</strong><br>Brands: ${brandInfo || 'None'}`;
//           tooltip.style.display = 'block';
//       });

//       country.addEventListener('mousemove', function(e) {
//           tooltip.style.left = e.pageX + 10 + 'px';
//           tooltip.style.top = e.pageY + 10 + 'px';
//       });

//       country.addEventListener('mouseout', function() {
//           tooltip.style.display = 'none';
//       });
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
    var brandData = {
        data: {
            LT: "Quantum Systems",
            LV: "Quantum Systems",
            EE: "Quantum Systems",
            FI: "Quantum Systems",
            SE: "Quantum Systems",
            // Add more brand data here as needed
        }
    };

    var svgDoc = document.getElementById('europe-map');
    var tooltip = document.getElementById('tooltip');

    // Apply colors to country paths
    var countryColors = {
        'LV': '#bd9f7c', // Latvia
        'LT': '#bd9f7c', // Lithuania
        'EE': '#bd9f7c', // Estonia
        'FI': '#bd9f7c', // Finland
        'SE': '#bd9f7c'  // Sweden
    };

    for (var countryCode in brandData.data) {
        var countryElement = svgDoc.getElementById(countryCode);
        if (countryElement) {
            countryElement.setAttribute('data-brands', brandData.data[countryCode]);
            countryElement.style.fill = countryColors[countryCode] || '#ececec';

            // Hover event listeners
            countryElement.addEventListener('mouseover', function (event) {
                var countryName = this.getAttribute('name');
                var brandInfo = this.getAttribute('data-brands');

                tooltip.innerHTML = `<strong>${countryName}</strong><br>Brands: ${brandInfo || 'None'}`;
                tooltip.style.display = 'block';

                // Position the tooltip near the mouse
                var tooltipX = event.pageX + 10;
                var tooltipY = event.pageY + 10;

                tooltip.style.left = tooltipX + 'px';
                tooltip.style.top = tooltipY + 'px';
            });

            countryElement.addEventListener('mousemove', function (event) {
                var tooltipX = event.pageX + 10;
                var tooltipY = event.pageY + 10;

                tooltip.style.left = tooltipX + 'px';
                tooltip.style.top = tooltipY + 'px';
            });

            countryElement.addEventListener('mouseout', function () {
                tooltip.style.display = 'none';
            });
        } else {
            console.log("Country element not found: ", countryCode); // Debugging line
        }
    }

    // Hide the tooltip when clicking outside the map
    document.addEventListener('click', function (event) {
        if (!svgDoc.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.style.display = 'none';
        }
    });
});
