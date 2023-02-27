# 改变this指向

## 01-call

- 执行fn，给fn绑定this为obj，并将后面的n个参数传给fn

- ```js
  export function call(fn,obj,...args){
      if(obj === undefined || obj == null){
          obj = window
      }
      
      obj.tempFn = fn
      const result = obj.tempFn(...args)
      delete obj.tempFn
      
      return result
  }
  ```

## 02-apply

- 执行fn，给fn绑定this为obj，并将args数组中的元素传给fn

- ```js
  export function apply(fn,obj,args){
      if(obj === undefined || obj == null){
          obj = window
      }
      
      obj.tempFn = fn
      const result = obj.tempFn(...args)
      delete obj.tempFn
      
      return result
  }
  ```

## 03-bind

- 给fn绑定this为obj，并将后面的n个参数传给fn，返回一个新函数

- ```js
  export function bind(fn,obj,...args){
      if(obj === undefined || obj == null){
          obj = window
      }
      
      return function(){
          obj.tempFn = fn
          const result = obj.tempFn(...args)
          delete obj.tempFn
          
          return result
      }
  }
  ```

  