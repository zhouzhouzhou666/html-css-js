// import * as m1 from "./hello.js";
//获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
    // 使用的时候才导入 不在开头导入
    import('./hello.js').then(module => {
        module.hello();
    });
}