import React, { useState } from "react";
import { Spinner } from "../../components/Spinner/Spinner";
import "./styles.scss";
import { validatePassword } from "../../utils/passwordValidator";
import { WarningIcon } from "../../components/Icons";

interface ILoginFrom {
	onSubmit: (username: string, password: string) => void;
	loading: boolean;
}

export function LoginForm(props: ILoginFrom) {
	const { onSubmit, loading } = props;
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const passwordValidationErrors = validatePassword(formData.password);
		if (passwordValidationErrors.length === 0) {
			setPasswordErrors([]);
			onSubmit(formData.username, formData.password);
		} else {
			setPasswordErrors(passwordValidationErrors);
		}
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<div className="form-group">
				<input type="text" className="input" name="username" required onChange={handleChange} />
				<label htmlFor="username" className="label">
					Username
				</label>
			</div>
			<div className="form-group">
				<input
					type="password"
					className="input"
					name="password"
					required
					onChange={handleChange}
				/>
				<label htmlFor="password" className="label">
					Password
				</label>
			</div>
			{passwordErrors.length > 0 && (
				<>
					<div className="icon-container">
						<WarningIcon className="align-center" />
					</div>
					<ul className="password-error-list">
						{passwordErrors.map((passErr, idx) => (
							<li key={idx}>{passErr}</li>
						))}
					</ul>
				</>
			)}
			<button type="submit" className="btn-block" disabled={loading}>
				{!loading ? "LOGIN" : <Spinner />}
			</button>
			<div className="flex justify-between">
				<label>
					<input type="checkbox" name="remember-me" /> Remember me
				</label>
				<a className="link" href="/">
					Forgot your password
				</a>
			</div>
		</form>
	);
}
