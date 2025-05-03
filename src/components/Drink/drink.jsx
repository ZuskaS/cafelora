import './drink.css';

export const Drink = (props) => {
  return (
    <div className="drink">
      <h3>{props.name}</h3>
      <div className="drink__product"></div>
      <div className="drink__cup">
        <img src={props.image} />
      </div>
      <div className="drink__info"></div>
      <form className="drink__controls">
        <input type="hidden" className="order-id" value="0" />
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
