import React, { useState } from "react";

import "./styles.scss";
import { ICars } from "../../types/table";
import { ExampleTableModal } from "../../components/Modals/ExampleTableModal";
import { sortByField } from "../../utils/handleSort";
import { filterByValue } from "../../utils/filterByString";
import { debounce } from "../../utils/debounce";
import { Table } from "../../components/Table/EditableTable";

export function ExampleTable() {
	const [modalOpen, setModalOpen] = useState(false);
	const [rows, setRows] = useState<ICars[]>([
		{
			id: 1,
			model: "ferrari",
			year: 2011,
			is_electric: 0,
			color: "red",
		},
		{
			id: 2,
			model: "nissan",
			year: 2021,
			is_electric: 0,
			color: "blue",
		},
		{
			id: 3,
			model: "tesla",
			year: 2023,
			is_electric: 1,
			color: "white",
		},
		{
			id: 4,
			model: "toyota",
			year: 2018,
			is_electric: 0,
			color: "green",
		},
	]);
	const [rowToEdit, setRowToEdit] = useState<null | number>(null);
	const [searchString, setSearchString] = useState("");

	const columns = [
		{ label: "Model", value: "model" },
		{ label: "Year", value: "year" },
		{ label: "Color", value: "color" },
		{ label: "Is Electric Car", value: "is_electric" },
	];

	const handleDeleteRow = (targetIndex: number) => {
		// const rowToDelete = rows.find((_, idx) => idx === targetIndex);
		// send rowToDelete.id to server to delete row, then filter out from state.
		// Use index of item to filter in case if rows doesnt have id's
		setRows(rows.filter((_, idx) => idx !== targetIndex));
	};

	const handleEditRow = (idx: number) => {
		setRowToEdit(idx);

		setModalOpen(true);
	};

	const handleSubmit = (newRow: ICars) => {
		if (rowToEdit === null) {
			// make a call to create new row, then add new row to state.
			setRows([...rows, newRow]);
		} else {
			// make a call to edit rowToEdit, then set all rows within order
			setRows(
				rows.map((currRow, idx) => {
					if (idx !== rowToEdit) return currRow;
					return newRow;
				})
			);
		}
	};

	const handleSortField = (field: string, config: string) => {
		const sortedArr = sortByField(rows, field, config);
		setRows(sortedArr);
	};

	const handleSearchChange = (e: any) => {
		const value = e.target.value;
		setSearchString(value);
	};

	return (
		<div className="page">
			<h1 className="title">Example Editable Table</h1>
			<div className="search-wrapper">
				<div className="form-group">
					<input
						type="text"
						className="input"
						name="search"
						required
						onChange={debounce(handleSearchChange, 500)}
					/>
					<label htmlFor="search" className="label">
						Search Table..
					</label>
				</div>
			</div>
			<Table
				rows={filterByValue(rows, searchString)}
				columns={columns}
				deleteRow={handleDeleteRow}
				editRow={handleEditRow}
				handleSortField={handleSortField}
				setModalOpen={setModalOpen}
			/>
			{modalOpen && (
				<ExampleTableModal
					closeModal={() => {
						setModalOpen(false);
						setRowToEdit(null);
					}}
					onSubmit={handleSubmit}
					defaultValue={rowToEdit !== null && rows[rowToEdit]}
				/>
			)}
		</div>
	);
}
