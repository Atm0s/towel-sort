
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let result = []
    if (!matrix) return []
	matrix.forEach((r, ir) => {
		r.forEach((c, ic) => {
			(ir % 2 === 0) ? result.push(c) : result.push(r[r.length - ic - 1])
		})
	})
	return result
}
