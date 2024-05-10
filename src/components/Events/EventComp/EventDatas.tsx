type metadataprops = {
  category: string;
  location: string;
  price: number;
}
export const EventDatas = ({ category, location, price }: metadataprops) => (
  <div className="font-medium text-black flex align-center justify-between gap-2">
    <p>
      {category} | {location}
    </p>
    <p>${price}</p>
  </div>
);