export default async function checkValidDate(dt) {
	return new Promise((resolve, reject) => {
		let regex = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
		let result = regex.test(dt);
		console.log(`validation result for ${dt}: ${regex.test(dt)}`);
		resolve(regex.test(dt));
	});
}
