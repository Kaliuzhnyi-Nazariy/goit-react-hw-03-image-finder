import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ inf, onClick }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        overflow: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <ImageGalleryItem inf={inf} onClick={onClick}></ImageGalleryItem>
      {/* <ImageGalleryItem></ImageGalleryItem> */}
    </ul>
  );
};
