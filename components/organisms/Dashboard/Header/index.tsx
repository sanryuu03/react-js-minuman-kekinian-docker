import { BiCloudDownload } from "react-icons/bi";

export default function Header() {
    return (
        <div className="header">
            <div className="left">
                <h1>Dashboard</h1>
                <ul className="breadcrumb">
                    <li><a href="#">
                        Analytics
                    </a></li>
                    /
                    <li><a href="#" className="active">Shop</a></li>
                </ul>
            </div>
            <a href="#" className="report">
                <i className='bx bx-cloud-download'><BiCloudDownload /></i>
                <span>Download CSV</span>
            </a>
        </div>
    )
}
