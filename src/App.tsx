import { ToastContainer } from "react-toastify";
import RoutesIndex from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <RoutesIndex />
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;
