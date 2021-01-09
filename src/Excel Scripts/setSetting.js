//Clear the contents of the entire row.
export async function setSetting(key, value) {
	return new Promise((resolve, reject) => {
		try {
			Excel.run(async (context) => {
				console.log(`Updating Excel setting for ${key}`);
				Excel.Setting(key, value);
				return context.sync();
			});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
}
