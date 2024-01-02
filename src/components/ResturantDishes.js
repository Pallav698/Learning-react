import ItemList from "./itemList";
const ResturantDishes = (props) => {
    return (
        <div className="dishes">
            {props.data.map((card,index)=>{
                return (
                    <div>
                        <div className=" bg-slate-50  mx-auto my-4 p-4 shadow-lg">
                            <div className="flex justify-between">
                                <span className="text-[#3e4152] font-[800] text-[20px]">
                                    {card?.card?.card?.title + ' (' + card?.card?.card?.itemCards.length + ')'}
                                </span>
                                <span>
                                    ⬇️
                                </span>
                            </div>
                            <div>
                                <ItemList data={card.card.card.itemCards}></ItemList>
                            </div>
                        </div>
                        
                    </div>
            )})}
        </div>
    );
};
export default ResturantDishes;