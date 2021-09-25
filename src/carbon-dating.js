import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


export default function dateSample(sampleActivity) {
  if (arguments.length == 0 || typeof(sampleActivity) != "string" || (!(!isNaN(parseFloat(sampleActivity)) && isFinite(sampleActivity))) || sampleActivity <= 0 || sampleActivity > 15){
      return false;
    }
    else {
         return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
    }
}
