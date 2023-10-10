import Navbar from "../Navbar/index";
import Header from "../Header/index";
import Insights from "../Insights/index";
import Data from "../Data/index";

export default function Content() {
    return (
        <>
            <div className="content">
                <Navbar />
                <main>
                    <Header />
                    <Insights />
                    <Data />
                </main>
            </div>
        </>
    );
}
