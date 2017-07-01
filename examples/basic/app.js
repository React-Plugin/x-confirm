import React from 'react';
import ReactDOM from 'react-dom';
import Seed from '../../lib/index';
import Style from '../../lib/index.css';
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow:false };
  }
  testFunc() {
    this.setState({ isShow:true,msg:"是否确定要做这个操作呢?",title:'警告'});
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
ReactDOM.render(<App/>, appElement);
// var App = React.createClass({

//   getInitialState: function() {
//     return { show: false };
//   },

//   testFunc: function() {
//     this.setState({ show: true });
//   },

//   render: function() {
//     return (<div><button onClick={this.testFunc}>测试方法</button>{this.state.show ? <Seed/> : undefined}</div>)
//   }
// });

// ReactDOM.render(<App/>, appElement);


