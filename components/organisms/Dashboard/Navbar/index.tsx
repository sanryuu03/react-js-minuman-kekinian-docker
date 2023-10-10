import { ChangeEvent, useEffect, useState } from "react";
import { BiMenu, BiBell } from "react-icons/bi";

export default function Navbar() {
    const [sideBar, setSidebar] = useState<HTMLDivElement>()

    useEffect(() => {
        setSidebar(document.querySelector('.sidebar') as HTMLDivElement);
    }, [])

    const doSideBar = () => {
        sideBar?.classList?.toggle('close');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            sideBar?.classList.add('close');
        } else {
            sideBar?.classList.remove('close');
        }
    });

    const onToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        isChecked ? document.body.classList.add('dark') : document.body.classList.remove('dark')
    }

    return (
        <nav>
            <i className='bx bx-menu' onClick={() => doSideBar()}><BiMenu /></i>
            <form action="#">
            </form>
            <input type="checkbox" id="theme-toggle" onChange={(e) => onToggle(e)} hidden />
            <label htmlFor="theme-toggle" className="theme-toggle" ></label>
            <a href="#" className="notif">
                <i className='bx'><BiBell /></i>
                <span className="count">12</span>
            </a>
            <a href="#" className="profile">
                <img src="https://muhammadhasan.my.id/assets/me-6bc98b1b.png" />
            </a>
        </nav>
    )
}
