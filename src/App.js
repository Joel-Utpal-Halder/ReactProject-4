import './App.css';
import Countries from './components/Countries/Countries';
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    {/* # Lacture : React extension pack, Code snippet, Folder structure, create new component and import */}
    {/* <Header/> */}
    <Countries/> 

    {/* # Lacture : Load countries from API using useState and useEffect */}
    </div>
  );
}

// # Lacture : React extension pack, Code snippet, Folder structure, create new component and import
// Install 'Simple React Snippets', ES7+ React/Redux/React-Native snippets and 'react extension pack' extension in vs code

// # Lacture : Load countries from API using useState and useEffect
// Worked on Countries.js file 

// # Lacture : Pass data to Child components using props, unique key for mapping components
// Worked on Country.js and countires.js file

// # Lacture : Pass multiple data to a child component, Props and Destructuring
// Worked on Country.js and countires.js file

// # Lecture : Responsive design, Build react app and project host in netlify
// To upload the project in GitHub and run in Netlify is shown in this lacture
// Running the project in Netlify is different for React project as there is no HTML file to run, and not possible to run as GitHub live website
// 'npm run build' to write in Terminal to build the project and a folder name 'build' will appear in the react project folder in the pc, which is a minified version of the project to run in Netlify
// Under 'package.json' folder 'start, build ect. are showing under 'script'


export default App;
