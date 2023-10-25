import { SyntheticEvent, useState } from "react";
import { BiCodeAlt, BiStoreAlt, BiAnalyse, BiLogOutCircle, BiDrink } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiGlass } from "react-icons/ci";
import { FaRupiahSign } from "react-icons/fa6";

export default function Sidebar() {
    const [isActive, setIsActive] = useState('')
    const master = 'master data'

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
                <li id="shop" className={isActive === 'shop' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}>
                    <Link to={`/shop`}><i className='bx bx-store-alt'><BiStoreAlt /></i>Shop</Link>
                </li>
                <li id="product" className={isActive === 'product' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}>
                    <Link to={`/product`}><i className='bx'><BiDrink /></i>{master} Product</Link>
                </li>
                <li id="size" className={isActive === 'size' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}>
                    <Link to={`/size`}><i className='bx'><CiGlass /></i>{master} Size</Link>
                </li>
                <li id="harga" className={isActive === 'harga' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}>
                    <Link to={`/harga`}><i className='bx'><FaRupiahSign /></i>harga produk</Link>
                </li>
                <li id="transactions" className={isActive === 'transactions' ? 'active' : ''} onClick={(e) => onHandleSideBar(e)}>
                    <Link to={`/transactions`}><i className='bx bx-analyse'><BiAnalyse /></i>transactions</Link>
                </li>
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
