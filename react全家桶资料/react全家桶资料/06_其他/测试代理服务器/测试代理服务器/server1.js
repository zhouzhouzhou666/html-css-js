// 服务器相关代码

const express = require('express')
const app = express()

app.use((request,response,next)=>{
	// 只要有人请求了服务区1就会打印下列话
	console.log('有人请求服务器1了');
	console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

// 后端配置的路由
app.get('/students',(request,response)=>{
	const students = [
		{id:'001',name:'tom',age:18},
		{id:'002',name:'jerry',age:19},
		{id:'003',name:'tony',age:120},
	]
	// 将数据提交出去
	response.send(students)
})

// 启动服务器的代码
app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})

// 开启服务器代码 node server1.js
