import { useState } from "react";

const Sidebar = ({displayState, setSelectedTab, selectedTab, displayHideFn}) => {


    const hideAndTabFn = (event) => {
        setSelectedTab("CreatePost");
        displayHideFn(event);
    }

    const showAndTabFn = (event) => {
        setSelectedTab("Home");
        displayHideFn(event);
    }

    return <div className={`sidebar ${displayState} fixed-top flex-column flex-shrink-0 p-3 bg-black`} style={{width: "320px", height: "100vh"}}>
        <a href="/" className="mb-3 mb-md-0 me-md-auto d-flex link-body-emphasis text-decoration-none">
            <h4 className="text-info mr-24">Dashboard</h4>
        </a> <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
            <li onClick={(event) => showAndTabFn(event)} className="nav-item text-white"> <a href="#" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`} aria-current="page"> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#home"></use></svg>Home</a>
            </li>
            <li onClick={(event) => hideAndTabFn(event)} className="nav-item text-white"> <a href="#" className={`nav-link text-white ${selectedTab === 'CreatePost' && 'active'}`} aria-current="page"> <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true"><use xlinkHref="#home"></use></svg>Create Post</a>
            </li>
            
        </ul> <hr/>
    </div>
}

export default Sidebar;