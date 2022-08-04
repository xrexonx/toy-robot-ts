import Logger from "../util/logger";

const PLACE_PATTERN = /^PLACE\s+\d+,\d+,(NORTH|EAST|SOUTH|WEST)$/
const VALID_COMMANDS = /^PLACE\s+\d+,\d+,(NORTH|EAST|SOUTH|WEST)$|MOVE|LEFT|RIGHT|REPORT/


function notValidCommand(command: string) {
    return !VALID_COMMANDS.test(command);
}

function notValidFirstCommand(command: string) {
    return !PLACE_PATTERN.test(command);
}

export const validateCommand = (initialValue: number, command: string): boolean => {
    let isValid = true;

    // validate first command
    if (initialValue === 0 && notValidFirstCommand(command)) {
        Logger.error('First command should be place')
        isValid = false
    }

    // validate command
    if (notValidCommand(command)) {
        Logger.error('Invalid Command')
        isValid = false
    }


    return isValid;
}