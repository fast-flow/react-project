import { Component } from "react"
class Addressee extends Component {
    render() {
        return (
            <div>
                <h1>addressee</h1>
                <ul>
                    <li>mail@qq.com <button>x</button></li>
                    <li>mail@163.com <button>x</button></li>
                    <li>mail@gmail.com <button>x</button></li>
                </ul>
                <form action="">
                    <input type="text" placeholder="请输入邮箱" />
                    <button type="submit" >添加</button>
                </form>
            </div>
        )
    }
}
export default Addressee
