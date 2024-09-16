console.log("Let's get this party started!");

// Select the form and input elements
const $form = $("#search-form");
const $searchTerm = $("#search-term");
const $gifContainer = $("#gif-container"); // Make sure this matches the ID in your HTML

// Handle form submission
$form.on("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the search term from the input field
    const term = $searchTerm.val();

    try {
        // Make an AJAX request to the Giphy API using Axios
        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: term,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        });

        console.log(response.data);

        // Check if there are any results
        if (response.data.data.length > 0) {
            // Get a random GIF from the results
            const randomIdx = Math.floor(Math.random() * response.data.data.length);
            const gifUrl = response.data.data[randomIdx].images.original.url;

            // Create an img element and set its src attribute to the GIF URL
            const $newGif = $("<img>", { src: gifUrl, class: "gif" });

            // Append the new GIF to the gif-container
            $gifContainer.append($newGif);
        } else {
            console.log("No GIFs were found for that search term.");
        }
    } catch (error) {
        console.error("Error fetching data from Giphy API:", error);
    }
});


