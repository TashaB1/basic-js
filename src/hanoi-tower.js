import { NotImplementedError } from '../extensions/index.js';

<<<<<<< HEAD
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

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
};
=======
/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(/* disksNumber, turnsSpeed */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
>>>>>>> upstream/master
