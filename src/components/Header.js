import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
            <div className="logo-container">
                <img 
                className="logo w-20"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex">
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base">
                        Online Status : {onlineStatus === true ? "✅" : "⚠️"}
                    </li>
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base">
                    <Link to = "/about">About Us</Link>
                    </li>
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base">
                        <Link to = "/contact">Contact Us</Link>
                    </li>
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base">
                        <Link to = "/grocery">Grocery</Link>
                    </li>
                    <li className="px-3 mr-3 text-[#3d4152] hover:text-[#fc8019] font-medium text-base flex">
                        <span>
                        <img src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg" className="w-10"></img>
                        </span><span>Cart
                        </span>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;