import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import Header from '../../../js/layouts/app/header'
import AuthForm from '../../../js/layouts/auth/AuthForm'

const SignUp = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header AuthButtonTitle="Login" />

            <div className="flex flex-1 items-center justify-center">
                <AuthForm mode="signin" />
            </div>
        </div>
    )
}

export default SignUp;