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

You must read `m/centerbox/README.md` `m/clear/README.md` `m/rem/README.md` `m/triangle/README.md`

### mobile use rem

[fast-flow/lessrem](https://github.com/fast-flow/lessrem)  <a href="./m/rem/index.demo.html">m/rem/index.demo.html</a>


## Publish

```shell
npm run release
# Don't uglify: npm run release:debug
npm run dp
```
