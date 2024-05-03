import testdatamodule from "./testdatamodule";
export {testdatamodule}

const indobj= new testdatamodule(20)
// console.log(indobj);
const sma= indobj.getSMAForPeriod(10)
console.log(sma);
console.log(sma.length);
console.log(sma.slice(0,10));
console.log(sma[0]);