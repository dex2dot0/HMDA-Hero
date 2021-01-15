export async function setSetting(key, value) {
	return new Promise((resolve, reject) => {
		try {
			Excel.run(async (context) => {
				console.log(`Updating Excel setting for ${key}`);
				Office.context.document.settings.set(key, value);
				return context.sync().then(async function () {
					Office.context.document.settings.saveAsync(function (asyncResult) {
						console.log('Settings saved with status: ' + asyncResult.status);
					});
				});
			});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
}
