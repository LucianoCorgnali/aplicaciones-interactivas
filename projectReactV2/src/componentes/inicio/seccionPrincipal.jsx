import aside1 from "../../assets/ASIDE1.jpg";
import aside2 from "../../assets/ASIDE2.jpg";
import aside3 from "../../assets/ASIDE3.jpg";
import aside4 from "../../assets/ASIDE4.jpg";




const seccionPrincipal = () => {
  return (
    <>
  
  <main className="py-5">
  <div className="container col-lg-11">
    <div className="row">

      {/* IMAGEN PRINCIPAL */}
      <div className="col-lg-9">
        <h5>Seccion principal</h5>
      </div>

      {/* ASIDE */}
      <aside className="col-lg-3 col-md-12 bg-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-4 col-sm-6 col-12">
              <img src={aside1} className="img-fluid mb-2" alt="Image" />
            </div>
            <div className="col-lg-12 col-md-4 col-sm-6 col-12">
              <img src={aside2} className="img-fluid mb-2" alt="Image" />
            </div>
            <div className="col-lg-12 col-md-4 col-sm-6 col-12">
              <img src={aside3} className="img-fluid mb-2" alt="Image" />
            </div>
            <div className="col-lg-12 col-md-4 col-sm-6 col-12">
              <img src={aside4} className="img-fluid mb-2" alt="Image" />
            </div>
            <div className="col-lg-12 col-md-4 col-sm-6 col-12">
              <img src={aside2} className="img-fluid mb-2" alt="Image" />
            </div>
          </div>
        </div>
      </aside>
      
    </div>
  </div>
</main>




    
    </>
  );
};

export default seccionPrincipal;
