console.log("Let's get this party started!");

//this seclects the form and input elements

const $form = $("#search-form");
const $searchTerm = $("search-term");


//submission of form

$form.on("submit", async function(event) {
    event.preventDefault(); //This will prevent the form submitting in a default manner

    //getting search term from input field
    const term = $searchTerm.val();

    try {
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: term,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });
        console.log(response.data) 
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }

    //are there any results?

if (response.data.data.length > 0) {
    //This gets a random gif from the results
    const randomIdx = Math.floor(Math.ramdom() * response.data.data.length);
    const gifUrl = response.data.data.length[randomIdx].images.original.url;

    // Create img element and set src attribute the GIF URL
    const $newGif = $("<img>", { src: gifUrl, class: "gif" });

    //append gif to gif container

    $gifContainer.append($newGif);
} else {
    console.log("No GIFs were found in that search term.")
} catch (error) {
    console.error("Error fetching data from Giphy API:", error);
}
});

