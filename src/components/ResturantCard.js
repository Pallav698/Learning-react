import { CDN_URL } from "../Utils/constant";
const ResturantCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData?.info;

  return (
    <div className="res-card mr-1 p-5 w-[250px] h-[450px] mb-11 hover:border-[1px] hover:border-black bg-gray-200">
      <img
        className="rounded-2xl h-[220px] min-w-[100%]"
        alt="Oops"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name} </h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4 className="text-ellipsis overflow-hidden ...">
        {cuisines.join(",")}
      </h4>
    </div>
  );
};

export const withDiscountBanner = (ResturantCard) => {
  return (props) => {
    const { resData } = props;
    console.log(resData.info);
    // const { aggregatedDiscountInfoV3 } = resData.props;
    return (
      <div>
        <label className="absolute p-2 m-2 bg-green-400 text-white font-medium rounded-lg shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)">
          veg
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
