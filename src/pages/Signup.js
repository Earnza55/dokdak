import React from "react" ;
// ลง npm Install react-bootstrap ก่อน import
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup (props) {
    const navigate = useNavigate();
    console.log("props",props);

    return(
        // ตัวคุมทั้งหมด
        <div>
            <h3>Sign up</h3> 
            <div>
            
                <p>Username</p>
                <input 
                    // ส่วนของUser ทั้ังหมด
                    className="form-control w-100" // ถ้าไม่ม่ กรอกมันจะสั้น
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
                {/* <p>Password 2 </p>
                <input 
                    // ส่วนของPassword ทั้ังหมด
                    className="form-control"
                    type="Password" 
                    placeholder="demo1234"
                    value={props.password}
                    required
                /> */}
                <div>
                    <button className="btn btn-primary mt-2 w-100"
                    onClick={() => props.handleSignup()}
                    >
                        Sign up
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                        <p className="text-center mt-3">Have an account?</p>
                        <button className="btn btn-link px-0"
                        onClick={() =>
                            props.setHasAccount(!props.hasAccount)}
                        >
                        Sign in
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Signup;