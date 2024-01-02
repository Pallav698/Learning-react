import ResturantCard, {withDiscountBanner} from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [orListOfResturant, setOrListOfResturant] = useState([]);

    const ResturantCardDiscount = withDiscountBanner(ResturantCard);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_W");
        const data = await response.json();
        setListOfResturants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setOrListOfResturant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };
    const onLineStatus = useOnlineStatus();


    if(onLineStatus === false) {
        return (
            <h1>
                Looks Like You're offline!! Please Check Your Internet Connections.
            </h1>
        )
    }

    return listOfResturants.length === 0 ? (
    <Shimmer/>)
     : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search-results p-5">
                    <input className="search-box border border-black text-xl font-medium p-2 text-[#3d4152]" type="text" value = {searchText} onChange = { function change(e){

                    
                        setSearchText(e.target.value);
                        const filteredList = orListOfResturant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setListOfResturants(filteredList);
                        

                    }} placeholder = "Search for restaurants"></input>
                </div>
                
                <button className = "filter-btn border border-black w-fit h-[47px] rounded-md bg-green-300 p-2 text-[#3d4152] font-medium text-xl" onClick = {() =>{
                    const filteredList = listOfResturants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListOfResturants(filteredList);
                }}>Top Rated Resturant
                </button>
            </div>
            <div className="res-container flex flex-wrap justify-evenly">
                {listOfResturants.map( (restaurant) => 
                    (
                    <Link key = {restaurant.info.id} to = { "/restaurants/" + restaurant.info.id}>
                        {restaurant.info.veg === true ? (<ResturantCardDiscount resData = {restaurant}></ResturantCardDiscount>)
                        : (<ResturantCard resData = {restaurant}></ResturantCard>)
                        }
                    </Link>
                            
            ))}
            </div>
        </div>
    )
}

export default Body;