import { FC } from "react";
import imageStyle from "./ingredient-preview.module.css";

type TIngredientPreview = {
  alt: string;
  src: string;
  remaining: number;
}

const IngredientPreview: FC<TIngredientPreview> = ({ alt, src, remaining }) => {

  const imageClass = remaining > 0 ? `${imageStyle.image} ${imageStyle.imageFaded}` : imageStyle.image;

  return (
    <div className={imageStyle.container}>
      <img alt={alt} src={src} className={imageClass}>
        
      </img>
      {
      (remaining>0) && <p className={`text text_type_digits-default ${imageStyle.counter}`}>{`+${remaining}`}</p>
      }
    </div>
  )
}

export default IngredientPreview;