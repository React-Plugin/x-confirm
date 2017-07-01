/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-Plugin/x-confirm
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Dialog from "x-dialog";

export default class Confirm extends Component {
  static propTypes = {
    msg: PropTypes.string,
    isShow: PropTypes.bool,
    title: PropTypes.node,
    className: PropTypes.string,
    buttons: PropTypes.node,
    closeIcon: PropTypes.string
  };
  static defaultProps = {
    title: undefined,
    okCallback: () => {},
    cancelCallback: () => {},
    closeIcon: "",
    className: ""
  };
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.isShow && !this.state.isShow) {
      this.setState({ isShow: true });
    } else if (!newProps.isShow && this.state.isShow) {
      this.setState({ isShow: false });
    }
  }
  okCallback() {
    this.props.okCallback();
    this.setState({ isShow: false });
  }
  cancelCallback() {
    this.props.cancelCallback();
    this.setState({ isShow: false });
  }
  render() {
    this.buttons = (
      <div>
        <button className="d-ok" onClick={this.okCallback.bind(this)}>
          {this.props.btnOkText || "确定"}
        </button>
        <button className="d-cancel" onClick={this.cancelCallback.bind(this)}>
          {this.props.btnCancelText || "取消"}
        </button>
      </div>
    );
    this.title = this.props.title;
    return (
      <Dialog
        {...this.props}
        title={this.title}
        timer={this.timer}
        className={"confirm " + this.props.className}
        isShow={this.state.isShow}
        buttons={this.buttons}
        closeIcon={this.props.closeIcon}
      >
        {this.props.msg}
      </Dialog>
    );
  }
}
