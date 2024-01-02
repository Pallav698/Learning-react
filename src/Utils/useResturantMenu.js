import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useResturantMenu =  (resId) => {

    const [resInfo, setResInfo] = useState(null);
    
 

    useEffect(() => {
         fetchMenu();
    },[]);
    console.log(resInfo);
    const fetchMenu = async () => {
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        setResInfo(data);
    }
    return resInfo;
};
export default useResturantMenu;