import React from "react";
import useInput from "../../hooks/useInput";
import { Form, Input, SubmitButton } from "../../components/Form";
import { login } from "../../utils/dummy-data";
import "./LoginPage.css";

function LoginPage({ onLoginSuccess }) {

    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [error, setError] = useInput("");

    const submitHandler = () => {
        const { error, message, data } = login({email, password});
        if (!error) {
            onLoginSuccess(data.token);
        }else{
            setError(message);
        }
    }

    return (
        <div className="login-page">
            <div className="login-page-wrapper">
                <header className="login-header">
                    <h3 className="login-header__title">Please Login</h3>
                </header>
                <div className="login-body">
                    <Form onSubmitHandler={submitHandler}>
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
                            errorMessage={error}
                        />
                        <SubmitButton label="Login" />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;