import { router } from '@inertiajs/react';
import '../../../css/components/common/HeaderButton.css';

interface HeaderButtonProps {
    ButtonTitle?: string;
}

const HeaderButton = ({ ButtonTitle = "Sign Up" }: HeaderButtonProps) => {
    const handleClick = () => {
        const path = ButtonTitle.toLowerCase() === 'sign up' ? '/register' : '/login';
        console.log(path);
        router.visit(path);
    };

    return (
        <button onClick={handleClick} className="header-button">
            {ButtonTitle}
        </button>
    );
};

export default HeaderButton;
