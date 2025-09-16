import React from 'react';
import AuthInput from '../../../js/components/common/AuthInput';
import AuthButton from '../../../js/components/common/AuthButton';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";
import { Link } from '@inertiajs/react';

export default function AuthForm({ mode = "login" }) {
    const loginForm = () => (
        <>
            {/* Username Field */}
            <AuthInput
                placeholder="Username"
                icon={<FaUser />}
            />

            {/* Password Field */}
            <AuthInput
                type="password"
                placeholder="Password"
                icon={<FaLock />}
            />

            {/* Login Button */}
            <div className="w-full mt-2">
                <AuthButton ButtonLabel='Login' />
            </div>

            {/* Bottom Links */}
            <div className="flex justify-between w-full mt-4 text-lg font-semibold">
                <Link href="/register" className="text-black hover:underline">
                    Create an Account
                </Link>
                <button className="text-black hover:underline">
                    Need Help?
                </button>
            </div>
        </>
    );

    const signUpForm = () => (
        <>
            {/* Username Field */}
            <AuthInput
                placeholder="Username"
                icon={<FaUser />}
            />

            {/* email field */}
            <AuthInput
                placeholder="Email"
                icon={< MdEmail />}
            />

            {/* Password Field */}
            <AuthInput
                type="password"
                placeholder="Password"
                icon={<FaLock />}
            />

            <AuthInput
                type='password'
                placeholder='Confirm Password'
                icon={<GiHouseKeys />}
            />

            {/* Login Button */}
            <div className="w-full mt-2">
                <AuthButton ButtonLabel='Sign In' />
            </div>

            {/* Bottom Links */}
            <div className="flex justify-between w-full mt-4 text-lg font-semibold">
                <Link href="/login" className="text-black hover:underline">
                    Already have account?
                </Link>
                <button className="text-black hover:underline">
                    Need Help?
                </button>
            </div>
        </>
    );

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto">
            {mode === "login" ? loginForm() : signUpForm()}
        </div>
    );
}
