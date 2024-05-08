type metadataprops = {
  category: string;
  city: string;
  price: number;
}
export const EventDatas = ({ category, city, price }: metadataprops) => (
  <div className="font-semibold text-black flex align-center justify-between">
    <p>
      {category} | {city}
    </p>
    <p>$ {`${price}`}</p>
  </div>
);