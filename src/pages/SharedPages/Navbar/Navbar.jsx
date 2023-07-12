import React from 'react';

const Navbar = () => {
    return (
        <div>

            <div className="navbar  shadow-lg bg-neutral text-neutral-content ">
                <div className="px-2 mx-2 navbar-start">
                    <span className="text-lg font-bold">
                        Farhan
                    </span>
                </div>
                <div className="hidden px-2 mx-2 navbar-center lg:flex">
                    <div className="flex items-stretch">
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Projects
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;