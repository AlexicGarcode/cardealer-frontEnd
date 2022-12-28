import React from 'react';
import Usuario1 from '../assets/Chase.jpg';
import Usuario2 from '../assets/Charlie.jpg';
import Usuario3 from '../assets/Valeria.jpg';
import frontcar from '../assets/frontcar.png';
import horizon from '../assets/horizon.png';
import inside from '../assets/inside.png';



const Reviews = (props) => {
  return (
    <>
      <main role="main">
        <div class="p-5 mb-4 rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-6 fw-bold">
              El auto de tus sueños a un click de distancia
            </h1>
            <p class="col-md-8 fs-5">
              La condicion de los autos que tenemos en Toño's Cars es evaluada
              por nuestro equipo de mecanicos expertos.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              Quiero ver los autos
            </button>
          </div>
        </div>

        {/* Marketing messaging and featurettes
================================================== */}
        {/* Wrap the rest of the page in another container to center all the content. */}
        <div className="container marketing">
          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src={Usuario1}
                alt="a girl"
                width={140}
                height={140}
              />
              <h2>Esteban</h2>
              <p>
                Obtienes lo que ves, no hay trucos ocultos, el proceso es
                riguroso pero vale la pena.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src={Usuario2}
                alt="a guy"
                width={140}
                height={140}
              />
              <h2>Carlos</h2>
              <p>
                Siempre he comprado autos de vendedores particulares pero me
                llevaba sorpresas desagradables. Entonces mi hija me recomendo
                Toño's Cars y quede asombrado 10/10.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img
                className="rounded-circle ctr"
                src={Usuario3}
                alt="a guy"
                width={140}
                height={140}
              />
              <h2>Sofia</h2>
              <p>
                Siempre quise comprar un auto por mi cuenta y casi lo hice pero
                me alcance a dar cuenta que el vendedor me queria timar, fue
                cuando decidi usar Toño's Cars, tienen un equipo de asesores y
                te dan garantia por escrito.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Seguridad de compra </h2>
              <p className="lead">
                La unica plataforma en linea en el que los automoviles estan
                revisados por profesionales automotrices.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src={Usuario1}
                alt="500x500"
                style={{ width: 500, height: 500 }}
                src={inside}
                data-holder-rendered="true"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Comunidad de dueños de automoviles.{" "}
                <span className="text-muted"></span>
              </h2>
              <p className="lead">
                Zorro no te lo lleves, la verdad es que nunca nos hemos llevado
                bien con los zorros, coyotes ni nadie que se quiera aprovechar
                de los demas, es por eso que para entrar a nuestra comunidad
                hacemos un filtro exhaustivo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src={frontcar}
                data-holder-rendered="true"
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                Pasion por viajar <span className="text-muted"></span>
              </h2>
              <p className="lead">
                Ya sea que viajes por la ciudad, o que quieras ir a pueblear tu
                auto es el boleto que te lleva a aquellos destinos deseados, y
                queremos que lo hagas en el momento que quieras. Es por eso que
                los autos que encuentras en nuestra plataforma te van a llevar
                de inicio al lugar de tus sueños.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src={horizon}
                data-holder-rendered="true"
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* /END THE FEATURETTES */}
        </div>
      </main>
    </>
  );
}

export default Reviews
