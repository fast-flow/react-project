# icons

使用 http://iconfont.cn/ 维护和管理 icon,项目权限请找项目前端负责人要。

> 可以先阅读： https://github.com/thx/iconfont-plus/issues/390

## 将 iconfont 代码转化为 less

### 步骤一

获取 iconfont 代码后可通过下面任意一种方式转化为 less

**1**.获取在线链接中的代码。如： http://at.alicdn.com/t/font_yxtllcw0enpfd2t9.css 将代码粘贴到 index.less目录运行


**2**.在 iconfont.cn 平台将文件下载到 `m/icons` 目录

目录结构：

```
- edit.gif
- index.demo.less
- index.less
- README.md

- demo.css
- iconfont.css
- iconfont.ttf
- demo_fontclass.html
- iconfont.eot
- iconfont.woff
- demo_symbol.html
- iconfont.js
- demo_unicode.html
- iconfont.svg
```

### 步骤二

在终端/命令行中切换至项目根目录使用 `npm run iconfont` 将 iconfont.cn 生成的 `Font class` 代码转化为 less 代码。

````html
<div class="m-icons-example"></div>
````

<link rel="stylesheet" href="./index.demo.less">


[./index.demo.less](./index.demo.less)

## 重要说明(检查尺寸和class)

- 内边距必须有1个格子的距离 （必须）
- 不允许 Font Class 是拼音（必须）
- 图标居中 （建议）

> 如果做不到以上三点，最终图标在页面中会需要反复修改 `font-size` 和 `position` 来让多个图标对齐和大小一致

- Font Class 不允许使用大写字母
- `@icon-error: "\e601";` 当要使用单独的字符编码时 请使用对应的变量 `@icon-error`，千万不要直接使用 `"\e601"`

<img src="./edit.gif" style="width:300px;"  alt="" />
