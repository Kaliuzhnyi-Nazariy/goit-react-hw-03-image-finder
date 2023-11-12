export const ImageGalleryItem = ({ inf }) => {
  return inf.map(item => {
    return (
      <li
        style={{
          padding: '15px',
        }}
        key={item}
      >
        <img src={item} alt={item} width="100px" />
      </li>
    );
  });
};
