import { ReactNode } from "react";
import Content from "../Content";
import Sidebar from "../Sidebar";

type MainLayoutsProps = { children: ReactNode }

export default function MainLayouts({ children }: MainLayoutsProps) {
    return (
        <>
            <Sidebar />
            <Content content={children} />
        </>
    )
}
