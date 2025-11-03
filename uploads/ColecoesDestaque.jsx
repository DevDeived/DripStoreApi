import destaque1 from "../../assets/drop.png";
import destaque2 from "../../assets/adidas.png"
import destaque3 from "../../assets/beats.png"
import destaque4 from "../../assets/imgIcon.png"
import "./ColecoesDestaque.css"

function ColecoesDestaque() {
  return (
    <>
      <section id="colecao">
        <h1>Coleções em destaque</h1>
        <div id="colecaoTitle">
          <div>
            <img src={destaque1} alt="" />
          </div>
          <div>
            <img src={destaque2} alt="" />
          </div>
          <div>
            <img src={destaque3} alt="" />
          </div>
        </div>
      </section>
      <section id="destaque">
        <h1>Coleções em destque</h1>
        <div id="destaqueImg">
          <img src={destaque4} alt="" />
        </div>
      </section>
    </>
  );
}

export default ColecoesDestaque;