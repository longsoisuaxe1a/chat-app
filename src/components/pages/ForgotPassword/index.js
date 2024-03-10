import logo from "../../../assets/images/logo.png";
import './index.css'
import isValidPhoneNumber from '../../../assets/regex-pattern/regex-phone' // regex-pattern phone
import {useState} from 'react'
function ForgotPassword() {
  // khai bao usestate
  const [phone, setPhone] = useState("") // set phone
  const [touch, setTouch] = useState(false) // set cho hien thong bao
  const [valid, setValid] = useState(false) // kiem tra xem hop le khong
  // xu ly phone
  console.log(phone)
  const handlePhone = (e) =>{
    const value = e.target.value
    setPhone(value)
    setTouch(true)
    if(value === ""){
      setValid(false)
    }else{
      setValid(isValidPhoneNumber(value))
    }
  }
  // xu li button
  const handleSubmit = () =>{
    setTouch(true)
    setValid(isValidPhoneNumber(phone))
  }
  return (
    <div className="container-left">
      <div className="box">
        <div className="name-app">
          <h1>App - Chat</h1>
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <h1> QUÊN MẬT KHẨU</h1>
        </div>
        <div className="content">
          <form>
            <label>Số điện thoại</label>
            <br />
            {/* input phone */}
            <input type="text" placeholder="VD: 0375684441"
              onChange={handlePhone}
            />
            {
              touch && (
                valid ? <p style={{color: "green"}}>(*)</p> : <p style={{color: "red"}}>(*)</p>
              )
            }
            <br />
            <br />
            <div className="get-otp">
              <input type="text" placeholder="Nhập OTP"/>
              <button type="submit">Lấy OTP</button>
            </div>
            {/* button submit */}
            <button type="submit" onClick={handleSubmit}>Xác nhận</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
