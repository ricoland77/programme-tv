import logo from "../img/m6-logo.jpg";

const Section = () => {
  return (
    <div className="container">
      <section className="program">
        <div className="hourImg">
          <p>20h25</p>
          <img
            src="https://tel.img.pmdstatic.net/fit/https.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2F353861bb593e22e7.2Ejpg/64x90/quality/80/tous-en-cuisine-en-direct-avec-cyril-lignac.jpg"
            alt=""
          />
          <div className="text-prog">
            <h2>Tous en cuisine, en direct avec Cyril Lignac</h2>
            <p>Magazine culinaire</p>
            <div className="direct">
              <p>1h</p>
              <p className="red-direct">• Direct</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
