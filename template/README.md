# fast-flow/react-project

[Mock server console](/fms/)

[module](./m/README.md)

## Install

```shell
npm i -g fis3 --registry=https://registry.npm.taobao.org
npm i -g nodemon --registry=https://registry.npm.taobao.org
npm i -g webpack --registry=https://registry.npm.taobao.org
```

```shell
npm install
# Suggested Use: yarn
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

[fast-flow/lessrem](https://github.com/fast-flow/lessrem)  <a href="./m/rem/index.demo.html">m/rem/index.demo.html</a>


## Publish

```shell
npm run release
# Don't uglify: npm run release:debug
npm run dp
```
