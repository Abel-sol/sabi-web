type metadataprops = {
  category: string;
  location: string;
  price: number;
}
export const EventDatas = ({ category, location, price }: metadataprops) => (
  <div className="font-semibold text-black flex align-center justify-between">
    <p>
      {category} | {location}
    </p>
    <p>$ {`${price}`}</p>
  </div>
);