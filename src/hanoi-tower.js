import { NotImplementedError } from '../extensions/index.js';

export default function calculateHanoi(disksNumber, turnsSpeed) {
  let seconds = 0;
    let turns = 0;
    var obj = {};

    if (!isNaN(parseFloat(disksNumber)) && isFinite(disksNumber) && !isNaN(parseFloat(turnsSpeed)) && isFinite(turnsSpeed)) {
      turns = Math.pow(2, disksNumber)-1;
      seconds = Math.floor(turns / (turnsSpeed/60/60));
    }


    obj = {
        turns:  turns,
        seconds: seconds
    };

    return obj;
}
