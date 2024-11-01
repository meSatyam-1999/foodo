
import ItemList from "./itemList";


const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    
    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            {/* Accordion Header */}
               <div className="w-6/12 mx-auto my-4 bg-slate-300 shadow-lg p-4 rounded-lg cursor-pointer">
                
                <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>

                <div>
                {showItems && <ItemList items={data.itemCards} />}
                </div>
                
               </div>
            {/* Accordion Body */}
                
        </div>
    )
}

export default RestaurantCategory;