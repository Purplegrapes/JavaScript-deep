//函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
let currying = (fn, ...args) => {
  // 获取函数需要的参数长度
  if (fn.length > args.length) {
   return (...res) => {
       return currying(fn, ...args, ...res);
   };
  }
  return fn(...args);
}
let addSum = (a, b, c) => a+b+c
let add = currying(addSum)
add(1)(3)(4)

//compose(f, g)(3) => g(f(3));
const compose = (...funcs) => {
  if (funcs.length === 0) {
    return args => args;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((preFunc, func) => (...args) => func(preFunc(...args)))
}