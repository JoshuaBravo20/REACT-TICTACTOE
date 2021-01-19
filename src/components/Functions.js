export function CalculateWinner(tiles) {

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return {
                winner: tiles[a],
                line: lines[i],
                isDraw: false
            };
        }
    }

    let isDraw = true;
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] === null) {
            isDraw = false;
        }
    }

    return {
        winner: null,
        line: null,
        isDraw: isDraw
    };
}