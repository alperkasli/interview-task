export const WarningIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 14a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"
				fill="#eb4f4f"
			/>
			<path
				d="M10.23 3.216c.75-1.425 2.79-1.425 3.54 0l8.343 15.852C22.814 20.4 21.85 22 20.343 22H3.657c-1.505 0-2.47-1.6-1.77-2.931L10.23 3.216zM20.344 20L12 4.147 3.656 20h16.688z"
				fill="#eb4f4f"
			/>
		</svg>
	);
};

export const CheckIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				d="m5 12 5 5 9-9"
				style={{
					fill: "none",
					stroke: "#04ff00",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 2,
				}}
			/>
		</svg>
	);
};
export const TimesIcon = ({ size = 36, color = "#eb4f4f", ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill={color}
				d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"
			/>
		</svg>
	);
};

export const SortIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			{...props}
		>
			<path d="M16.29 14.29 12 18.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0-1.42-1.42ZM7.71 9.71 12 5.41l4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-5-5a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 1.42 1.42Z" />
		</svg>
	);
};

export const DeleteIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="#eb4f4f"
				d="M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4V4zm2 2h6V4H9v2zM6.074 8l.857 12H17.07l.857-12H6.074zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z"
			/>
		</svg>
	);
};

export const EditIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="#f6da39"
				d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83ZM8 13.17l5.93-5.93 2.83 2.83L10.83 16H8Z"
			/>
		</svg>
	);
};
export const PlusIcon = ({ size = 36, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			className="icon line-color"
			data-name="Line Color"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				d="M5 12h14m-7-7v14"
				style={{
					fill: "none",
					stroke: "#04ff00",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					strokeWidth: 2,
				}}
			/>
		</svg>
	);
};
