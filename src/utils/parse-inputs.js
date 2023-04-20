// UTIL-FN 1
// "500","2","100" => [500,2,100]
export const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str));
};

// let r = parseInput('500', '2', '100', '600');
// console.log(r);

// 1,5,NaN => false
// 1,5,20 => true
