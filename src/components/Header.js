import React  from "react";
import Lo from "../assets/Yam.png"; //ใส่รูป

function Header() {
    return ( // แถบขาวด้านบน 
        <nav className="navbar navbar-expand-lg navbar-ligth bg-light"> 
            <div className="container-fluid">
                <img src={Lo} alt="Lo" width="8%" />
                <button  // เอาไว้เวลาย่อหน้าจอแล้วมีแท็ปด้านข้าว (สามขีด)
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="navbarNav" // ต้องใส่เหมือน id ตรงบรรทัด 19 ด้วยนะ
                    aria-controls="navbarNav" // ต้องใส่เหมือน id ตรงบรรทัด 19 ด้วยนะ
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                                            
                <div className="collapse navbar-collapse justify-content-end" //ถ้าใส่ collapse justify-content-end Home จะอยู่ขวา
                    id="navbarNav"> 
                    <div className="navbar-nav">
                        <a className="nav-link active" href="/"> 
                            Home 
                        </a>
                        <a className="nav-link active" href="/Sign-up" //เปลี่ยนให้ตรงApp// เป็นคำตรงแถบ
                        > 
                            Sign up
                        </a>
                        <a className="nav-link active" href="/Sign-in"> 
                            Sign in 
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;