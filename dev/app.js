import React from 'react';
import ReactDOM from 'react-dom';
import Confirm from '../src/index';
import Style from '../src/_index';

var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow:false };
  }
  testFunc() {
    this.setState({ isShow:true,msg:"是否确定要做这个操作呢?",title:'警告',okCallback:()=>{
      alert('确定');
    },cancelCallback:()=>{
      alert('取消');
    }});
  }
  render() {
    return (
      <div>
        <button onClick={this.testFunc.bind(this)}>弹出confirm</button>
       <Confirm {...this.state}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);