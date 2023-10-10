import { SyntheticEvent, useState } from "react";
import { BiCodeAlt, BiSolidDashboard, BiStoreAlt, BiAnalyse, BiMessageSquareDots, BiGroup, BiCog, BiLogOutCircle } from "react-icons/bi";

export default function Sidebar() {
    const [isActive, setIsActive] = useState('')

    const onHandleSideBar = (e: SyntheticEvent) => {
        e.preventDefault()
        setIsActive(e.currentTarget.id)
    }

    return (
        <div className="sidebar">
            <a href="/" className="logo">
                <i className='bx bx-code-alt'><BiCodeAlt /></i>
                <div className="logo-name"><span>San</span>Ryuu</div>
            </a>
            <ul className="side-menu">
                <li id='dashboard' className={isActive === 'dashboard' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/dashboard"><i className='bx bxs-dashboard'><BiSolidDashboard /></i>Dashboard</a></li>
                <li id="shop" className={isActive === 'shop' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/shop"><i className='bx bx-store-alt'><BiStoreAlt /></i>Shop</a></li>
                <li id="analytics" className={isActive === 'analytics' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/analytics"><i className='bx bx-analyse'><BiAnalyse /></i>Analytics</a></li>
                <li id="tickets" className={isActive === 'tickets' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/tickets"><i className='bx bx-message-square-dots'><BiMessageSquareDots /></i>Tickets</a></li>
                <li id="users" className={isActive === 'users' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/users"><i className='bx bx-group'><BiGroup /></i>Users</a></li>
                <li id="settings" className={isActive === 'settings' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}><a href="/settings"><i className='bx bx-cog'><BiCog /></i>Settings</a></li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <i className='bx bx-log-out-circle'><BiLogOutCircle /></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}