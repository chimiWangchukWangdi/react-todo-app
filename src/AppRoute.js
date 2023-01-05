import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskManager from "./List/TaskManager";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import SideNav from "./Side-Nav/SideNav";

export default function AppRoute() {
    return (
        <>
        <BrowserRouter>
            <SideNav />
            <Routes>
                {/* <Route path="/" element={<SideNav />} /> */}
                {/* <Route index element={<TaskManager />} /> */}
                <Route path="TaskManager" element={<TaskManager />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="*" element={<Profile />} />
            </Routes>
        </BrowserRouter></>
        
    )
}