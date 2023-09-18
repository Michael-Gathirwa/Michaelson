// Sample property data (you can fetch this from your database)
const properties = [
    { id: 1, name: 'Property 1', tenants: 5, revenue: 2500 },
    { id: 2, name: 'Property 2', tenants: 3, revenue: 1800 },
    { id: 3, name: 'Property 3', tenants: 7, revenue: 3200 },
    { id: 4, name: 'Property 4', tenants: 4, revenue: 2100 },
    { id: 5, name: 'Property 5', tenants: 6, revenue: 2900 },
];

// Function to display property data in the dashboard
function displayProperties() {
    const propertyList = document.getElementById('property-list');

    properties.forEach(property => {
        const propertyItem = document.createElement('div');
        propertyItem.classList.add('property-item');

        propertyItem.innerHTML = `<a href="#" data-property-id="${property.id}">${property.name}</a>`;

        propertyList.appendChild(propertyItem);
    });
}

// Function to display property details when a property is clicked
function displayPropertyDetails(propertyId) {
    const propertyDetails = document.getElementById('property-details');
    const property = properties.find(p => p.id === propertyId);

    // Display property details and graphs here
    propertyDetails.innerHTML = `
        <h2>${property.name} Details</h2>
        <p>Tenants: ${property.tenants}</p>
        <p>Total Revenue: $${property.revenue}</p>
        <!-- Add graphs and other property-related information here -->
    `;
}

// Add click event listeners to property links
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const propertyId = parseInt(event.target.getAttribute('data-property-id'));
        displayPropertyDetails(propertyId);
    }
});

// Call the function to display property data when the page loads
window.addEventListener('load', displayProperties);
