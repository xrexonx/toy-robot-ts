import { validateCommand } from "../../src/commands/validator";
import chalk from "chalk";
import {place} from "../../src/commands/place";
import {Robot} from "../../src/robot";
import {Table} from "../../src/table";
import {move} from "../../src/commands/move";
import {turn} from "../../src/commands/turn";


describe('Commands test suites', () => {

    let robot: Robot;
    let table: Table;

    beforeAll(async () => {
        robot = {
            coordinate: {
                x:0,
                y:0
            },
            direction: ''
        }

        table = {
            maxX: 5,
            maxY: 5,
        }
    })


    describe('Validate command', () => {

        const initial = 0

        it('should return true if given place command is valid', () => {
            const valid = validateCommand(initial, "PLACE 2,2,NORTH")
            expect(valid).toEqual(true)
        });

        it('should return false if given place command is not valid', () => {
            const valid = validateCommand(initial, "MOVE 2,2,NORTH")
            expect(valid).toEqual(false)
        });

        it('should display First command should be place when user input invalid first command', () => {
            console.log = jest.fn();
            validateCommand(0, "MOVE")
            const message = chalk.white.bgRed('First command should be place')
            expect(console.log).toHaveBeenCalledWith(message);
        });

        it('should display Invalid Command when user input invalid command on succeeding commands', () => {
            console.log = jest.fn();
            validateCommand(2, "FLY")
            const message = chalk.white.bgRed('Invalid Command')
            expect(console.log).toHaveBeenCalledWith(message);
        });

    })


    it('should place the robot to the given values from command',() => {

        const newRobot = place("PLACE 3,3,NORTH", robot)

        expect(newRobot.coordinate.x).toEqual(3)
        expect(newRobot.coordinate.y).toEqual(3)
        expect(newRobot.direction).toEqual('NORTH')

    });

    it('should move the robot facing NORTH', () => {
        robot = place("PLACE 0,0,NORTH", robot)
        robot = move("", robot)
        expect(robot.coordinate.x).toEqual(0)
        expect(robot.coordinate.y).toEqual(1)
        expect(robot.direction).toEqual('NORTH')
    });


    it('should move the robot facing EAST', () => {
        robot = place("PLACE 0,0,EAST", robot)
        robot = move("", robot)
        expect(robot.coordinate.x).toEqual(1)
        expect(robot.coordinate.y).toEqual(0)
        expect(robot.direction).toEqual('EAST')
    });

    it('should move the robot facing WEST', () => {
        robot = place("PLACE 3,3,WEST", robot)
        robot = move("", robot)
        expect(robot.coordinate.x).toEqual(2)
        expect(robot.coordinate.y).toEqual(3)
        expect(robot.direction).toEqual('WEST')
    });

    it('should move the robot facing SOUTH', () => {
        robot = place("PLACE 3,3,SOUTH", robot)
        robot = move("", robot)
        expect(robot.coordinate.x).toEqual(3)
        expect(robot.coordinate.y).toEqual(2)
        expect(robot.direction).toEqual('SOUTH')
    });


    describe('Command LEFT', () => {
        it('should change direction from NORTH to WEST when adding a command LEFT', () => {
            robot.direction = 'NORTH'
            robot = turn("LEFT", robot)
            expect(robot.direction).toEqual('WEST')
        });

        it('should change direction from WEST to SOUTH when adding a command LEFT', () => {
            robot.direction = 'WEST'
            robot = turn("LEFT", robot)
            expect(robot.direction).toEqual('SOUTH')
        });

        it('should change direction from SOUTH to EAST when adding a command LEFT', () => {
            robot.direction = 'SOUTH'
            robot = turn("LEFT", robot)
            expect(robot.direction).toEqual('EAST')
        });

        it('should change direction from EAST to NORTH when adding a command LEFT', () => {
            robot.direction = 'EAST'
            robot = turn("LEFT", robot)
            expect(robot.direction).toEqual('NORTH')
        });
    })

    describe('Command RIGHT', () => {
        it('should change direction from NORTH to EAST when adding a command RIGHT', () => {
            robot.direction = 'NORTH'
            robot = turn("RIGHT", robot)
            expect(robot.direction).toEqual('EAST')
        });

        it('should change direction from WEST to NORTH when adding a command RIGHT', () => {
            robot.direction = 'WEST'
            robot = turn("RIGHT", robot)
            expect(robot.direction).toEqual('NORTH')
        });

        it('should change direction from SOUTH to WEST when adding a command RIGHT', () => {
            robot.direction = 'SOUTH'
            robot = turn("RIGHT", robot)
            expect(robot.direction).toEqual('WEST')
        });

        it('should change direction from EAST to SOUTH when adding a command RIGHT', () => {
            robot.direction = 'EAST'
            robot = turn("RIGHT", robot)
            expect(robot.direction).toEqual('SOUTH')
        });
    })


})