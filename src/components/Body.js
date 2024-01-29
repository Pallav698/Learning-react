import ResturantCard, {withDiscountBanner} from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
const Body = () => {
    const [listOfResturants, setListOfResturants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [orListOfResturant, setOrListOfResturant] = useState([]);

    const ResturantCardDiscount = withDiscountBanner(ResturantCard);
    const { loggedinUser, setUserName } = useContext(UserContext);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        console.log(data);
        
        setListOfResturants(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        console.log(data);

        setOrListOfResturant(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        
    };
    
    const onLineStatus = useOnlineStatus();


    if(onLineStatus === false) {
        return (
            <h1>
                Looks Like You're offline!! Please Check Your Internet Connections.
            </h1>
        )
    }

    return listOfResturants?.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter flex items-center">
          <div className="search-results p-5">
            <input
              className="search-box border border-[#0f172a1a] text-xl font-medium p-2 text-[#3d4152] rounded-md shadow-sm"
              type="text"
              value={searchText}
              onChange={function change(e) {
                setSearchText(e.target.value);
                const filteredList = orListOfResturant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setListOfResturants(filteredList);
              }}
              placeholder="Search for restaurants"
            ></input>
          </div>

          <button
            className="filter-btn border border-[#0f172a1a] w-fit h-[47px] rounded-md bg-green-300 p-2 text-[#3d4152] font-medium text-xl"
            onClick={() => {
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfResturants(filteredList);
            }}
          >
            Top Rated Resturant
          </button>
          <div>
            <input
              type="text"
              placeholder="Type your name"
              // value={loggedinUser}
              className="ml-[10px] border border-[#0f172a1a] w-fit h-[47px] rounded-md p-2 text-[#3d4152] font-medium text-xl"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="res-container flex flex-wrap justify-evenly">
          {listOfResturants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.veg === true ? (
                <ResturantCardDiscount
                  resData={restaurant}
                ></ResturantCardDiscount>
              ) : (
                <ResturantCard resData={restaurant}></ResturantCard>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Body;