import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
{
  src: "https://via.placeholder.com/367x276",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/276x276",
  width: 1,
  height: 1
},
{
  src: "https://via.placeholder.com/207x276",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/207x276",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/190x254",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/338x254",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/190x254",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/338x254",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/414x311",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/233x311",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/414x311",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/190x254",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/338x254",
  width: 4,
  height: 3
},
{
  src: "https://via.placeholder.com/190x254",
  width: 3,
  height: 4
},
{
  src: "https://via.placeholder.com/338x254",
  width: 4,
  height: 3
}
];

export class GalleryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false
    };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  openLightbox(event, { photo, index }) {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  }
  
  render() {
    return (
      <div>
        <div className="row grid-margin">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">light Gallery</h4>
                <p className="card-text"> Click on any image to open in lightbox gallery </p>
                <Gallery photos={photos} onClick={this.openLightbox} />
                  <ModalGateway>
                    {this.state.viewerIsOpen ? (
                      <Modal onClose={this.closeLightbox}>
                        <Carousel
                          currentIndex={this.state.currentImage}
                          views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default GalleryPage
