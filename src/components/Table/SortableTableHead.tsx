import React, { useState } from 'react'
import { SortIcon } from '../Icons';


interface ISortableTableHead {
	column: { value: string; label: string };
	handleSortField: (field: string, sortConfig: string) => void;
}

export const SortableTableHead = (props: ISortableTableHead) => {
	const { column, handleSortField } = props;
	const [sortConfig, setSortConfig] = useState("asc");
	const toggleSort = () => {
		setSortConfig((prev) => (prev === "asc" ? "desc" : "asc"));
		handleSortField(column.value, sortConfig);
	};
	return (
		<th key={column.value}>
			<span className="flex justify-between align-center">
				{column.label}
				<button className="btn-icon" onClick={toggleSort}>
					<SortIcon size={24} />
				</button>
			</span>
		</th>
	);
};