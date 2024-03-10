import logo from "../../../assets/images/logo.png";
import "./index.css";
import isValidPassword from '../../../assets/regex-pattern/regex-password' // regex-pattern password
import { useState } from "react";
function ResetPassword() {
  // password
  const [password, setPassword] = useState('') // password
  const [touchPassword, setTouchPassword] = useState(false) // hien thi thong bao
  const [validPassword, setValidPassword] = useState(false) // kiem tra regex-pattern password
  // xu ly khi thay doi password
  const handlePassword = (e) =>{
    let value = e.target.value
    setPassword(value)
    setTouchPassword(true)
    if(value === ""){
      setValidPassword(false)
    }else{
      setValidPassword(isValidPassword(value))
    }
  }
  // xu ly button
  const handleSubmit = () =>{
    setTouchPassword(true)
  }
  //
  const [rePassword, setRePassword] = useState('')
  const [touchRePassword, setTouchRePassword] = useState(false)
  const [validRePassword, setValidRePassword] = useState(false)
  // xu ly re-password
  const handleRePassword = (e) =>{
    let value = e.target.value
    setRePassword(value)
    setTouchRePassword(true)
    setValidRePassword(value === password)
  }
  return (
    <div className="content-left">
      <div className="box">
        <div className="name-app">
          <h1>App - Chat</h1>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <h1>ĐẶT LẠI MẬT KHẨU</h1>
        </div>
        <div className="content">
          <form>
            <label>Nhập mật khẩu mới</label>
            <br />
            {/* input password */}
            <input type="password" placeholder="Nhập mật khẩu mới"
              value={password}
              onChange={handlePassword}
            />
            {
              touchPassword && (
                validPassword ? <p style={{color: "green"}}>(*)</p> : <p style={{color: "red"}}>(*)</p>
              )
            }
            <br />
            <br />cd
            <label>Nhập lại mật khẩu</label>
            <br />
            {/* input re-password */}
            <input type="password" placeholder="Nhập lại mật khẩu"
              value={rePassword}
              onChange={handleRePassword}
            />
            {
              touchRePassword && (
                validRePassword ? <p style={{color: "green"}}>(*)</p> : <p style={{color: "red"}}>(*)</p>
              )
            }
            <br />
            <br />
            {/* button submit */}
            <button type="submit" onClick={handleSubmit}>Xác nhận</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
