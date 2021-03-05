# publications-react

React Redux application for managing publications.

A complete Single-Page-Application (SPA) created using React JavaScript library. The app uses Redux for state management and Bootstrap for styling the UI. It's also interacting with a RESTful API which is protected using JWT.

## Setup and Installation

1. **Backend REST API Node server**

   As this React app is consuming a REST API, make sure the same is up and running on your system

   - the complete code is available [here](https://github.com/muntasir2165/publications-api) at GitHub

2. **Clone the React app repo from GitHub**

   ```sh
   git clone https://github.com/muntasir2165/publications-react.git
   ```

3. **Install npm dependencies**

   ```sh
   cd publications-react
   npm install
   ```

4. **Update configuration**
   If the back-end API server is running locally, uncomment line 1 in `apiUrl.js` and comment out line 2. Otherwise, running the application as is will interact with the API currently deployed at [Heroku](https://publications-api.herokuapp.com)

   ```js
   // export const API_URL = 'http://localhost:8080';
   export const API_URL = 'https://publications-api.herokuapp.com';
   ```

5. **Run npm start to start the application**
   ```sh
   npm start
   ```
   this runs the application at port 3000 and we can access from http://localhost:3000
