type metadataprops = {
  category: string;
  time: string;
  price: number;
}
export const EventDatas = ({ category, time, price }: metadataprops) => (
  <div className="font-medium text-black flex align-center justify-between gap-2">
    <p>
      {category} | {time}
    </p>
    <p>${price}</p>
  </div>
);