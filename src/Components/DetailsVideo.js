import React, { useContext } from 'react';
import Youtube from 'react-youtube';
import RecipesContext from '../Context';

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
  if (!condition[0][`str${isMeal}`]) return <p>No Video</p>;
  return '';
};

const DetailsVideo = () => {
  const { foodObject, isRecipeStarted } = useContext(RecipesContext);
  const isMeal = window.location.href.includes('comidas') ? 'Youtube' : 'Video';
  const condition = foodObject.meals || foodObject.drinks;

  return (
    <div hidden={isRecipeStarted}>
      <h4>Video</h4>
      {isVideo(condition, isMeal)}
    </div>
  );
};

export default DetailsVideo;
