# Meta Labs Frontend Service
Frontend design for building our app to build more apps

## Setup
git clone **[repo](https://github.com/yyc-lab/meta-labs-frontend-service)**  
``cd meta-labs-frontend-service``  
run ``npm install`` in the terminal  
``npm start``  

## Tech Stack
- [React](https://reactjs.org/)
- [Story Book](https://storybook.js.org/) --> installed
- [Jest](https://jestjs.io/) --> installed
- [Cypress](https://www.cypress.io/) Maybe
- [React Router](https://www.npmjs.com/package/react-router-dom) --> installed
- [Redux]()?

## How to Documentation
- prefer to use named exports (ie. export const Component.....) rather than default exports Component.....
### How to Add a new page
- create the page folder under pages
- add to switch in the App.js file and import the folder path

### State Management
Avoid importing directly from reactn, always use the state management file
You use [ global, setGlobal ] = useGlobal() to access the entire global state object.
[ReactN](https://www.npmjs.com/package/reactn)
ReactN [useGlobal](https://www.npmjs.com/package/reactn#useglobal) function

### API Management




### Story Book (Generic Instructions)
<https://storybook.js.org/docs/guides/quick-start-guide/>

Follow these steps to get started with Storybook.

Get started using the automated command line tool. This command adds a set of boilerplate files for Storybook in your project:

``cd my-project-directory``  
``npx -p @storybook/cli sb init``

The tool inspects your ``package.json`` to determine which view layer you’re using. If you want to develop HTML snippets in storybook, we can’t determine that automatically. So to install storybook for HTML, use the ``--type`` flag to force that the HTML project type:

``npx -p @storybook/cli sb init --type html``

It’s also useful if our automatic detection fails.

By default npx will use the latest version, if you want to try out the next version (or any specific version), you can use the following:

``npx -p @storybook/cli@5.0.0-rc.6 sb init``

To setup a project manually learn more about what the Storybook CLI command sb init command does, take a look at the [Slow Start Guide](https://storybook.js.org/docs/guides/slow-start-guide/).

Start Storybook with:

``npm run storybook``

Storybook should now be available in the browser with a link provided in the console.

### Jest
Tutorials <http://zetcode.com/javascript/jest/>

### Cypress
Tutorials <https://docs.cypress.io/examples/examples/tutorials.html#Test-a-React-Todo-App>

### Notes to clean up later

- 
