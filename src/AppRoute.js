import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskManager from "./List/TaskManager";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import SideNav from "./Side-Nav/SideNav";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <SideNav />
            <Routes>
                <Route path="list" element={<TaskManager />} />
                <Route path="profile" element={<Profile />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<TaskManager />} />
            </Routes>
        </BrowserRouter>
    );
}