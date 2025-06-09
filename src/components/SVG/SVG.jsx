//Importing Stylesheet
import "./SVG.css";

//Import img
import svg from "../../assets/SVG/SVG.webp";

function SVG() {
  return (
    <section id="svg">
      <div className="mainContainer">
        <div className="headerContainer">
          <label>We Offer Best ERP Solutions</label>
        </div>

        <div className="svgContainer">
          <div>
            <p>
              Code Tech ERP Deliver The Real Benefits That Today's Bussiness
              Require In Their ERP System
            </p>
          </div>
          <img src={svg} alt="svgImg" />
          <p>
            More than 100 features in a single ERP. Review the best features
          </p>
        </div>
      </div>
    </section>
  );
}

export default SVG;
