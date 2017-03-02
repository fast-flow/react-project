/**
 * Don't git commit this file
 */
module.exports = {
    // If you change begin with webpack properties
    // Run the command again `npm run js` or `npm run js:debug`
    // 如果你修改了以 webpackNoCompile 开头的文件
    // 你需要重新运行 `npm run js` 或 `npm run js:debug`
    webpackNoCompile: [
        // './view/example/**'
        // './m/**'
    ],
    webpackOnlyCompile: [
        // './view/example/**'
    ],
    webpackAlwaysCompile:[
        './view/common/**'
    ]
}
