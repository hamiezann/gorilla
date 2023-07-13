function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
 
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
    
    }
function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function cancel(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
// Services hide and show quotation
let a = Boolean;
function show_hide()
{
if(a==1)
{
document.getElementById("quotation_space").style.display="inline";
return a=0;
}
else 
{
document.getElementById("quotation_space").style.display="none";
return a=1;
}
}

function popupSection(){
  // Get the modal
let popup = document.getElementById("quotation-popup");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-popup")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popup.style.display = "none";
}

}


function service_select(event) {
  event.preventDefault();
  // Get the form and checkboxes
const form = document.getElementById('serviceForm');
const checkboxes = form.querySelectorAll('input[type="checkbox"]');
const summaryButton = document.getElementById('summaryButton');
const carType = document.getElementById('carType').value;
const discountCode = document.getElementById('discountCode').value; // Get the discount code input

// Validate the required fields
const fullname = document.getElementById('fname').value;
const email = document.getElementById('email').value;
const phoneNumber = document.getElementById('noPhone').value;
const contactMethod = document.getElementById('contactWay').value;

if (
  fullname.trim() === '' ||
  email.trim() === '' ||
  phoneNumber.trim() === '' ||
  contactMethod.trim() === ''
) {
  alert('Please fill in all required fields.');
  return; // Stop the form submission
}

// Listen for click event on the summary button
summaryButton.addEventListener('click', openTabWithSummary);

// Function to open a new tab with the summary
function openTabWithSummary() {
  event.preventDefault();
  // Get all the checked checkboxes
  const checkedCheckboxes = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));

  // Calculate the total cost
  const totalCost = checkedCheckboxes.reduce((total, checkbox) => {
    return total + parseInt(checkbox.value);
  }, 0);

  // Apply discount if a valid discount code is entered
  const discountAmount = getDiscountAmount(discountCode);
  const discountedTotalCost = totalCost * (1-discountAmount);

  // Create an array of selected services
  const selectedServices = checkedCheckboxes.map((checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
    return `${label} - RM${checkbox.value}`;
  });


  const fullname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('noPhone').value;
  const contactMethod = document.getElementById('contactWay').value;

  const imageUrl = "testbaru.svg";

  // Create the content for the new tab
  const content = `<h2>Checked Services:</h2><hr><ul>${selectedServices.map((service) => `<li>${service}</li>`).join('')}</ul>`;
  const newTab = window.open();

  newTab.document.write(`
  <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="text-align: center;">
      <img src="${imageUrl}" alt="Predefined Image" width="300" height="200">
      <h1>Service Quotation</h1>
      <p>~ Please be mindful that the price displayed here is just an estimate and may vary based on the actual condition of the customer's car and our experts' recommendations. ~</p>
      <hr>
      <h2>Customer Details:</h2>
      <table style="margin: 0 auto; border-collapse: collapse; border: 1px solid black;">
        <tr>
          <td style="border: 1px solid black; padding: 5px;">Name</td>
          <td style="border: 1px solid black; padding: 5px;">${fullname}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px;">Car Type</td>
          <td style="border: 1px solid black; padding: 5px;">${carType}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px;">E-mail</td>
          <td style="border: 1px solid black; padding: 5px;">${email}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px;">Phone number</td>
          <td style="border: 1px solid black; padding: 5px;">${phoneNumber}</td>
        </tr>
        <tr>
          <td style="border: 1px solid black; padding: 5px;">Contact Method</td>
          <td style="border: 1px solid black; padding: 5px;">${contactMethod}</td>
        </tr>
      </table>
      <hr>
      <h2>Checked Services:</h2>
      <table style="margin: 0 auto; border-collapse: collapse; border: 1px solid black;">
        <tr>
          <th style="border: 1px solid black; padding: 5px;">Service Type</th>
          <th style="border: 1px solid black; padding: 5px;">Value</th>
        </tr>
        ${selectedServices.map((service) => {
          const [type, value] = service.split(' - ');
          return `
            <tr>
              <td style="border: 1px solid black; padding: 5px;">${type}</td>
              <td style="border: 1px solid black; padding: 5px;">${value}</td>
            </tr>
          `;
        }).join('')}
      </table>
      <hr>
      <h1>Service Summary</h1>
      <p>Total Cost: RM${totalCost}</p>
      ${discountAmount > 0 ? `<p>Discount: ${discountAmount * 100}%</p>` : ''}
          <p>Discounted Total: RM${discountedTotalCost}</p>
    </div>
  </div>
`);

}

function getDiscountAmount(discountCode) {
  // Define your discount code logic here
  // Return the discount amount based on the entered discount code
  // If the discount code is not valid or not applicable, return 0
  
  // Example:
  if (discountCode === 'SUMMER2023') {
    return 0.4; // Apply a discount of RM50
  } else {
    return 0; // No discount
  }
};
 
const popupButton = document.getElementById("summaryButton");
  popupButton.addEventListener('click', openNewTab);
}
  








