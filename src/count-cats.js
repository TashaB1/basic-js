import { NotImplementedError } from '../extensions/index.js';

<<<<<<< HEAD
module.exports = function countCats(matrix) {
  var counter = 0;

  if ((Array.isArray(matrix))&&(matrix.length > 0)){
        for (let i=0; i<matrix.length; i++){
            for (let j=0; j<matrix[i].length; j++){
                if ("^^".localeCompare(matrix[i][j]) == 0) {
                    counter++;
                }
            }
        }
  }

  return counter;
};
=======
/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
>>>>>>> upstream/master
