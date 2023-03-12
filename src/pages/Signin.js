import React from "react" ;
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Signin (props) {
    const navigate = useNavigate();
    console.log("props",props);
    return(
        <div>
            <h3>Sign in</h3> 
            <div>

                <p>Username</p>
                <input 
                    // ส่วนของUser ทั้ังหมด
                    className="form-control " // ถ้าไม่ม่ กรอกมันจะสั้น
                    type="text" 
                    placeholder="demo@gmail.com"
                    value={props.email}
                    autoFocus
                    required
                    onChange={(e) => props.handleEmail(e)}
                />
                <p>Password</p>
                <input 
                    // ส่วนของPassword ทั้ังหมด
                    className="form-control"
                    type="password" 
                    placeholder="demo1234"
                    value={props.password}
                    required
                    onChange={(e) => props.handlePassword(e)} //ไว้ใส่ค่าที่user กรอก
                />

                <div>
                    <button className="btn btn-primary mt-2 w-100"
                    onClick={() => props.handleSignin()}
                    >
                        Sign in
                        </button>
                    <div className="d-flex align-items-center justify-content-center">
                    <p className="text-center mt-3 mr-1">Don't have an account ?</p>
                    &nbsp;
                    <button 
                    type="button"
                    className="btn btn-link px-0"
                    onClick={() =>
                        props.setHasAccount(!props.hasAccount)}                     
                    >
                        Sign up
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signin;