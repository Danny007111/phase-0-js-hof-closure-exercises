function forEach(array, callbackF){
  array.forEach(callbackF);
}

function map(array1, callbackF1) {
  return array1.map(callbackF1);
}

function filter(array2, callbackF2) {
  return array2.filter(function (item){
    return callbackF2(item) === true;
  });
}

function every(array3, callbackF3) {
  return array3.every(callbackF3);
}

function some(array4, callbackF4) {
  return array4.some(callbackF4);
}

function majority(array5, callbackF5) {

  let trueCount = 0;
  let falseCount = 0;

  array5.forEach((item) => {
    if(callbackF5(item) === true){ 
      trueCount++;
    }else{
      falseCount++;
      }
    });

  if(trueCount > falseCount){
    return true;
  }else{
    return false;
  };

};

function once(callbackF6) {
  let i = 0;
  return function(){
    if(callbackF6 && i > 0){
      callbackF6();
      i++;
    }
  };
    
};

function groupBy(values, callbackF7) {
  let obj = {}; 
  
  values.forEach(function(item, arr){
    obj[callbackF7(item)] = item;
  });
  return obj;
}

function arrayToObject(array8, callbackF8) {
  let obj = {};
  array8.forEach(function(item){
    obj[item] = callbackF8(item);
  });
  return obj;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
