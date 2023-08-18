import React, { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";

export function Login() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const onSubmit = (username: string, password: string) => {
		console.log(username, password, "username and password to make fetch request");
		setLoading(true);
		// in real project, instead of set timeouot I would use fetch or axios to make request. I only wanted to demonstrate.
		setTimeout(() => {
			setLoading(false);
			navigate("/example-table");
		}, 3000);
	};
	return (
		<div className="page container">
			<div className="login-wrapper">
				<h2>LOGIN</h2>
                {/* login form can be called within any other page with different API maybe */}
				<LoginForm onSubmit={onSubmit} loading={loading} />
				<span className="footer"></span>
			</div>
		</div>
	);
}
