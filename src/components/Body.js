import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [orListOfResturant, setOrListOfResturant] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1179069&lng=79.04402429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_W");
        const data = await response.json();
        setListOfResturants(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOrListOfResturant(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
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
            <div className="filter">
                <div className="search-results">
                    <input className="search-box" type="text" value = {searchText} onChange = { function change(e){

                    
                        setSearchText(e.target.value);
                        const filteredList = orListOfResturant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setListOfResturants(filteredList);
                        

                    }} placeholder = "Search..."></input>
                </div>
                
                <button className = "filter-btn" onClick = {() =>{
                    const filteredList = listOfResturants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListOfResturants(filteredList);
                }}>Top Rated Resturant
                </button>
            </div>
            <div className="res-container">
                {listOfResturants.map( (restaurant) => (
                    <Link key = {restaurant.info.id} to = { "/restaurants/" + restaurant.info.id}><ResturantCard resData = {restaurant}></ResturantCard></Link>
            ))}
            </div>
        </div>
    )
}

export default Body;