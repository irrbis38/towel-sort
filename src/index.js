
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let result = [];
	for (let i in matrix){
		if (i % 2 != 0)
			matrix[i].reverse(); 
	}

	for (let i in matrix){
		for (let j in matrix[i]){
			result.push(matrix[i][j]);
		}
	}
	return result;
}
