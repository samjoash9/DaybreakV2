import React from "react";
import '../App.css';

const Header = () => {
    return (
        <header className="flex items-center h-24 justify-between p-10">
            {/* LOGO */}
            <div className="flex">
                {/* the image */}
                <img src='/logo.svg' alt="" className="size-10" />

                {/* the logo name */}
                <div className="league-spartan logo text-[#6c3608]">Daybreak Cafe</div>
            </div>

            {/* NAVIGATIONS */}
            <nav className="flex gap-6 text-[#6c3608]">
                <a href="">Store</a>
                <a href="">Locations</a>
                <a href="">Contact</a>
                <a href="">About</a>
            </nav>
        </header>
    )
}

export default Header;