import React, { useState } from "react";


const Navbar = (props) => {
    return (
        <>
            <div className="mainContainer container ms-0">
                <div className="">
                    <div className="sideMenu">
                        <nav className="nav flex-column">
                            <a className="navbar-brand ms-4" href="">Comvita - 2.0</a>
                            <span className="brandBorder"></span>
                            <div className="ms-4 fs-5">
                                <a className="nav-link" href="#"><i className="bi bi-speedometer me-2"></i>Dashboard</a>
                                <a className="nav-link" href="#"><i class="bi bi-diagram-3 me-2"></i>Manage Products</a>
                                <a className="nav-link" href="#"><i class="bi bi-rocket-takeoff me-2"></i>Manage Codes</a>
                                <a className="nav-link" href=""><i class="bi bi-search me-2"></i>Manage Code Search</a>
                                <a className="nav-link" href=""><i class="bi bi-archive me-2"></i>Disable Codes</a>
                                <a className="nav-link" href=""><i class="bi bi-tags me-2"></i>Manage Labels</a>
                                <a className="nav-link" href=""><i class="bi bi-briefcase me-2"></i>Manage Batches</a>
                                <a className="nav-link" href=""><i class="bi bi-people me-2"></i>Manage Users</a>
                                <a className="nav-link" href=""><i class="bi bi-list-ul me-2"></i>Manage Roles</a>
                                <a className="nav-link" href=""><i class="bi bi-list-check me-2"></i>Manage Categories</a>
                                <a className="nav-link" href=""><i class="bi bi-person-vcard me-2"></i>Manage Beekeepers</a>
                                <a className="nav-link" href=""><i class="bi bi-map me-2"></i>Manage Regions</a>
                                <a className="nav-link" href=""><i class="bi bi-envelope-at me-2"></i>Manage Emails</a>
                                <a className="nav-link" href=""><i class="bi bi-envelope-x me-2"></i>Invalid Codes</a>
                                <a className="nav-link" href=""><i class="bi bi-file-earmark me-2"></i>Reports</a>
                                <a className="nav-link" href=""><i class="bi bi-sliders me-2"></i>Manage Site Settings</a>
                                <a className="nav-link" href="#"><i class="bi bi-door-open-fill me-2"></i>Logout</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;