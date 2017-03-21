import { Component } from "react"
class SendMail extends Component {
    render() {
        return (
            <div>
                <h1>send mail</h1>
                <select name="" id="">
                    <option value="">mail@qq.com</option>
                    <option value="">mail@163.com</option>
                    <option value="">mail@gmail.com</option>
                </select>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <button type="submit" >发送</button>
                </form>
            </div>
        )
    }
}
export default SendMail
