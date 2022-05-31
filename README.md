# GitHub Search Front End App
React, Redux, typescript & graphQL

## Requirements to run using npm

For development, you will need Node.js installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    ex: v14.18.1

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Application Set up and test steps
## Install
    $ cd YOUR_PATH/src
    $ npm install

## Build
    $ npm run build

## Running the project using npm

    $ npm run start
## Testing the project
    $ npm run test

## Service Overview
1. The Application is built with React, Redux, Typescript and GraphQL that runs on port 5000

2. It uses containerised react architecture wherein the UI components are encapsulated with container to have standalone       implementations

3. The use of the application is to search issues of Facebook/ React in github

4. Validations for status are in place and an error message is thrown for invalid inputs

5. You can also look into individual issues by clicking a issue to see details of it

6. Test cases are written using Jest library

7. The Code is linted and formatted using Prettier.

8. To perform test cases, run --> npm run test

9. Invalid url's are also validated 