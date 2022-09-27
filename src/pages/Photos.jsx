import Image from "../components/Image";
import { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });
  return <main className="photos">{imageElements}</main>;
}

export default Photos;
