import logo from "../../../assets/images/logo.png";
import "./index.css";
import isValidPhone from '../../../assets/regex-pattern/regex-phone'
import isValidPassword from '../../../assets/regex-pattern/regex-password'
import {useState} from 'react'
function Register() {
  // phone
  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(false)
  const [toutchPhone, setTouchPhone] = useState(false)
  const handlePhone = (e) => {
    let value = e.target.value;
    setPhone(value)
    setTouchPhone(true)
    if(value === ""){
      setValidPhone(false)
    }else{
      setValidPhone(isValidPhone(value))
    }
  }
  // password
  const [password, setPassword] = useState('')
  const [validPassword, setValidPasswor] = useState(false)
  const [touchPassword, settouchPassword] = useState(false)
  const handlePassword = (e) => {
    let value = e.target.value
    setPassword(value)
    settouchPassword(true)
    if(value === ""){
      setValidPasswor(false)
    }else{
      setValidPasswor(isValidPassword(value))
    }
  }
  // button
  const handleSubmit = () =>{
    setTouchPhone(true)
    settouchPassword(true)
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
          <h1>ĐĂNG KÝ</h1>
        </div>
        <div className="content">
          <form>
            <label>Số điện thoại</label>
            <br />
            {/* input phone */}
            <input type="text" placeholder="VD: 0375684441"
              value={phone}
              onChange={handlePhone}
            />
            {
              toutchPhone && (
                validPhone ? <p style={{color: "green"}}>(*)</p> : <p style={{color: "red"}}>(*)</p>
              )
            }
            <br />
            <br />
            <label>Mật khẩu</label>
            <br />
            {/* input password */}
            <input type="password" placeholder="Nhập mật khẩu"
              value={password}
              onChange={handlePassword}
            />
            {
              touchPassword && (
                validPassword ? <p style={{color: "green"}}>(*)</p> : <p style={{color: "red"}}>(*)</p>
              )
            }
            <br />
            <br />
            <label>Nhập OTP</label>
            <br/>
            <div className="get-otp">
              <input type="text" placeholder="Nhập OTP"/>
              <button type="submit">Lấy OTP</button>
            </div>
            <br/>
            {/* button submit */}
            <button type="submit" onClick={handleSubmit}>Xác nhận</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
