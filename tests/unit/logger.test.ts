import Logger from "../../src/util/logger";
import chalk from "chalk";

describe('Logger test suites', () => {

    it('should display info message',() => {
        console.log = jest.fn();
        const displayThisMessageInfo = 'Display this message info'
        Logger.info(displayThisMessageInfo)

        const message = chalk.green(displayThisMessageInfo)
        expect(console.log).toHaveBeenCalledWith(message);
    });

    it('should display success message',() => {
        console.log = jest.fn();
        const successMessage = 'Display this success message'
        Logger.success(successMessage)

        const message = chalk.black.bgGreen(successMessage)
        expect(console.log).toHaveBeenCalledWith(message);
    });


    it('should display error message',() => {
        console.log = jest.fn();
        const errorMessage = 'Display error message'
        Logger.error(errorMessage)

        const message = chalk.white.bgRed(errorMessage)
        expect(console.log).toHaveBeenCalledWith(message);
    });

})