# new

## 01-概述

- 创建Fn构造函数的实例对象

## 02-代码实现

```js
export function newInstance(Fn,...args){
    // 创建一个空对象
    const obj = {}
    // 将对象和构造函数通过原型链连接起来
    obj.__proto__ = Fn.prototype
    // 将构造函数的this指向新对象
    const result = Fn.call(obj,...args)
    // 根据返回值判断返回的信息
    return result instanceof Object ? result : obj
}
```

