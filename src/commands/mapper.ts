import { place } from "./place";
import { move } from "./move";
import { turn } from "./turn";
import { report } from "./report";


const CommandMapper: Record<string, any> = {
    "PLACE": place,
    "MOVE": move,
    "RIGHT": turn,
    "LEFT": turn,
    "REPORT": report
}

export default CommandMapper