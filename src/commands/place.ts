import { Robot } from "../robot";

export const place = (command: string, _: Robot): Robot =>  {
    const coorDirection = command.split(' ')[1]
    const [newX, newY, newDirection] = coorDirection.split(',')

    return {
        coordinate: {
            x: parseInt(newX),
            y: parseInt(newY),
        },
        direction: newDirection
    }
}