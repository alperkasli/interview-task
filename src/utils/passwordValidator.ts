export const validatePassword = (password: string) => {
	const uppercaseRegExp = /(?=.*?[A-Z])/;
	const lowercaseRegExp = /(?=.*?[a-z])/;
	const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
	const minLengthRegExp = /.{8,}/;

	const errorList: string[] = [];

	if (!password.match(uppercaseRegExp)) {
		errorList.push("Password should contain atleast one uppercase letter.");
	}
	if (!password.match(lowercaseRegExp)) {
		errorList.push("Password should contain atleast one lowercase letter.");
	}
	if (!password.match(specialCharRegExp)) {
		errorList.push("Password should contain atleast one special character.");
	}
	if (!password.match(minLengthRegExp)) {
		errorList.push("Password can be minimum 8 characters.");
	}
	return errorList;
};
