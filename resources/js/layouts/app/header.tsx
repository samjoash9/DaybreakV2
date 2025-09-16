import React from "react";
import HeaderButton from "../../components/common/HeaderButton";
import '../../../css/components/layout/Header.css'

const Header = ({ AuthButtonTitle = "Login" }) => {
    return (
        <header className="flex items-center h-24 justify-between px-32">
            {/* LOGO */}
            <div className="flex items-center">
                <img src='/logo.svg' alt="" className="size-14" />
                <div className="logo text-[#6c3608] text-4xl">DayBreak Cafe</div>
            </div>

            {/* NAVIGATIONS */}
            <nav className="flex gap-12 text-[#6c3608] text-2xl items-center">
                <a href="">Store</a>
                <a href="">Locations</a>
                <a href="">Contact</a>
                <a href="">About</a>

                {/* button */}
                <HeaderButton ButtonTitle={AuthButtonTitle} />
            </nav>
        </header>
    )
}

export default Header;