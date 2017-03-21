// 通过添加收件人 + 填写邮件内容发送的示例说明 redux 的使用方法
import { Component } from "react"
import Addressee from "./addressee/app"
import SendMail from "./sendmail/app"
class App extends Component {
    render() {
        return (
            <div>
                <Addressee />
                <SendMail />
            </div>
        )
    }
}
export default App

// 1. 路由切换时有数据则使用数据，没有数据则ajax获取数据后传递到顶级
// 2. 哪些部分是局部 state （页面UI状态和临时输入） 哪些是全局 state (存储在服务器的数据)

{
    addressee: [
        {
            email: 'mail@qq.com'
        },
        {
            email: 'mail@163.com'
        }
    ]
}
