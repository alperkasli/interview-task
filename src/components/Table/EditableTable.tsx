import { ITable } from "../../types/table";
import { SortableTableHead } from "./SortableTableHead";
import { CheckIcon, DeleteIcon, EditIcon, PlusIcon, TimesIcon } from "../Icons";

export const Table = (props: ITable) => {
	const { rows, columns, deleteRow, editRow, handleSortField, setModalOpen } = props;

	return (
		<div className="table-wrapper">
			<table className="data-table">
				<thead>
					<tr>
						{columns.map((col) => (
							<SortableTableHead key={col.value} column={col} handleSortField={handleSortField} />
						))}
						<th>
							<span className="flex justify-between align-center">
								Actions
								<button onClick={() => setModalOpen(true)} className="btn-icon badge">
									<span className="flex justify-center align-center">
										<PlusIcon size={24} /> ADD NEW
									</span>
								</button>
							</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, idx) => {
						return (
							<tr key={idx}>
								<td>{row.model}</td>
								<td>{row.year}</td>
								<td>{row.color}</td>
								<td>{row.is_electric === 1 ? <CheckIcon /> : <TimesIcon />}</td>
								<td>
									<span className="actions">
										<button className="btn-icon">
											<EditIcon onClick={() => editRow(idx)} />
										</button>
										<button className="btn-icon">
											<DeleteIcon onClick={() => deleteRow(idx)} />
										</button>
									</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
