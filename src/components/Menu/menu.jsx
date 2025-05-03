import './menu.css';
import { Drink } from '../Drink/drink.jsx';

export const Menu = (props) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <div className="drinks-list">
          {props.drinks &&
            props.drinks.map((drink) => (
              <Drink
                key={drink.id}
                id={drink.id}
                name={drink.name}
                ordered={drink.ordered}
                image={`http://localhost:4001${drink.image}`}
                layers={drink.layers}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
