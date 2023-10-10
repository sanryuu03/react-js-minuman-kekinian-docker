import Navbar from "../Navbar/index";
import { ContentTypes } from '../../../../services/data-types'

export default function Content(props: ContentTypes) {
    const { content } = props

    return (
        <>
            <div className="content">
                <Navbar />
                <main>
                    {content}
                </main>
            </div>
        </>
    );
}
