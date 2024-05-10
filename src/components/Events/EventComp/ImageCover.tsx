type imageprops = {
  image: string;
  name: string;
}
export const ImageCover = ({ image, name }: imageprops) => (
  <div className="w-full h-full object-cover max-h-[300px] min-h-[300px] relative">
    <img src={image} alt={name} className="w-full h-full absolute object-cover" />
  </div>
);