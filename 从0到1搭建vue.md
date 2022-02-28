# 从0到1搭建vue

注意：重要就是工程化 方便开发

npm init 创建package.json文件

npm install ...  安装相关的依赖

webpack　　vue 　　这个应该不用多说

css-loader 　　style-loader 　　webpack识别css代码

vue-loader  　vue-template-compiler　　webpack识别vue代码　　（没有这个就和webpack打包普通的html步骤一样了）

html-webpack-plugin 　生成HTML文件的模板

webpack-dev-server　　本地服务器运行代码用的

webpack-cli　　webpack必需的依赖，不装报错（实际没用上）

## 项目文件目录

```text
build //webpack配置
  ---> webpack.config.js //配置文件
  ---> webpack.dev.js  //开发环境配置
  ---> webpack.prod.js //生产环境配置
node_modules //依赖包
  ---> 略
public
  ---> ico //图标
  ---> index.html
src
  ---> assets //公共资源
  ---> components //各种组件
  ---> router //路由
  ---> store //状态管理
  ---> views //主要页面
  ---> App //项目主组件
  ---> main.js //入口文件
babel.config.js //Es6、7转Es5
package-lock.json //记录来源及状态版本号
package.json //依赖配置文件
postcss.config.js //添加css3前缀
```









