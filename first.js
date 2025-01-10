var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right= "0";

}
function closemenu(){
    sidemenu.style.right= "-200px";
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzVvWqFU4eP1y2ZCFek0yWu9mBLWZeNpmq-dZFR2u46uoqY13EooXW2Cq8yd5fL_s0mMQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })



  // Get modal element
var modal = document.getElementById("modal");

// Get all the "Learn More" buttons
var learnMoreButtons = document.querySelectorAll(".learn-more");

// Get the close button
var closeButton = document.querySelector(".close");

// Add event listener to each "Learn More" button
learnMoreButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        // Show the modal
        modal.style.display = "block";
    });
});

// When the user clicks on the close button, close the modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

