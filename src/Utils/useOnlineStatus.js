import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus ] = useState(true);
    console.log("logging from top level");

    useEffect(() => {
        window.addEventListener("offline" ,() => {
            setOnlineStatus(false);
        })

        window.addEventListener("online" ,() => {
            setOnlineStatus(true)
        })

        console.log("logging in useeffects");
    },[])

    return onlineStatus;
};

export default useOnlineStatus;