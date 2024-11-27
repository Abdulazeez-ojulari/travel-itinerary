/* eslint-disable @typescript-eslint/no-explicit-any */
const ItemCard = ({ item, onAdd }: { item: any; onAdd: () => void }) => (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={onAdd} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Add to Itinerary
      </button>
    </div>
);
  
export default ItemCard;
  