import React from "react";
import '../../../css/components/common/HeaderButton.css';

const HeaderButton = ({ ButtonTitle = "Sign Up" }) => {
    return (
        <button className="header-button">{ButtonTitle}</button>
    );
}

export default HeaderButton;