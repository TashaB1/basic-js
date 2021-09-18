import { NotImplementedError } from '../extensions/index.js';

<<<<<<< HEAD
module.exports = function createDreamTeam(members) {
  let arr = [];

  if ((Array.isArray(members))&&(members.length > 0) && arguments.length != 0){
    for (let i = 0; i < members.length; i++){
        if (typeof(members[i]) == "string") {
            arr.push((members[i].trim().substring(0, 1)).toUpperCase());
        }
    }
    return arr.sort().join('');
  }
  else{
  return false;}
};
=======
/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
>>>>>>> upstream/master
