# instanceof

## 01-概述

- 语法：myInstanceof(obj,Type)
- 功能：判断obj是否是Type类型的实例
- 实现：Type的原型对象是否是obj原型链上的某个对象

## 02-代码实现

```js
export function myInstanceOf(obj, Type){
    let protoObj = obj.__proto__
    while(protoObj){
        if(protoObj == Type.prototype){
            return true
        }
        protoObj = protoObj.___proto__
    }
    return false
}
```

