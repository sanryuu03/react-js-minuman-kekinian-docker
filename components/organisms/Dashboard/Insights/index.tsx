import { BiCalendarCheck, BiShowAlt, BiLineChart, BiDollarCircle } from "react-icons/bi";

export default function Insights() {
    return (
        <ul className="insights">
            <li>
                <i className='bx bx-calendar-check'><BiCalendarCheck /></i>
                <span className="info">
                    <h3>
                        1,074
                    </h3>
                    <p>Paid Order</p>
                </span>
            </li>
            <li><i className='bx bx-show-alt'><BiShowAlt /></i>
                <span className="info">
                    <h3>
                        3,944
                    </h3>
                    <p>Site Visit</p>
                </span>
            </li>
            <li><i className='bx bx-line-chart'><BiLineChart /></i>
                <span className="info">
                    <h3>
                        14,721
                    </h3>
                    <p>Searches</p>
                </span>
            </li>
            <li><i className='bx bx-dollar-circle'><BiDollarCircle /></i>
                <span className="info">
                    <h3>
                        $6,742
                    </h3>
                    <p>Total Sales</p>
                </span>
            </li>
        </ul>
    )
}
