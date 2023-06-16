import { useDispatch, useSelector } from "react-redux";
import { showFacts, showCount} from "../store/slices/factsSlice";
import { useEffect } from "react";

export default function StarWars() {
  const { count, showCountFacts } = useSelector(state => state.facts);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(showCount(e.target.value));
  };

  useEffect(() => {
    dispatch(showFacts(count));
  }, [count, dispatch]);

  return (
    <div className="starWars">
      <p>
        Показать <input type="number" value={count} onChange={onChange} min="0" max="5" required /> фактов о StarWars:
      </p>
      <ul>
        {showCountFacts.map(fact => <li key={fact.id}>{fact}</li>)}
      </ul>
    </div>
  );
}