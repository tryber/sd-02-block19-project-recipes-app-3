import React, { useContext } from 'react';
import RecipesContext from '../Context';


const DropdownOrigem = () => {
  const { origin, visibleSearch, setDrinkOrMeal, copy, setRequestInitialPage } = useContext(RecipesContext);
  const selectedOrigin = (e) => {
    e === '' ? setRequestInitialPage([...copy]) : setDrinkOrMeal(e)
  }

  return !visibleSearch &&
    (
      <div>
        <select data-testid="explore-by-area-dropdown" onClick={(e) => selectedOrigin(e.target.value) }>
          <option data-testid="Todas-option" value="">Todas</option>
          {origin.map(({strArea}) => <option data-testid={`${strArea}-option`} key={strArea} value={`/filter.php?a=${strArea}`}>{strArea}</option>)}
        </select>
      </div>
    )
}

export default DropdownOrigem;
