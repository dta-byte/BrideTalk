import { MasterLayout } from "./components/pages/MasterLayout";
import { initializeParse } from "./services/apiUtils"
import "./css-system/colors.css"
import "./css-system/typographies.css"

function App() {
  initializeParse(); 
  return (
    <>
    <MasterLayout/>
    </>
  );
}

export default App;
