
export interface Table {
    maxX: number
    maxY: number
}


export interface Coordinate {
    x: number
    y: number
}

export const validCoordinate = (coordinate: Coordinate, table: Table) => {
    return coordinate.x < table.maxX &&
        coordinate.y < table.maxY &&
        coordinate.x >= 0 &&
        coordinate.y >= 0
}
