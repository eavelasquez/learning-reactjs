import { TURNS } from "../utils/constants";
import { Square } from "./Square";

export const Turn = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  );
}
