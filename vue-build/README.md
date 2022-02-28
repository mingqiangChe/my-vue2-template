# vue2从0到1搭建

## 结构

### 公众静态资料目录asserts

assets的结构如下：

```text
├── assets
    ├── css  # 样式
    ├── fonts  # 字体    
    └── images # 图片
```

主要用来放置样式、字体文件和图片等公共静态资源。其实上一个项目中也有这个目录，但是将整个项目的静态资源都往里面放了，维护起来不方便。这个项目中，asserts只存放公共的静态资源。



### 第三方插件目录static

在项目中，经常会用到一些没有npm包的第三方插件。例如这次我们是做移动端的产品，用了淘宝[自适应方案](https://link.zhihu.com/?target=https%3A//github.com/amfe/lib-flexible)，我们会将flexible.js等所有插件都放在static中管理。



### 公共方法util

可能会在多个地方调用到的公共方法，按照不同的功能归类成多个js文件，放在util中



### 指令directives

directives文件夹中包含modules文件夹，和一个统一的入口index.js，modules里是不同指令的具体逻辑，index是所有指令的入口，方便在app.js中注册。index.js的代码如下：

```text
import directive1 from '.modules/directive1';
import directive2 from '.modules/directive2';
export default {
    ...directive1,
    ...directive2
}
```



### 状态管理vuex

vuex使用的是[官方推荐的项目结构](https://link.zhihu.com/?target=https%3A//github.com/vuejs/vuex/blob/1.0/docs/zh-cn/structure.md),modules里面是各模块的js文件。



### 公共组件components

components里放置的是公共组件，每个组件有自己独立的文件夹，里面包含.vue文件和组件的images等静态资源文件夹。这样的好处是，可以在组件内部管理自己的html结构、样式和逻辑和静态资源。components的结构如下：

```text
├── components
    ├── com1  # 组件1
        ├── images   # 静态资源：图片    
        └── com1.vue # template/style/script
    ├── com2  # 组件1
        ├── images   # 静态资源：图片    
        └── com2.vue # template/style/script
```



### 路由routes

路由中包含map文件夹和入口文件index.js，map文件夹中根据模块来划分，每个模块单独一个路由配置文件，再在index.js中汇总，app.js中引入入口文件index.js就可以实现路由的注册。index.js中的代码大概如下：

```text
// 加载不同的模块
import order from './order'; // 订单
import log from './log';// 登陆
export default {
    ...order,
    ...log,
};
```



### 服务层services

在上一个项目中，没有路由层这个概念，都是在和页面的方法中直接调用后端提供的api，这个api很分散，不方便管理，后来看到[vue-demo](https://link.zhihu.com/?target=https%3A//github.com/kenberkeley/vue-demo/tree/master/src/services)对services的划分，觉得很好，就搬了过来。

services里面有个lib的文件夹，里面存放的是各种ajax类库，如jquery的ajax、vueResource等，并且对各种类库进行了统一接口的封装和错误处理，暴露给外面的是统一的ajax接口，这样很方便不同项目，不同类库之间的切换。services下面根据模块，将所有API封装成方法，返回的是promise对象，在要用的地方直接调用方法就可以了



### 页面views

views按模块划分，模块下面有页面，页面里面有静态资源和组件。上一个项目中，页面没有拆分组件，页面和组件的静态资源也都放到了asserts文件夹中。这次都放到了自身的对应文件夹下，管理起来方便了很多。结构如下:

```text
├── views
    ├──  module1  # 模块1
    │     ├── page1   # 页面   
    │          ├── components   # 页面 
               │   ├── com1
               │       ├── images // 组件1的静态资源
               │       └── com1.vue # template/style/script
               └── page1.vue # template/style/script
```

这次对项目结构重新整理后，开发的体验好了很多，也避免了多人修改同一份文件，经常覆盖的问题，也大大提高了可维护性。搞项目结构可能不需要很高深的技术，但是一个好的结构真的是项目迈向成功的一大步。







## 已实现功能

未实现

## 待实现

webpack 打包配置

```
 1 对less编译
 2 对js es6语法支持
 3 编译.vue组件，并自动内联组件样式
 4 图片打包，包括对html内图片处理（利用html-loader和es6字符串模板），对小图片生成base64
 5 利用htmlWebpackPlugin动态拼接html 的公共部分和内容部分，引入相应css/js资源，并构建到指定目录， 对ejs模板支持
 6 对js内依赖的css分离并压缩
 7 对js引用的公共模块抽取分离成单独文件
 8 区分开发环境和生产环境
 9 js 压缩
10 静态文件（css/js/img）hash版本支持
11 清除目标文件目录
12 eslint支持并实现自动修复部分问题
13 vue接口请求axios支持
14 热更新，自动编译并刷新浏览器
```







分页组件

crud

axios

router路由

vuex实现
