export interface ICars {
	id?: number;
	model: string;
	year: number;
	is_electric: 0 | 1;
	color: string;
}

export interface ITable {
	rows: Array<ICars>;
	columns: Array<{
		label: string;
		value: string;
	}>;
	deleteRow: (id: number) => void;
	editRow: (id: number) => void;
	handleSortField: (field: string, config: string) => void;
	setModalOpen: (open: boolean) => void;
}
