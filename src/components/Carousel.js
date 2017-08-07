
import React, { Component } from 'react';

export default class Carousel extends Component {

  render() {
    return(
        <div>
 
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            {/*<!-- Indicators -->*/}
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            {/*<!-- Wrapper for slides -->*/}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="http://www.ocean-scale-interactions.org/var/storage/images/medias-ifremer/medias-ocean_scale_interactions/une-vue-du-centre-bretagne.jpg/969956-1-eng-GB/Une-vue-du-Centre-Bretagne.jpg_opengraphimage.jpg" alt="..."/>
                <div className="carousel-caption">
                  Maquette V1
                </div>
              </div>
              <div className="item">
                <img src="http://www.ocean-scale-interactions.org/var/storage/images/medias-ifremer/medias-ocean_scale_interactions/une-vue-du-centre-bretagne.jpg/969956-1-eng-GB/Une-vue-du-Centre-Bretagne.jpg_opengraphimage.jpg" alt="..."/>
                <div className="carousel-caption">
                  Reunion Osirisc
                </div>
              </div>
              ...
            </div>

            {/*<!-- Controls -->*/}
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

        </div>
    )
  }
}
