import { MasterLayout } from "./components/pages/MasterLayout";
import "./css-system/colors.css"
import "./css-system/typographies.css"

import { initializeParse} from "@parse/react";
import { AuthProvider, AuthInit } from "./components/pages";
// Parse initialization configuration 
const PARSE_APPLICATION_ID = 'CjaXK1cK9RHctfrx5TstNTyXuUniIZ94YXnv3sKb';

const PARSE_LIVE_QUERY_URL = "https://bridetalk.b4a.io/";

const PARSE_JAVASCRIPT_KEY = '7J6sRaT1cZzsspBkFB91RfGCwwcSFxxb6eXIovzq';

	initializeParse(
		PARSE_LIVE_QUERY_URL,
		PARSE_APPLICATION_ID, 
    PARSE_JAVASCRIPT_KEY);

function App() {
  // initializeParse(); 
  return (
    <>
    <AuthProvider>
      <AuthInit>
        <MasterLayout/>
      </AuthInit>
    </AuthProvider>
    </>
  );
}

export default App;
