console.log("Let's get this party started!");

//this seclects the form and input elements

const $form = $("#search-form");
const $searchTerm = $("search-term");


//submission of form

$form.on("submit", async function(event) {
    event.preventDefault(); //This will prevent the form submitting in a default manner

    //getting search term from input field
    const term = $searchTerm.val();

    
})