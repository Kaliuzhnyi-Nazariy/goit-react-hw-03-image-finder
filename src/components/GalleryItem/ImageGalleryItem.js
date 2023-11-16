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

  render() {
    const { preview, bigPhoto, id, alt } = this.props;

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
        </GalleryItem>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          photo={bigPhoto}
        />
      </>
    );
  }
}
