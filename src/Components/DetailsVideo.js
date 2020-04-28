import React, { useContext } from "react";
import RecipesContext from '../Context';
import Youtube from 'react-youtube';

const isVideo = (condition, isMeal) => {
  if (condition[0][`str${isMeal}`]) {
    const videoToComp = condition[0][`str${isMeal}`].split('');
    const indexEqual = [...videoToComp].indexOf('=');
    const idVideo = [...videoToComp].slice(indexEqual + 1).join('');
    return (
      <div>
        <Youtube
          data-testid="video"
          videoId={idVideo}
        />
      </div>
    );
  }
  if (!condition[0][`str${isMeal}`]) return <p>No Video</p>
}

const DetailsVideo = () => {
  const { foodObject } = useContext(RecipesContext);
  const isMeal = window.location.href.includes('comidas') ? 'Youtube' : 'Video';
  const condition = foodObject.meals || foodObject.drinks;

  return (
    <div>
      <h4>Video</h4>
      {isVideo(condition, isMeal)}
    </div>
  );
}

export default DetailsVideo;
