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


function service_select(event){
  event.preventDefault();
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    const services = checkboxes.map(checkbox => ({
      value: parseInt(checkbox.value),
      label: checkbox.previousElementSibling.textContent
    }));
      
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('noPhone').value;
    const contactMethod = document.getElementById('contactWay').value;


    const sum = services.reduce((total, service) => total + service.value, 0);


    const imageUrl = "testbaru.svg";

    
    const checkedItems = Array.from(checkboxes).map(checkbox => {
      return {
        label: document.querySelector(`label[for="${checkbox.id}"]`).textContent,
        value: checkbox.value
      };
    });

    // Display the checked checkboxes
    const content = `<h2>Checked Services:</h2><hr><ul>${checkedItems.map(item => `<li>${item.label} - <p>RM${item.value}</p></li>`).join('')}</ul>`;
    const newTab = window.open();
  newTab.document.write(`
  
  <img src="${imageUrl}" alt="Predefined Image" width="300" height="200">
  <h1>Service Quotation</h1>
<p> ~ Please be mindful the price displayed here is just a cost overhead for the service and there may be changes to the price based on the real condition of customer cars and suggestion of our experts. ~</p>
                          <hr>
                          <hr>
                  
                          <h2>Customer Details:</h2>
                          <hr>
                          <p>Name:${fullname}</p>
                      
                          <p>E-mail:${email}</p>
                          
                          <p>Phone number:${phoneNumber}</p>
                          
                          <p>Contact Method:${contactMethod}</p>
                          <p>Service Charge: RM${sum}</p>
                          <br>
                          <hr>
                          <p>${content}</p>
                          <br>
                          
                          <br><br><br><br>
                          `);

                          
  }


