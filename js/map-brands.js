// document.addEventListener('DOMContentLoaded', function () {
//     var brandData = {
//         data: {
//             LT: "Quantum Systems",
//             LV: "Quantum Systems",
//             EE: "Quantum Systems",
//             FI: "Quantum Systems",
//             SE: "Quantum Systems",
//             // Add more brand data here as needed
//         }
//     };

//     var svgObject = document.getElementById('europe-map');
//     svgObject.addEventListener('load', function () {
//         var svgDoc = this.contentDocument;
//         for (var countryCode in brandData.data) {
//             var countryElement = svgDoc.getElementById(countryCode);
//             if (countryElement) {
//                 countryElement.setAttribute('data-brands', brandData.data[countryCode]);
//             }
//         }
//     });
// });