/*
 自定义Vue插件 
 */

(function(window){

    const MyPlugin = {}
    // 插件对象必须要有一个install方法
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("Vue.myGlobalMethod");
        }
      
        // 2. 定义全局指令
        Vue.directive('my-directive', (el,binding)=>{
            el.textContent = binding.value + '-----'+'喜乐~'
        }
       )
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log('Vue.prototype.$myMethod');
        }
    }
    
    //暴露插件
    window.MyPlugin = MyPlugin 

})(window)