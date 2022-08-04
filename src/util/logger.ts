import chalk from 'chalk'


const Logger = {
    info: (message: string) => {
        console.log(chalk.green(message));
    },
    success: (message: string) => {
        console.log(chalk.black.bgGreen(message));
    },
    error: (message: string) => {
        console.log(chalk.white.bgRed(message));
    }
}

export default Logger