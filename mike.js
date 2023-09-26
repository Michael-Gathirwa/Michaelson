// Function to fetch data from the API
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Function to populate the Dashboard Summary section
  async function populateDashboardSummary() {
    const summarySection = document.getElementById('dashboard-summary');
    const totalPropertiesElement = summarySection.querySelector('#total-properties');
    const totalTenantsElement = summarySection.querySelector('#total-tenants');
    const totalIncomeElement = summarySection.querySelector('#total-income');
  
    // Fetch summary data from your API
    const summaryData = await fetchData('/api/dashboard-summary');
  
    // Update the HTML elements with fetched data
    totalPropertiesElement.textContent = summaryData.totalProperties;
    totalTenantsElement.textContent = summaryData.totalTenants;
    totalIncomeElement.textContent = `$${summaryData.totalIncome}`;
  }
  
  // Function to populate the Property Management section
  async function populatePropertyManagement() {
    const propertyList = document.querySelector('.property-list ul');
  
    // Fetch property data from your API
    const propertyData = await fetchData('/api/properties');
  
    // Clear existing property list items
    propertyList.innerHTML = '';
  
    // Iterate through property data and create list items
    propertyData.forEach((property) => {
      const listItem = document.createElement('li');
      listItem.textContent = property.name;
      propertyList.appendChild(listItem);
    });
  }
  
  // Function to populate the Tenant Management section
  async function populateTenantManagement() {
    const tenantList = document.querySelector('.tenant-list ul');
  
    // Fetch tenant data from your API
    const tenantData = await fetchData('/api/tenants');
  
    // Clear existing tenant list items
    tenantList.innerHTML = '';
  
    // Iterate through tenant data and create list items
    tenantData.forEach((tenant) => {
      const listItem = document.createElement('li');
      listItem.textContent = tenant.name;
      tenantList.appendChild(listItem);
    });
  }
  
  // Call the functions to populate sections when the page loads
  window.addEventListener('load', () => {
    populateDashboardSummary();
    populatePropertyManagement();
    populateTenantManagement();
  });
  
  showSection(dashboardSection);
