import React, { useContext } from "react";
import RecipesContext from '../Context';
import Youtube from 'react-youtube';

const DetailsVideo = () => {
  const { foodObject } = useContext(RecipesContext);
  const condition = foodObject.meals || foodObject.drinks;
  const videoToComp = condition[0].strYoutube.split('');
  const indexEqual = [...videoToComp].indexOf('=');
  const idVideo = [...videoToComp].slice(indexEqual + 1);
  return (
    <div>
      <Youtube
        videoId={idVideo.join('')}
      />
    </div>
  );
}

export default DetailsVideo;
