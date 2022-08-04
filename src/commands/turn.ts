import { Robot } from "../robot"


const DIRECTIONS = ["NORTH", "EAST", "SOUTH", "WEST"]


export const turn = (command: string, robot: Robot) => {
    let index = DIRECTIONS.indexOf(robot.direction);

    if (command === 'LEFT') index--;
    if (command === 'RIGHT') index++;

    let direction = DIRECTIONS[index]

    if (index > 3) {
        direction = 'NORTH'
    }
    if (index < 0) {
        direction = 'WEST'
    }

    return {
        ...robot,
        direction
    };
}