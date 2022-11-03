import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "..";
import { Form, Input, SubmitButton } from "../../components/Form";
import useInput from "../../hooks/useInput";
import { register } from "../../utils/dummy-data";
import "./RegisterPage.css";

function RegisterPage() {

    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [passwordConfirmation, setPasswordConfirmation] = useInput("");
    const [errors, setErrors] = React.useState({});
    const [count, setCount] = React.useState(-1);
    const navigate = useNavigate();

    const resetInput = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
    }

    const submitHandler = () => {
        const { error, data } = register({
            name,
            email,
            password,
            passwordConfirmation
        });

        if (!error) {
            setErrors({noError: true});
            resetInput();
            setCount(3);
        }else{
            setErrors({[data.type]: data.message});
        }
    }

    React.useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000)
        }

        if (count === 0) {
            navigate(routes("login"))
        }
    }, [count]);

    return (
        <div className="register-page">
            {errors.noError && 
                <p style={{  color: "var(--green-1)", marginBottom: "1em" }}>
                    Success Create an Account. Redirecting in {count} second, Please wait...
                </p>
            }
            <div className="register-page-wrapper">
                <header className="register-header">
                    <h3 className="register-header__title">Please Register</h3>
                </header>
                <div className="register-body">
                    <Form onSubmitHandler={submitHandler}>
                        <Input
                            onChangeHandler={setName}
                            label="Nama UMKM"
                            type="text"
                            value={name}
                            placeholder="Nama UMKM..."
                            name="name"
                            errorMessage={errors.name}
                            horizontal
                        />
                        <Input
                            onChangeHandler={setEmail}
                            label="Email"
                            type="email"
                            value={email}
                            placeholder="Email..."
                            name="email"
                            errorMessage={errors.email}
                            horizontal
                        />
                        <Input
                            onChangeHandler={setPassword}
                            label="Password"
                            type="password"
                            value={password}
                            placeholder="Password..."
                            name="password"
                            errorMessage={errors.password}
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
                            errorMessage={errors.passwordConfirmation}
                        />
                        <SubmitButton label="Register" />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;