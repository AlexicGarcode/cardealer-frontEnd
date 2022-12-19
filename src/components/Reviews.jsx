import React from 'react';
import Usuario1 from '../assets/Chase.jpg';
import Usuario2 from '../assets/Charlie.jpg';
import Usuario3 from '../assets/Valeria.jpg';
import frontcar from '../assets/frontcar.png';
import horizon from '../assets/horizon.png';
import jumbo from '../assets/jumbotron.png';


const Reviews = (props) => {
  return (
    <>
    <div class="p-5 mb-4 rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>

      <main role="main">
      
      

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
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                <a className="btn btn-secondary" href="/" role="button">
                  View details »
                </a>
              </p>
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
              <h2>Heading</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <p>
                <a className="btn btn-secondary" href="/" role="button">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img
                className="rounded-circle"
                src={Usuario3}
                alt="a guy"
                width={140}
                height={140}
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                <a className="btn btn-secondary" href="/" role="button">
                  View details »
                </a>
              </p>
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It'll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                data-src={Usuario1}
                alt="500x500"
                style={{ width: 500, height: 500 }}
                src= '.public/img/Charlie.jpg'
                data-holder-rendered="true"
              />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it's that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
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
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
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
