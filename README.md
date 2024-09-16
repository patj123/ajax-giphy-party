# ajax-giphy-party

# Giphy Party - Step-by-Step Guide

## **Overview**

In this assignment, you'll create an interactive web application using the Giphy API. This project is designed to help you practice making AJAX requests using Axios and dynamically updating the DOM with the responses you get from the API.

By the end of this project, you should have a simple application that allows users to search for GIFs and display them on the page. Users will also have the option to remove all the displayed GIFs with a single click.

## **Step 1: Setting Up the Project**

- Start with the provided `index.html` file. It contains a minimal setup including a form and a button to remove GIFs.
- You'll need to include the Axios library and jQuery in your HTML file. This has already been done for you in the starter code.

## **Step 2: Building the Search Form**

- In the HTML file, create a form with:
  - An input field for the user to enter their search term.
  - A submit button that will trigger the GIF search.
- Ensure that your form has an event listener set up in your JavaScript file. This will handle the form submission and prevent the default form behavior.

## **Step 3: Making the API Call**

- When the form is submitted:
  - Capture the user's input (search term).
  - Use Axios to make an AJAX request to the Giphy API's search endpoint.
  - Include your API key and the search term in the request parameters.
- To confirm that your request is working correctly, log the response data to the console.

**Hint:** Look at the Giphy API documentation for the required parameters for a search request.

## **Step 4: Displaying the GIF**

- Once you have confirmed that the API request is working and you are receiving a response:
  - Extract a GIF from the response data.
  - Create an HTML element (e.g., an image tag) to display the GIF.
  - Append this element to the page within a designated container.
- Ensure that multiple searches will append multiple GIFs to the page rather than replacing the existing ones.

**Hint:** You might want to use jQuery to create and insert new elements into the DOM.

## **Step 5: Handling Multiple GIFs**

- Your application should be able to handle multiple searches:
  - Each search should append a new GIF to the page.
  - Ensure your application doesn't break if the user submits the form multiple times in quick succession.

## **Step 6: Removing GIFs**

- Add an event listener to the "Remove Images" button.
- When this button is clicked:
  - Remove all GIFs from the page.
- This can be done by clearing the container where the GIFs are appended.

**Hint:** Look into jQuery methods for clearing the contents of an element.

## **Step 7: Testing and Debugging**

- Test your application thoroughly:
  - Ensure that a new GIF appears on the page every time you submit a search term.
  - Make sure the "Remove Images" button clears all the GIFs as expected.
- Use the console to debug and verify that the API requests are working correctly and that the correct elements are being appended to the page.

## **Step 8: Styling and Enhancements (Optional)**

- Add some CSS to make your application look nicer.
- You can use the Bootstrap classes included in the starter HTML file to style your form, buttons, and GIF container.
- Consider adding additional features, such as:
  - Displaying multiple GIFs per search.
  - Allowing the user to specify the number of GIFs to display per search.

## **What to Look For**

- **Correct API Usage:** Ensure you're using the Giphy API correctly, including sending the necessary parameters with each request.
- **DOM Manipulation:** Check how elements are being created and appended to the page.
- **Event Handling:** Verify that form submissions and button clicks are being handled properly.
- **Clean Code:** Keep your code organized and readable. Avoid hardcoding values and make sure to handle edge cases gracefully.
- **User Experience:** Ensure the application is intuitive and works smoothly for the user.

## **Conclusion**

This project is an excellent opportunity to practice making AJAX requests, handling user input, and dynamically updating the DOM. By following the steps outlined above, you'll create a fun and interactive application using the Giphy API.