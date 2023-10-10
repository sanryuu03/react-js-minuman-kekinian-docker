import { BiNote, BiFilter, BiPlus, BiCheckCircle, BiXCircle, BiDotsVerticalRounded } from "react-icons/bi";

export default function Reminders() {
    return (
        <div className="reminders">
            <div className="header">
                <i className='bx bx-note'><BiNote /></i>
                <h3>Remiders</h3>
                <i className='bx bx-filter'><BiFilter /></i>
                <i className='bx bx-plus'><BiPlus /></i>
            </div>
            <ul className="task-list">
                <li className="completed">
                    <div className="task-title">
                        <i className='bx bx-check-circle'><BiCheckCircle /></i>
                        <p>Start Our Meeting</p>
                    </div>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="completed">
                    <div className="task-title">
                        <i className='bx bx-check-circle'><BiCheckCircle /></i>
                        <p>Analyse Our Site</p>
                    </div>
                    <i className='bx bx-dots-vertical-rounded'></i>
                </li>
                <li className="not-completed">
                    <div className="task-title">
                        <i className='bx bx-x-circle'><BiXCircle /></i>
                        <p>Play Footbal</p>
                    </div>
                    <i className='bx bx-dots-vertical-rounded'><BiDotsVerticalRounded /></i>
                </li>
            </ul>
        </div>
    )
}
