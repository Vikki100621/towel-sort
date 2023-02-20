
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == [] || matrix == undefined) {
    return []
  } else {
  return matrix.map ((item, index) => {  
    if (index % 2 === 0) {
        item = item 
    } else  {
     item = item.reverse();
   }
    return item;
}).flat();
}

}


