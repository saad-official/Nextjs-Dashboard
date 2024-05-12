import { ReactNode } from "react";
import MainMenu from "./components/main-menu";

export default function DashboardLayout({children}:{children:ReactNode}){
return <div className="grid grid-cols-[250px_1fr] h-screen">
    <MainMenu />
    <div className="overflow-auto px-4 py-2">
       <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}</div>
</div>
}