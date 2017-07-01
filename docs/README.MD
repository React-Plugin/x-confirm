# x-confirm
react confirm component

confirm是一个提示确认的插件，它扩展至[x-dialog](https://react-plugin.github.io/x-dialog/),与[x-dialog](https://react-plugin.github.io/x-dialog/)和[x-alert](https://react-plugin.github.io/x-alert/)不同的是，它的调用更简单，样式更固定 ，并默认提供了'确定'和'取消'两种操作。

演示地址： [x-confirm各种案例演示](https://react-plugin.github.io/x-confirm/)

源文件地址：[https://github.com/react-plugin/x-confirm](https://github.com/react-plugin/x-confirm)

## npm安装 

使用 [npm](https://www.npmjs.com/package/x-alert) 安装, 运行

```bash
$ npm install x-alert --save
```
## 调用方式
```js
<Alert isShow={true}>我只是一个x-alert的提示</Alert>
```
由于`x-alert`是从`x-dialog`扩展出来的一个提示插件，所以大多数`x-dialog`的属性方法都是可以通用的,这里有[x-dialog](https://github.com/react-plugin/x-alert)的详细说明.
## 属性方法
### `isShow` :bool类型
    控制弹窗的显示隐藏的.
### `msg`:string类型
    消息提示内容
### `title`:string类型
    为空时，不显示标题.
### `className`:string类型
    弹窗的样式类
### `btnOkText`:string类型
    确定按钮上的文字 
### `btnCancelText`:string类型
    取消按钮上的文字 
### `okCallback`:func类型
    当默认按钮的情况下时，点击`确定`时的回调方法。
### `cancelCallback`:func类型
    当默认按钮的情况下时，点击`确定`时的回调方法。
### `afterShow`:func类型
    显示的回调方法
### `afterHide`:func类型
    关闭隐藏时的回调方法

### 关于作者
[https://github.com/tianxiangbing](https://github.com/tianxiangbing)

### 友情链接

[react中国](http://www.react-cn.com/)