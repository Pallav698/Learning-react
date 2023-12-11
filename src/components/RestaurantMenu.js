import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API, MESS_ICON, DISH_API } from "../Utils/constant";
import { useParams } from "react-router-dom";


const ResturantMenu =  () => {

    const [resInfo, setResInfo] = useState(null);
    

    const { resId } = useParams(); 

    useEffect(() => {
         fetchMenu();
    },[]);
    console.log(resInfo);
    const fetchMenu = async () => {
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        setResInfo(data);
    };
    

    
    if( resInfo === null ) return <Shimmer></Shimmer>;

    const { name, cuisines, costForTwoMessage, areaName, feeDetails } = resInfo?.data?.cards[0]?.card?.card?.info;
    const { message, icon } = feeDetails;
    let { cards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    
    cards = cards.slice(1);
    cards.splice(cards.length - 2,
        2);
    

    return (
        <div className="top-level">
            <div>
                <div className ="res-details">
                    <div className="menu">
                        <div className="ano-con">
                            <p id="res-name">{name}</p>
                            <p id="cuisine">{cuisines.join(" , ")}</p>
                            <p id="area-name">{areaName}</p>
                            <ul className="message">
                                <img src={MESS_ICON + icon } className="mess-icon"></img>
                                <span>{message}</span>
                            </ul>
                        </div>
                        <div className="rating-box">
                            <span className="avg-rating">
                                {resInfo.data.cards[0].card.card.info.avgRatingString}
                                </span>
                            <span className="tot-rating">{resInfo.data.cards[0].card.card.info.totalRatingsString}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dishes">
                <ul>
                    {cards.map((card,index)=>{
                        return (
                        <li key = {index}><h3>{card?.card?.card?.title + ' (' + card?.card?.card?.itemCards?.length + ')'}</h3>
                            <ul>
                                {card?.card?.card?.itemCards ? (
                                    card.card.card.itemCards.map((item, index) => (
                                index != card.card.card.itemCards.length - 1 ? (<li className="item">
                                    <h3>{item?.card?.info?.name}</h3>
                                    <span>{item.card.info.price / 100}</span>
                                </li>) : (<li className="last-div">
                                <h3>{item?.card?.info?.name}</h3>
                                <span>{item.card.info.price / 100}</span>
                            </li>)
                                    ))
                                ) : (
                                    card?.card?.card?.categories?.map((category, index) => (
                                index != categories?.length - 1 ?
                                (<li className="item">
                                    <h3>{category?.title}</h3>
                                </li>) :(<li className="last-div">
                                    <h3>{category?.title}</h3>
                                </li>)
                                    ))
                                )}
                            </ul>
                        </li>
                    )})}
                    
                </ul>
            </div>
        </div>
    );
};

export default ResturantMenu;