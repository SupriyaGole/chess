export default {
	draw,
	highlight
};


// ****************************
const boardEndIndex = 7;
const boardStartIndex = 0;
const highlightedClass = 'highlighted';
const addOne = (num) => num + 1;
const subtractOne = (num) => num - 1;

function draw(boardEl) {
	for (let i = 0; i < 8; i++) {
		const row = document.createElement("div");
		for (let j = 0; j < 8; j++) {
			const tile = document.createElement("div");
			tile.id = `${i},${j}`
			row.append(tile);
		}
		boardEl.append(row);
	}
}

const findTopLeftCoords = (row, column) => {
	return findDiagonalCoordinates(subtractOne, subtractOne, boardStartIndex, boardStartIndex)(row, column);
}

const findTopRightCoords = (row, column) => {
	return findDiagonalCoordinates(subtractOne, addOne, boardStartIndex, boardEndIndex)(row, column);
}

const findBottomRightCoords = (row, column) => {
	return findDiagonalCoordinates(addOne, addOne, boardEndIndex, boardEndIndex)(row, column);
}

const findBottomLeftCoords = (row, column) => {
	return findDiagonalCoordinates(addOne, subtractOne, boardEndIndex, boardStartIndex)(row, column);
}

const findDiagonalCoordinates = (rowFn, colFn, exitCondRowIndex, exitCondColumnIndex) => {
	return function findCoords(row, column){
		let coords = `${row},${column}`;
		if(row === exitCondRowIndex || column === exitCondColumnIndex) {
			return [coords];
		}
		return [coords, ...findCoords(rowFn(row), colFn(column))];
	}
}

const clearHighlights = () => {
	const highlightedTiles = document.querySelectorAll(`.${highlightedClass}`);
	highlightedTiles.forEach(tile => tile.classList.remove(highlightedClass));
}

function highlight(tileEl) {
	if(!tileEl){
		clearHighlights();
		return;
	}
	const [row, column] = tileEl.id.split(',');
	const [rowNum, columnNum] = [+row, +column];
	let topLeftCoords = findTopLeftCoords(rowNum, columnNum);
	let topRightCoords = findTopRightCoords(rowNum, columnNum);
	let bottomLeftCoords = findBottomLeftCoords(rowNum, columnNum);
	let bottomRightCoords = findBottomRightCoords(rowNum, columnNum);
	let allDiagonalCoords = [...topLeftCoords, ...topRightCoords, ...bottomLeftCoords, ...bottomRightCoords];
	return allDiagonalCoords.map((coOrd) => document.getElementById(coOrd).classList = highlightedClass);
}