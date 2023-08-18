export const sortByField = (arr: any[], field: string, config: string) => {
	let cloned = [...arr];
	cloned.sort((a, b) => {
		if (a[field] < b[field]) {
			return config === "asc" ? -1 : 1;
		}
		if (a[field] > b[field]) {
			return config === "asc" ? 1 : -1;
		}
		return 0;
	});
	return cloned;
};
