// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import { MasterLayout } from "./components/pages/MasterLayout";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'CjaXK1cK9RHctfrx5TstNTyXuUniIZ94YXnv3sKb';
const PARSE_HOST_URL = 'https://localhost:3000/';
const PARSE_JAVASCRIPT_KEY = '7J6sRaT1cZzsspBkFB91RfGCwwcSFxxb6eXIovzq';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <>
    <MasterLayout/>
    </>
  );
}

export default App;
