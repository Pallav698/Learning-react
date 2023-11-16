import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const resList = [
    {
        "info": {
        "id": "365294",
        "name": "Checkers",
        "cloudinaryImageId": "d5516079bd5c3cf93e9c5a5340287894",
        "locality": "IT Park",
        "areaName": "Gayatri Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "American",
        "Chinese",
        "Indian",
        "Italian",
        "North Indian",
        "Pastas",
        "Pizzas",
        "Snacks"
        ],
        "avgRating": 4.4,
        "feeDetails": {
        "restaurantId": "365294",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2700
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2700
        },
        "parentId": "21854",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
        "context": "seo-data-bb988bff-f3f1-40a6-833e-c5dedb00c598"
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/checkers-it-park-gayatri-nagar-nagpur-365294",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
        "id": "52895",
        "name": "Khichadiwala",
        "cloudinaryImageId": "uxo5md786jaarvsm3llp",
        "locality": "Gayatri Nagar",
        "areaName": "Gayatri Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Indian",
        "Snacks"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
        "restaurantId": "52895",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2700
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2700
        },
        "parentId": "4829",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-16 22:40:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
        "context": "seo-data-bb988bff-f3f1-40a6-833e-c5dedb00c598"
        },
        "cta": {
        "link": "https://www.swiggy.com/restaurants/khichadiwala-gayatri-nagar-nagpur-52895",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
        "info": {
        "id": "54600",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "tnvjrjlxhqkuzebt2y5f",
        "locality": "Bajaj Nagar",
        "areaName": "Bajaj Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.2,
        "feeDetails": {
        "restaurantId": "54600",
        "fees": [
        {
        "name": "BASE_DISTANCE",
        "fee": 2700
        },
        {
        "name": "BASE_TIME"
        },
        {
        "name": "ANCILLARY_SURGE_FEE"
        }
        ],
        "totalFee": 2700
        },
        "parentId": "2456",
        "avgRatingString": "4.2",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2023-11-17 02:55:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
        "context": "seo-data-bb988bff-f3f1-40a6-833e-c5dedb00c598"
        },
        }
    ];




const ResturantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card">
            <img className="res-logo"
            alt="Oops"
            src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
                />
            <h3>{resData.info.name} </h3>
            <p>{resData.info.costForTwo}</p>
            <p>{resData.info.avgRating}</p>
            <p style>{resData.info.cuisines.join(",")}</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard resData={resList[0]}></ResturantCard>
                <ResturantCard resData={resList[1]}></ResturantCard>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header/>
            <Body></Body>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);