import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import Header from "../../../js/layouts/app/header";
import AuthForm from "../../../js/layouts/auth/AuthForm";

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

const Login = () => {

    return (
        <div className="min-h-screen flex flex-col">
            <Header AuthButtonTitle="Sign up" />

            <div className="flex flex-1 items-center justify-center">
                <AuthForm mode="login" />
            </div>
        </div>
    )
}

export default Login;