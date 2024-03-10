import logo from "../../../assets/images/logo.png";
import "./index.css";
import isValidPhoneNumber from "../../../assets/regex-pattern/regex-phone";
import { useState } from "react";
import isValidPassword from "../../../assets/regex-pattern/regex-password";
function Login() {
  // phone
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [touch, setTouch] = useState(false);
  console.log(phone)
  const handleChange = (event) => {
    const value = event.target.value;
    setPhone(value);
    setTouch(true);
    if (value === "") {
      setIsValid(false);
    } else {
      setIsValid(isValidPhoneNumber(value));
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setTouch(true);
    setIsValid(isValidPhoneNumber(phone));
    setTouchPassword(true)
    setValidPassword(isValidPassword(password))
  };
  // password
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(false)
  const [touchPassword, setTouchPassword] = useState(false)
  const handleChangePassword = (event) =>{
    const value = event.target.value
    setPassword(value)
    setTouchPassword(true)
    if(value === ""){
      setValidPassword(false)
    }else{
      setValidPassword(isValidPassword(value))
    }
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
          <h1>Đăng nhập tài khoản của bạn</h1>
        </div>
        <div className="content">
          <form>
            <label>Số điện thoại</label>
            <br />
            <div>
              {/* input phone */}
              <input
                type="text"
                placeholder="VD: 0375684441"
                id="txtPhone"
                value={phone}
                onChange={handleChange}
              />
              {touch &&
                (isValid ? (
                  <p style={{ color: "green" }}>(*)</p>
                ) : (
                  <p style={{ color: "red" }}>(*)</p>
                ))}
            </div>
            <br />
            <br />
            <label>Mật khẩu</label>
            <br />
            <div>
              {/* input password */}
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                id="textPassword"
                value={password}
                onChange={handleChangePassword}
              />
              {touchPassword &&
                (validPassword ? (
                  <p style={{ color: "green" }}>(*)</p>
                ) : (
                  <p style={{ color: "red" }}>(*)</p>
                ))}
            </div>
            <br />
            <br />
            <div className="remember-password">
              <input type="checkbox" />
              <label>Nhớ mật khẩu</label>
              <a href="forgotpassword">Quên mật khẩu</a>
            </div>
            <br />
            {/* button submit */}
            <button type="submit" onClick={handleLogin}>
              Đăng nhập
            </button>
            <div className="text-register">
              <p>Bạn chưa có tài khoản?</p>
              <a href="register">Đăng ký</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
