# Introduction
Spòrs is a web app used to find and organise sporting events. The purpose of the web app is to facilitate the organisation and participation in sports events. By allowing users to create events and invite others to join, the app aims to bring together people who share an interest in sports and create a platform for them to connect, compete, and have fun. This app can also help people find and try new sports activities they may not have considered before. Additionally, the app can be useful for sports clubs or organisations that want to organise events for their members or for the public. Overall, the application serves as a tool to promote physical activity, community engagement, and healthy lifestyles. 

## Prerequisites
- Node.js and npm installed on your machine

## Installation
1. Clone the repository:
```
git clone https://github.com/thomaswdaniel/cs3528bravo.git
```
2. Navigate to the project directory and install the server dependencies: 
```
cd cs3528bravo
npm install
```
3. Navigate to the client directory and install the client dependencies: 
```
cd client
npm install
```
4. Navigate back to the project directory:
```
cd ..
```
5. Create a .env file in the project directory with the following contents:
```
  PORT=5000
  MONGODB_URI=mongodb+srv://Cluster34479:UWFtRFtGX090@cluster34479.1jsddom.mongodb.net/cs3528
```
6. Start the server:
```
node server
```
7. In a new terminal window, navigate to the projects client directory and start the client:
```
cd cs3528bravo
cd client
npm start
```
The web app should now be running at http://localhost:3000. You can create sports events and join existing events as a user.


## Dependencies
The dependencies are located within the package.json file for both the server and the client. The program requires the following dependencies:
#### Hardware Requirements:
- 2 GHz dual-core processor or better
- 4 GB RAM or more
100 GB of available disk space
#### Operating Systems:
- Windows 10 64-bit
- macOS 10.15 or later
- Ubuntu 18.04 or later
#### Software Packages:
- Node.js (version 14.x or later)
- MongoDB (version 4.x or later)
#### Server Dependencies:
- axios@1.3.4
- cookie-parser@1.4.4
- cors@2.8.5
- express@4.18.2
- http-errors@1.7.3
- mongodb@3.4.1
- mongoose@6.9.1
- morgan@1.9.1
- nodemailer@6.9.1
- path@0.12.7
- pug@3.0.2
- react@18.2.0
- react-dom@18.2.0
- react-share@4.4.1
- realm-web@1.5.1
#### Client Dependencies:
- @babel/plugin-bugfix-v8-spread-parameters-in-optional-chaining@7.20.7
- @emotion/react@11.10.6
- @emotion/styled@11.10.6
- @mui/material@5.11.10
- ajv@8.12.0
- axios@1.3.1
- babel-core@6.26.3
- bootstrap@5.2.3
- navbar-react@1.0.4
- react@18.2.0
- react-bootstrap@2.7.2
- react-dom@18.2.0
- react-router-dom@6.2.2
- react-scripts@5.0.1
- realm-web@1.5.1
- typescript@4.9.5
#### Dev Dependencies:
- @babel/core@7.20.12
- @babel/preset-env@7.20.2
- @testing-library/jest-dom@4.2.4
- @testing-library/react@9.3.2
- @testing-library/user-event@7.1.2

Note: The versions listed are the ones used during development, and newer versions may be available.

## Deployed version details

The deployed version of the web application can be found [here](https://cs3528bravo.azurewebsites.net/)

To use the application, users can create an account by clicking on the "Sign Up" button and providing their details. Alternatively, users can log in using the following sample accounts:
##### User account:
- Email: user@test.com
- Password: Test@1234

Please note that these are sample accounts created for testing purposes only. It is recommended that users create their own accounts and use strong, unique passwords to protect their data.

## How to test the application 

To test the application, you can follow the steps below:
1. Clone the project repository from GitHub to your local machine.
2. Install the required dependencies for the server and client applications by running the following commands in separate terminal windows:
```
cd server
npm install

cd ../client
npm install
```
3. Start the server application by running the following command in the server directory:
```
node server
```
4. Start the client application by running the following command in the client directory:
```
npm start
```
5. The client application will open in your default web browser at http://localhost:3000/. You can now create sports events and join those events.
6. To run tests, you can use the following commands:
```
cd server
npm test

cd ../client
npm test
```

These commands will run the server and client tests respectively, using the test data and scripts provided in the test directories of each application.

By following these steps, you can test the functionality of the web application and ensure that it is working as expected.

## How to deploy the application
To deploy the application, you can use any hosting solution that suppports web applications. Here are the general steps to follow for Microsoft Azure:

### Prerequisites
- An Azure account with an active subscription.
- Visual Studio Code.
- Azure App Service extension for Visual Studio Code.

### Steps
1. Open the project folder in Visual Studio Code.
2. In Visual Studio Code, in the Activity Bar, select the Azure logo.
3. In the App Service tab, select Sign in to Azure and follow the instructions.
4. In Visual Studio Code, you should see all your details in the App Service tab.

### Configure the App Service app and deploy the project
1. Select the folder in Visual Studio Code
2. Enter a globally unique name.
3. Select a runtime stack, use Node 16 LTS for optimal functionality of this project.
4. Select the suitable pricing tier and wait for the resources to be created in Azure.
5. In the popup "Always deploy the workspace...", select Yes. This way, Visual Studio Code will deploy to the same App Service app each time.
6. Once the deployment is complete, select Browse Website in the notication popup. You should now see the home page.

### Redploy updates
1. Make changes to the project
2. In the App Service tab, select the Deploy to Web App icon, then click Deploy again.
3. Wait for the deployment to complete, visit the site again and your changes will be shown.


## How to extend the application
To extend the application, you can add new features or modify existing ones. Here are the general steps to follow:
1. Identify the feature you want to add or modify and determine the requirements.
2. Create a new branch in the Git repository to work on the feature.
3. Make the necessary changes to the code to implement the new feature or modify existing code to reflect the changes.
4. Test the new feature thoroughly to ensure it works as intended and does not break existing functionality.
5. Once you are satisfied with the changes, merge the branch back into the main branch.
6. Update the documentation as needed to reflect the changes.

Some best practices to keep in mind when extending the application:

1. Keep the code modular and well-organised.
2. Follow established coding conventions to ensure consistency.
3. Write unit tests for the new features to ensure they work as expected.
4. Consider the impact of the changes on the overall application and make sure they are well-integrated.
5. Solicit feedback from other developers and users to ensure the changes are valuable and useful.





