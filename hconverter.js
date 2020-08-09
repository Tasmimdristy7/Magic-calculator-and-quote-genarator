var toKG = function (weight) {
	return (weight * 0.45359237).toFixed(4);
}

var toPound = function (weight) {
	return (weight / 0.45359237).toFixed(4);
}
document.getElementById('go').addEventListener('click', (e) => {
	const value = document.getElementById('convert').value;
	var result = null;
	if (value != '') {
		var val = document.getElementById('option');
		var option = val.options[val.selectedIndex].text

		switch (option) {
			case 'kg to lb':
				result = toPound(value)
				document.getElementById('result').textContent = result;
				break;
			default:
				result = toKG(value)
				document.getElementById('result').textContent = result;
				break;
		}
	}

})