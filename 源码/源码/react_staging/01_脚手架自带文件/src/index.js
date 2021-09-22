import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用来对页面性能的记录和分析
import reportWebVitals from './reportWebVitals';

// 相当于ReactDOM.render(<App/>,document.getElementById('root'));

ReactDOM.render(
  // 这里的React.StrictMode标签是用来检查App以及App里面所有的子组件的代码书写是否合理 比如字符串类型的ref
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
