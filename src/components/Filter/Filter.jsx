
import {useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice"; 


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(store => store.filter);
  
const onInput = (evt) => {
    const filterValue = evt.currentTarget.value.trim();
    // console.log(filterValue);
    dispatch(setFilter(filterValue));
};
  
  return <div>
      <form name="search">
        <label>
          Find contacts by name
          <input type="search"
            name="txt"
            onChange={onInput}
            value={filter}
          >
          </input>
        </label>
      </form>
    </div>
}

export default Filter;
