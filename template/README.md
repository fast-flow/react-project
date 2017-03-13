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

### mobile use rem

[fast-flow/lessrem](https://github.com/fast-flow/lessrem)  <a href="./m/rem/index.demo.html">m/rem/index.demo.html</a>

### base/mixins.less

#### CLEAR


use `.CLEAR`

**bad**:

```html
<div class="clearify m-tab" >
    <span class="m-tab-item">1</span>
    <span class="m-tab-item">2</span>
    <span class="m-tab-item">3</span>
</div>
```

**good**:  

```less
@import "../../base/mixins.less";
.m-tab {
    .CLEAR;
}
```

```html
<div class="m-tab" >
    <span class="m-tab-item">1</span>
    <span class="m-tab-item">2</span>
    <span class="m-tab-item">3</span>
</div>
```

#### CENTERBOX

[./view/example/index.less](./view/example/index.less)

> You need use `.CENTERBOX`  mixins style

```less
// bad
.m-head {
    width:1000px;
    margin-left:auto;
    margin-right:auto;
}
```

```less
// good
@import "../../base/mixins.less";
.m-head {
    .CENTERBOX;
}
```

## Publish

```shell
npm run release
# Don't uglify: npm run release:debug
npm run dp
```
