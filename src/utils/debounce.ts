export function debounce(callback: any, delay: number, immediate = false) {
	let timerId: any;
	return function (...args: any) {
		clearTimeout(timerId);

		const shouldCallImmediate = timerId == null && immediate;
		if (shouldCallImmediate) {
			// @ts-ignore
			callback.apply(this, args);
		}

		timerId = setTimeout(() => {
			if (!immediate) {
				// @ts-ignore
				callback.apply(this, args);
			}
			timerId = null;
		}, delay);
	};
}
