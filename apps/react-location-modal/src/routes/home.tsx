import { Link } from "react-router-dom";
import ImageView from "../components/image.view";
import { images } from "../source";

const Home = () => {
  return (
    <ul className="grid gap-4">
      <Link to="/explore">
        <h1>explore</h1>
      </Link>
      {images.map((image, idx) => (
        <ImageView key={idx} src={image.src} id={`${image.id}`} />
      ))}
    </ul>
  );
};

export default Home;
