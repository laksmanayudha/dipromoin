import React from "react";
import { Form, Input, SubmitButton } from "../../components/Form";
import useInput from "../../hooks/useInput";
import "./RegisterPage.css";

function RegisterPage() {

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [passwordConfirmation, setPasswordConfirmation] = useInput("");

    return (
        <div className="register-page">
            <div className="register-page-wrapper">
                <header className="register-header">
                    <h3 className="register-header__title">Please Register</h3>
                </header>
                <div className="register-body">
                    <Form>
                        <Input
                            onChangeHandler={setName}
                            label="Nama UMKM"
                            type="text"
                            value={name}
                            placeholder="Nama UMKM..."
                            name="name"
                            horizontal
                        />
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
                        <Input
                            onChangeHandler={setPasswordConfirmation}
                            label="Password Confirmation"
                            type="password"
                            value={passwordConfirmation}
                            placeholder="Password Confirmation..."
                            name="passwordConfirmation"
                            horizontal
                        />
                        <SubmitButton label="Register" />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;