import { CDN_URL } from "../Utils/constant";
const ItemList = (items) => {
    return (
      <div>
        {items.data.map((item, index) => (
          <div>
            <div key={item.card.info.id}>
              <div className="flex items-center">
                <div className="w-10/12">
                  <div>
                    <h3 className="text-[#3e4152] text-lg font-medium">
                      {item.card.info.name}
                    </h3>
                    <p className="text-[#3e4152] text-base font-normal">
                      {" "}
                      &#8377;
                      {"defaultPrice" in item.card.info
                        ? item.card.info.defaultPrice / 100
                        : item.card.info.price / 100}
                    </p>
                  </div>
                  <div className="mt-[14px]">
                  <span className="leadding-[14px] text-[#282c3f] text-base font-light">
                    {item.card.info.description}
                  </span>
                  </div>
                </div>
                <div className="w-2/12 ml-4 relative">
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    className="w-[118px] h-[120px] object-cover rounded-md bg-[#e0eef5]"
                  ></img>
                </div>
              </div>
            </div>
            <div className="border-b-[0.5px] border-solid-[#d3d3d3] my-[20px] h-[0.5]"></div>
          </div>
        ))}
      </div>
    );
};
export default ItemList;
