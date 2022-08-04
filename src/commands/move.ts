import { Robot } from "../robot";
import { Coordinate } from "../table";

type TypedFunc = (coordinate: Coordinate) => Coordinate

const Goto: Record<string, TypedFunc> = {
    "NORTH": function(coordinate: Coordinate): Coordinate {
        return {
            ...coordinate,
            y: coordinate.y + 1
        };
    },
    "SOUTH": function(coordinate: Coordinate): Coordinate {
        return {
            ...coordinate,
            y: coordinate.y - 1
        };
    },
    "WEST": function(coordinate: Coordinate): Coordinate {
        return {
            ...coordinate,
            x: coordinate.x - 1
        };
    },
    "EAST": function(coordinate: Coordinate): Coordinate {
        return {
            ...coordinate,
            x: coordinate.x + 1
        };
    }
}


export const move = (_: string, robot: Robot): Robot =>  {
    const { direction, coordinate } = robot;
    return {
        ...robot,
        coordinate: Goto[direction](coordinate)
    }
}