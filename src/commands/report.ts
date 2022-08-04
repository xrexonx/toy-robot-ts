import Logger from "../util/logger";
import { Robot } from "../robot";

export const report = (_: string, robot :Robot): Robot => {
    Logger.success(`\nOutput: ${robot.coordinate.x}, ${robot.coordinate.y}, ${robot.direction}\n`);
    return robot
}