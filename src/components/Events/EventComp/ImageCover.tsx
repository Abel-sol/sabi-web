type imageprops = {
  photo: string;
  name: string;
}
export const ImageCover = ({ photo, name }: imageprops) => (
  <div className="w-full h-full object-cover max-h-[300px] min-h-[300px] relative">
    <img src={photo} alt={name} className="w-full h-full absolute object-cover" />
  </div>
);