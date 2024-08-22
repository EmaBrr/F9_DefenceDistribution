// https://simplemaps.com/resources/svg-europe

document.getElementById('europe-map').addEventListener('load', function () {
  var svgDoc = this.contentDocument;  
  var tooltip = document.getElementById('tooltip');

  var countryColors = {
      'LV': '#bd9f7c', // Latvia
      'LT': '#bd9f7c', // Lithuania
      'EE': '#bd9f7c', // Estonia
      'FI': '#bd9f7c', // Finland
      'SE': '#bd9f7c'  // Sweden
  };

  for (var id in countryColors) {
      var countryElement = svgDoc.getElementById(id);
      if (countryElement) {
          countryElement.style.fill = countryColors[id];
      }
  }

  var countries = svgDoc.querySelectorAll('path');

  countries.forEach(function(country) {
      country.addEventListener('mouseover', function() {
          var countryName = country.getAttribute('name');  
          var brandInfo = country.getAttribute('data-brands'); 
          tooltip.innerHTML = `<strong>${countryName}</strong><br>Brands: ${brandInfo || 'None'}`;
          tooltip.style.display = 'block';
      });

      country.addEventListener('mousemove', function(e) {
          tooltip.style.left = e.pageX + 10 + 'px';
          tooltip.style.top = e.pageY + 10 + 'px';
      });

      country.addEventListener('mouseout', function() {
          tooltip.style.display = 'none';
      });
  });
});
