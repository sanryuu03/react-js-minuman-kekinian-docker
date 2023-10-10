import Reminders from '../Reminders/index'
import { BiReceipt, BiFilter, BiSearch } from "react-icons/bi";

export default function Data() {
    return (
        <>
            <div className="bottom-data">
                <div className="orders">
                    <div className="header">
                        <i className='bx bx-receipt'><BiReceipt /></i>
                        <h3>Recent Orders</h3>
                        <i className='bx bx-filter'><BiFilter /></i>
                        <i className='bx bx-search'><BiSearch /></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://muhammadhasan.my.id/assets/me-6bc98b1b.png" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://muhammadhasan.my.id/assets/me-6bc98b1b.png" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://muhammadhasan.my.id/assets/me-6bc98b1b.png" />
                                    <p>John Doe</p>
                                </td>
                                <td>14-08-2023</td>
                                <td><span className="status process">Processing</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Reminders />
            </div>
        </>
    )
}
