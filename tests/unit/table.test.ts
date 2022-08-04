import { Robot } from "../../src/robot";
import { Table, validCoordinate } from "../../src/table";
import chalk from "chalk";

describe('Table test suites', () => {

    let robot: Robot;
    let table: Table;

    beforeAll(async () => {
        robot = {
            coordinate: {
                x: 0,
                y: 0
            },
            direction: ''
        }

        table = {
            maxX: 5,
            maxY: 5,
        }
    })


    it('should initialize table with default values',() => {
        expect(table.maxX).toEqual(5)
        expect(table.maxY).toEqual(5)
    })

    describe('validate coordinate', () => {

        it('should return true when given coordinate is valid',() => {
            robot.coordinate.x = 2
            robot.coordinate.y = 4
            const valid = validCoordinate(robot.coordinate, table)
            expect(valid).toEqual(true)
        })

        it('should return false when given coordinate is not valid',() => {

            robot.coordinate.x = 7
            robot.coordinate.y = 19
            const valid = validCoordinate(robot.coordinate, table)
            expect(valid).toEqual(false)
        })

        // it('should Invalid coordinates message',() => {
        //     console.log = jest.fn();
        //     robot.coordinate.x = 7
        //     robot.coordinate.y = 19
        //     const valid = validCoordinate(robot.coordinate, table)
        //     if (!valid) {
        //         const message = chalk.white.bgRed('Invalid coordinates, this will make the robot fall')
        //         expect(console.log).toHaveBeenCalledWith(message);
        //     }
        // })
    })


})