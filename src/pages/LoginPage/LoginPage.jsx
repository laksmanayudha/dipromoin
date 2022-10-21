import React from "react";
import { Form, Input, SubmitButton } from "../../components/Form";
import useInput from "../../hooks/useInput";
import "./LoginPage.css";

function LoginPage() {

    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    return (
        <div className="login-page">
            <div className="login-page-wrapper">
                <header className="login-header">
                    <h3 className="login-header__title">Please Login</h3>
                </header>
                <div className="login-body">
                    <Form>
                        <Input
                            onChangeHandler={setEmail}
                            label="Email"
                            type="email"
                            value={email}
                            placeholder="Email..."
                            name="email"
                            horizontal
                        />
                        <Input
                            onChangeHandler={setPassword}
                            label="Password"
                            type="password"
                            value={password}
                            placeholder="Password..."
                            name="password"
                            horizontal
                        />
                        <SubmitButton label="Login" />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;