import { GoSidebarExpand } from "react-icons/go";

const Header = ({displayShowFn, setSelectedTab, loginDetails}) => {
    return <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom w-full">
                <div className="col-md-2 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <h1 className="text-info font-mono text-shadow-lg">Postogram</h1>
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto justify-content-center mb-2 mb-md-0">
                    <li onClick={() => setSelectedTab("Home")}><a href="#" className="d-none d-md-block nav-link px-2 link-info">Home</a></li>
                    <li onClick={() => setSelectedTab("CreatePost")}><a href="#" className="d-none d-md-block nav-link px-2 link-info">Create Post</a></li>
                </ul>
                <div className="col-md-4 text-end">
                    <button onClick={() => loginDetails('block')} type="button" className="btn btn-outline-info me-2">Sign In</button>
                    <button onClick={displayShowFn} type="button" className="d-md-none btn btn-info ml-3 size-10 ="><GoSidebarExpand/></button>
                </div>
            </header>
        </div>
    </>
}

export default Header;