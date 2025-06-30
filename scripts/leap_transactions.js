// Transaction data arrays
const dates = ["24 Oct", "06 Nov", "06 Nov", "06 Nov", "06 Nov", "06 Nov"];
const times = ["09:03", "14:56", "14:50", "14:29", "09:40", "09:28"];
const descriptions = [
  "Last top-up",
  "Dublin Bus",
  "Luas",
  "Luas",
  "Dublin Bus",
  "Dublin Bus",
];
const amounts = ["€10.00", "-€0.50", "+€0.50", "-€2.00", "€0.00", "-€2.00"];

// Function to dynamically populate transactions into the HTML
function populateTransactions() {
  const wrapper = document.querySelector(".transaction-wrapper");

  if (!wrapper) {
    console.error("No element with the class 'transaction-wrapper' found.");
    return;
  }

  // Creating table element
  const table = document.createElement("table");
  table.classList.add("transaction-table");

  // table header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Description</th>
      <th>Amount</th>
    </tr>
  `;
  table.appendChild(thead);

  //  table body
  const tbody = document.createElement("tbody");

  for (let i = 0; i < dates.length; i++) {
    const row = document.createElement("tr");

    // table cells for each data field
    row.innerHTML = `
      <td>${dates[i]}</td>
      <td>${times[i]}</td>
      <td>${descriptions[i]}</td>
      <td>${amounts[i]}</td>
    `;

    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  wrapper.appendChild(table);
}

// Populate transactions on page load
document.addEventListener("DOMContentLoaded", populateTransactions);
