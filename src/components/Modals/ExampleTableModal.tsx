import React, { useState } from "react";

import "./styles.scss";
import { ICars } from "../../types/table";
import { TimesIcon } from "../Icons";

interface IModal {
	closeModal: () => void;
	onSubmit: (formData: ICars) => void;
	defaultValue: false | ICars;
}

export const ExampleTableModal = (props: IModal) => {
	const { closeModal, onSubmit, defaultValue } = props;
	const [formState, setFormState] = useState<ICars>(
		defaultValue || {
			model: "",
			year: 0,
			color: "",
			is_electric: 0,
		}
	);

	const handleChange = (e: any) => {
		let value = e.target.value;
		const name = e.target.name;
    if(name === "is_electric"){
      value = parseInt(value)
    }
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		onSubmit(formState);

		closeModal();
	};

	return (
		<div
			className="modal-container"
		>
			<div className="modal">
				<div className="flex justify-between align-center">
					<h3>{defaultValue ? "Edit Car" : "Create New Car"}</h3>
					<button className="btn-icon" onClick={closeModal}>
						<TimesIcon color="#000" />
					</button>
				</div>
				<form>
					<div className="form-group">
						<input
							type="text"
							className="input"
							name="model"
							required
							onChange={handleChange}
							value={formState.model}
						/>
						<label className="label" htmlFor="model">
							Model
						</label>
					</div>
					<div className="form-group">
						<input
							type="number"
							className="input"
							name="year"
							required
							onChange={handleChange}
							value={formState.year}
						/>
						<label className="label" htmlFor="year">
							Year
						</label>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="input"
							name="color"
							required
							onChange={handleChange}
							value={formState.color}
						/>
						<label className="label" htmlFor="color">
							Color
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="is_electric" className="">Is Electric Car?</label>
						<select
							className="select"
							name="is_electric"
							onChange={handleChange}
							value={formState.is_electric}
							required
						>
							<option value={0}>No</option>
							<option value={1}>Yes</option>
						</select>
					</div>
					<button type="submit" className="btn-block" onClick={handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
