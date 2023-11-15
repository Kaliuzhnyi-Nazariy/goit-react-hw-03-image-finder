import { ImageGalleryItem } from '../GalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ inf, onClick }) => {
  return (
    <ImageGalleryList>
      {inf.map(item => (
        <ImageGalleryItem
          preview={item.webformatURL}
          id={item.id}
          alt={item.tags}
          onClick={onClick}
          bigPhoto={item.largeImageURL}
        ></ImageGalleryItem>
      ))}

      {/* <ImageGalleryItem inf={inf} onClick={onClick}></ImageGalleryItem> */}
      {/* <ImageGalleryItem></ImageGalleryItem> */}
    </ImageGalleryList>
  );
};
