import { Component } from 'react';
import { Modal } from './Modal';

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
    const { inf } = this.props;

    return inf.map(item => {
      return (
        <li
          style={{
            padding: '15px',
          }}
          key={item.id}
          onClick={this.openModal}
        >
          <img
            src={item.webformatURL}
            alt={item}
            width="100px"
            data-source={item.largeImageURL}
          />
          <Modal
            isOpen={this.state.isModalOpen}
            onClose={this.closeModal}
            photo={item.largeImageURL}
          />
        </li>
      );
    });
  }
}
