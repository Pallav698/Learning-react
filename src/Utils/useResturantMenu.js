const useResturantMenu =  () => {

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
};
export default useResturantMenu;