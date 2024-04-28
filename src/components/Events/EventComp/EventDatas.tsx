type metadataprops = {
  catagory: string;
  city: string;
  price: number;
}
export const EventDatas = ({ catagory, city, price }: metadataprops) => (
  <div className="font-semibold text-black flex align-center justify-between">
    <p>
      {catagory} | {city}
    </p>
    {/* <p>{"$".repeat(event.price)}</p> */}
    <p>$ {`${price}`}</p>
  </div>
);