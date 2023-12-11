import { CDN_URL } from "../Utils/constant";
const ResturantCard = (props) => {
    const { resData } = props;
    const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } = resData?.info;
    
    return (
        <div className="res-card">
            <img className="res-logo"
            alt="Oops"
            src={
                CDN_URL + cloudinaryImageId}
                />
            <h3>{name} </h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4 style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{cuisines.join(",")}</h4>
        </div>
    )
}

export default ResturantCard;