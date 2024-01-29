import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API, MESS_ICON, DISH_API } from "../Utils/constant";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utils/useResturantMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ResturantDishes from "./ResturantDishes";


const ResturantMenu =  () => {

    const { resId } = useParams();
    const  resInfo  = useResturantMenu(resId);
    
    
    if( resInfo === null ) return <Shimmer></Shimmer>;

    const { name, cuisines, costForTwoMessage, areaName, feeDetails, sla } = resInfo?.data?.cards[0]?.card?.card?.info;
    const { icon , message } = feeDetails;
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter( c => c ?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return (
      <div className="top-level menu mx-auto w-6/12 my-5">
        <div>
          <div className="res-details">
            <div>
              <div className="mb-[18px]">
                <div className="flex justify-between">
                  <div>
                    <p className="text-[#282c3f] font-semibold mb-2 text-base">
                      {name}
                    </p>
                    <p className="text-[#7e808c] text-sm">
                      {cuisines.join(" , ")}
                    </p>
                    <p className="text-[#7e808c] text-sm">
                      {areaName}, {sla.lastMileTravelString}
                    </p>
                  </div>
                  <button className="rating-box self-center border-[1px] border-[#e9e9eb] text-center p-2 rounded-[6px] font-[400] shadow-[0 1px 5px #f9f9f9]">
                    <p className="avg-rating text-[#3d9b6d] font-[700] pb-[10px] mb-[8px] border-b-[1px] border-[#e9e9eb]">
                      <FontAwesomeIcon icon={faStar} />
                      {resInfo.data.cards[0].card.card.info.avgRatingString}
                    </p>
                    <p className="tot-rating text-[11px] text-[#8b8d97] font-[600]">
                      {resInfo.data.cards[0].card.card.info.totalRatingsString}
                    </p>
                  </button>
                </div>
              </div>
              <ul className="list-none border-b-[1px] border-dashed border-[#d3d3d3]">
                <li className="flex items-start mb-[18px]">
                  <img
                    src={MESS_ICON + icon}
                    className="mr-[8px] mt-[5px]"
                  ></img>
                  <span className="text-[#7e808c]">{message}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ResturantDishes
          data={categories}
        ></ResturantDishes>
      </div>
    );
};

export default ResturantMenu;