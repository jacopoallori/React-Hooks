import Title from "./components/Title";
import Holiday from "./components/Holiday";
import './vacanze.css';

function Vacanze() {
  return (
    <section className="section-center">
      <div className="container">
        <Title text="Le nostre Vacanze"/>
        <Holiday/>
      </div>
    </section>
  );
}

export default Vacanze;