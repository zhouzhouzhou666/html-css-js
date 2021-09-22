//入口文件

//模块引入
import * as m1 from "./m1.js";
import * as m2 from "./m2.js";
import * as m3 from "./m3.js";

// console.log(m1);
// console.log(m2);
// console.log(m3);

// 修改代码后需要重新打包转换才能看到结果
// m1.teach();
// m2.findJob();
// m3.default.change();

//通过jquery修改背景颜色为粉色 
import $ from 'jquery'; // const $ = require("jquery");
// 需要重新打包才能看到结果
$('body').css('background', 'pink');