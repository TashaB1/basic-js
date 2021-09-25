import { NotImplementedError } from '../extensions/index.js';

export default function countCats(matrix) {
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
}
