import { NotImplementedError } from '../extensions/index.js';

export default function repeater(str, options) {
  let additionSeparator, separator = '';
    let add = '';

    if (arguments.length != 0){

      if ("addition" in options) {
          if ("additionRepeatTimes" in options){
              if (Number.isInteger(options["additionRepeatTimes"])) {
                  if ("additionSeparator" in options) {
                     additionSeparator = options["additionSeparator"];
                  }
                  else{
                      additionSeparator = '|';
                  }

                  add = String(options["addition"]) + (additionSeparator + String(options["addition"])).repeat(options["additionRepeatTimes"]-1);
              }
          }
          else {
              add = String(options["addition"]);
          }
      }

      if ("repeatTimes" in options) {

          if (Number.isInteger(options["repeatTimes"])){
              if ("separator" in options) {
                  separator = options["separator"];
              }
              else{
                  separator = '+';
              }

              return String(str) + add + (separator + String(str) + add).repeat(options["repeatTimes"]-1);
          }
      }
      else {
          return String(str) + add;
      }
    }
    else{
    return false;
    }
}
