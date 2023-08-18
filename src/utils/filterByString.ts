export function filterByValue(array: any[], keyword: string) {
	if (keyword === "") return array;
	return array.filter((item) =>
		Object.keys(item).some((key) => {
			return item[key].toString().toLowerCase().includes(keyword.toLowerCase());
		})
	);
}
