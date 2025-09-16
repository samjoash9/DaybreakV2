import React from "react";
import '../../../css/components/common/AuthButton.css';

const AuthButton = ({ ButtonLabel = "Login" }) => {
    return (
        <div>
            <button className="auth-button">
                {ButtonLabel}
            </button>
        </div>
    )
}

export default AuthButton;