import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ inf }) => {
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
      <ImageGalleryItem inf={inf}></ImageGalleryItem>
      {/* <ImageGalleryItem></ImageGalleryItem> */}
    </ul>
  );
};
