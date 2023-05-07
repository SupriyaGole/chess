# Chess Diagonals

This workshop project explores the algorithmic complexities (speed and memory) of determining which two diagonals (major and minor) on a chessboard to highlight based on which tile in the board is clicked. The spirit of the workshop is to explore the tradeoffs of various optimization strategies.

In standard chessboard terminology, the "major" diagonals go from top-left to bottom-right (aka "northwest" to "southeast"), whereas the "minor diagonals" go from top-right to bottom-left (aka "northeast" to "southwest").

Every tile belongs to exactly two such diagonals. For the 4 corner tiles, one of their diagonals has only that single corner tile in it -- but that's still considered a (albeit trivial) diagonal.