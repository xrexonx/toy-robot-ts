import Logger from "./util/logger";
import CommandMapper from './commands/mapper'
import { validateCommand } from './commands/validator'
import { Coordinate, Table, validCoordinate } from "./table";


export interface Robot {
    coordinate: Coordinate,
    direction: string
}

function runRobot() {


    Logger.success('Welcome toy robot, Start adding valid commands or ctrl C to exit!')

    let round: number = 0;

    // Robot initial values
    let robot: Robot = {
        coordinate: {
            x: 0,
            y: 0
        },
        direction: ''
    }

    // Table initial values
    const table: Table = {
        maxX: 5,
        maxY: 5
    }


    process.openStdin().addListener('data', (input: string) => {

        const command = input.toString().trim()

        let isValid = validateCommand(round, command);
        if (isValid) {

            const parsedCommand = command.includes('PLACE') ? 'PLACE' : command
            const newRobot = CommandMapper[parsedCommand](command, robot)
            if (validCoordinate(newRobot.coordinate, table)) {
                // Set new values
                robot = newRobot
            } else {
                Logger.error("Invalid coordinates, this will make the robot fall")
                if (round === 0) {
                    isValid = false;
                }
            }


            if (isValid) {
                round++;
            }
        }
    });
}


runRobot();