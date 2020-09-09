## Task Approach

-> first we will create a folder named components in which we will put all our code.

-> then we will create a Api.js file in the components folder which will fetch the github api and export it to the App.js file.

-> then we will install redux, react-redux and redux-thunk modules. Here redux module is used for redux, react-redux module is used for connecting the react components with redux and the redux-thunk module is used for connectin with the external APIs.

-> As we know that Redux maintains a store, to use that we will import createStore and applyMiddleware form redux, import provider from react-redux and thunk from redux-thunk in the index.js file.

-> now instead of renfering only App in index.js file, we will wrap the App inside the provide which we just rendered. Now the Provider takes store as a parameter, for that we will create a store folder inside the src folder to maintain the store.

-> store folder will have 2 sub folders action and reducers, action folder will have action.js file and reducers folder will have the reducer.js file.

-> the state of the app is maintained in a object in the reducer.js file called initState. we will be changing the state of the app witha function called reducer which takes 2 parameters which are state and action, here we are setting the state as a default state which is the initState and returning the state in the function and exporting it as a default reducer.

-> now we are importin the reducer in the index.js file and to create a store we will use the createStore function from redux which will take 2 parameters reducer and applyMiddleware, applyMiddleware takes a parameter called thuck to use thunk for asyncronous transition and pass the store into the store function defined in the Provider as a parameter.

-> now going back to the Api.js file, in the api function what we want is that we will be having a input box and when the username is typed in the input box the state is changing and on submitting the username by clicking on the button the value will be sent to the github server and we will be receiving the response.

-> now in the initState we will define the variables the we want to fetch from the github like username, name, repos, following, followers, grabbedData, message, image_url and html_url. now to change the state of the Username in the initState we will use the onChange property of the button in the Api.js file and set its value to a function called handleUsername. Then we will define the handleUsername function with e as a property which is empty for now.

-> now we will create 2 more functions namely mapStateToProps which will take state as a parameter which will return the state and second functions is mapDispatchToProps which will take dispatch as a parameter and return the the values of the functions called accordingly.

-> now we will import connect from react-redux what is does is it takes state values from every component and connects them with the external api. we will export the Api form the Api.js file using the connect function, the connect function itself takes 2 parameters which the are functions we defiened earlier mapStateToProps and mapDispatchToProps.

->  mapStateToProps will return the state of the username, name, repos, following, followers, grabbedData, message, image_url and html_url when called and mapStateToProps will have to perform an action for that lets create a function name changeUsername which will take e as a parameter and wraps up dispatch function which will perform some action from the action.js file for that first import all the functions as actionCreator from action.js file in Api.js file, then the dispatch function will take the changeusername function with a parameter e from the action.js file as a parameter which we will create later.

-> now moving to the action.js file create a function which will perform some action, first we will create a function mapStateToProps directly exporting it by default which takes e as a parameter and will return type set to HANDLE_CHANGE and pass event e with it to store the event .

-> Now so we will set the Api component to props and the handleUsername function inside the Api component will access username typed in the input box.

-> now the changes which are made in the changeUsername function are applied to the state in the reducer using the action property where the action in the object returned by the changeUsername function and using the reducer function and it will check with if-else statement, if the type is HANDLE_CHANGE then the state of the username is changed which is exported to the action.js file.

-> now the data will be fetched by the submitForm function which will have e and the username as a parameter and return a async dispatch function which will use tru and catch block to catch any error if any, the try bolck will try to fetch the github username to check that the profile actually exists, If the Profile exist then the data will be stored in a json format after fetched and dispatch it to the reducer, if not then the error will be handled in the catch block and a error message will be showned as User not found.

-> now back in the reducer function we will check with the else-if statement if the type is SUBMIT then the entire state is changed and exported else the error message is generated stating user not found.

-> now we will use the button to submit the the username typed in the input box.

-> now that the data is fetched we will create a showProfile.js file which will contain 2 functions 1 to render the data fetched from the reducer and change the state of the application namely ShowProfile and the other one to map the data namely mapStateToProps.





## -----------------------------------------------------------------------------------------------------------------------------------------------------------------------





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
