import { type FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface ImageViewProps {
  src: string;
  id: string;
}

const ImageView: FC<ImageViewProps> = ({ src, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <article
      className="grid grid-rows-[50px_500px_auto] w-full bg-white rounded-md border border-gray-300 cursor-pointer"
      onClick={() => {
        navigate(`/img/${id}`, {
          state: {
            backgroundLocation: location,
          },
        });
      }}
    >
      <div className="p-2">title area</div>
      <img src={src} alt="" className="w-full h-full object-cover" />
      <div className="grid grid-rows-[40px_1fr_40] p-2">
        <div className="">icon area</div>
        <p>
          content areacontent areacontent areacontent areacontent areacontent areacontent
          areacontent areacontent areacontent areacontent areacontent areacontent areacontent
          areacontent area
        </p>
        <div className="">comment area</div>
      </div>
    </article>
  );
};

export default ImageView;
