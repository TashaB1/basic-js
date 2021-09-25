import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
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
}
