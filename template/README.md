# onface/react-project

[Mock server console](/fms/)

[module](./m/README.md)

## Install

- [安装 yarn](https://yarnpkg.com/zh-Hans/docs/install)
- [Install yarn](https://yarnpkg.com/en/docs/install)

```shell
# 你可以将 yarn切换 taobao 源
# yarn config set registry https://registry.npm.taobao.org
yarn global add fis3 nodemon webpack@1.13.2
```

```shell
yarn install
```

## Develop

```shell
# See compile the details: npm run dev:debug
npm run dev
# Test IE8: npm run js:debug
npm run js
# After open the browser to refresh the page
npm run s
```

## Manual

必须阅读

1. [m/centerbox/README.md](./m/centerbox/README.md)
2. [m/clear/README.md](./m/clear/README.md)
3. [m/rem/README.md](./m/rem/README.md)
4. [m/triangle/README.md](./m/triangle/README.md)
5. [m/icons/README.md](./m/icons/README.md)

### mobile use rem

如果需要使用 rem 适配移动端请 取消 `view/common/doctype.html` 中对 `m/rem/meta.js` 的注释

[onface/less-rem](https://github.com/onface/less-rem)  <a href="./m/rem/index.demo.html">m/rem/index.demo.html</a>


## Publish

```shell
npm run online
## or
npm run online:debug
npm run deploy:qiniu
npm install -g cpy
## or yarn global add cpy
npm run deploy:svn-co
npm run deploy:svn
```
