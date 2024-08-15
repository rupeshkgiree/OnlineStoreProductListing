# Online Store Project

## Overview
This project is a simple online store web application that allows users to browse, filter, and sort products. It features a responsive design and dynamic product loading from a JSON file.

## Features
- Display products in a grid layout
- Filter products by category
- Sort products by price (low to high and high to low) and rating (low to high and high to low)
- Responsive design for various screen sizes

## Setup Instructions

1. Clone the repository or download the project files.

2. Ensure you have the following files in your project directory:
   - index.html
   - style.css
   - script.js
   - products.json

3. Make sure you have product images in an `images` folder, as referenced in the `products.json` file.

4. To run the project locally, you'll need a local web server due to CORS restrictions when loading JSON files. You can use one of the following methods:

   - If you have Python installed:
     - For Python 3.x: Run `python -m http.server` in the project directory
     - For Python 2.x: Run `python -m SimpleHTTPServer` in the project directory

   - If you have Node.js installed:
     - Install `http-server` globally: `npm install -g http-server`
     - Run `http-server` in the project directory

   - Use a code editor with a built-in server, like Visual Studio Code with the "Live Server" extension

5. Open your web browser and navigate to `http://localhost:8000` (or the appropriate port if different).

## Technologies Used

- HTML5: For structuring the web page content
- CSS3: For styling the web page and implementing responsive design
- JavaScript (ES6+): For dynamic content loading, filtering, and sorting functionality
- JSON: For storing and loading product data
- Fetch API: For asynchronously loading the product data from the JSON file

## Project Structure

- `index.html`: The main HTML file that structures the web page
- `style.css`: Contains all the styles for the project
- `script.js`: Implements the dynamic functionality of the store
- `products.json`: Stores the product data

## Future Improvements

- Implement a shopping cart functionality
- Add user authentication and account management
- Integrate with a backend server for dynamic product management
- Implement pagination or infinite scrolling for larger product catalogs
- Add more advanced filtering options (e.g., price range, multiple categories)

## Contributing

Feel free to fork this project and submit pull requests with any improvements or bug fixes. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
