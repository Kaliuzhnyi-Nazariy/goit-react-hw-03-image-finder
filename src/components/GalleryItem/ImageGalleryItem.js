import { Component } from 'react';
import { Modal } from '../Modal/Modal';

import { GalleryItem } from './GalleryItem';
import { ImageStyled } from './ImageStyled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  // handleClick = e => {
  //   return e.target.dataset.source;
  // };

  render() {
    const { preview, bigPhoto, id, alt } = this.props;

    // console.log(`id: ${key}`);
    // console.log(`preview: ${preview}`);

    return (
      <>
        <GalleryItem
          key={id}
          style={{
            padding: '15px',
          }}
          onClick={this.openModal}
        >
          <ImageStyled
            src={preview}
            alt={alt}
            width="100px"
            // data-source={item.largeImageURL}
          />
          <Modal
            isOpen={this.state.isModalOpen}
            onClose={this.closeModal}
            photo={bigPhoto}
          />
        </GalleryItem>
      </>
    );
  }
}
