import { useState } from "react";
import ItemList from "./ItemList";


const ResturantDishes = ({data}) => {
    
    const [showItemList, setShowItemList] = useState(false);
    
    const handleClick = () => {
        setShowItemList(!showItemList);
    }

    return (
        <div className="dishes">
            {data.map((card)=>{
                return (
                    <div key={card.card.card.id}>
                        <div className="mx-auto my-4 p-4 shadow-lg">
                            <div className="flex justify-between" onClick={handleClick}>
                                <span className="text-[#3e4152] font-[800] text-[20px] mb-[24px]">
                                    {card?.card?.card?.title + ' (' + card?.card?.card?.itemCards.length + ')'}
                                </span>
                                <span>
                                    {showItemList === true ? '⬇️' : '⬆️'}
                                </span>
                            </div>
                            <div>
                                {showItemList === true && <ItemList data={card.card.card.itemCards}></ItemList>}
                            </div>
                        </div>
                    </div>
            )})}
        </div>
    );
};
export default ResturantDishes;