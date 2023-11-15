import { LoadMoreBtn } from './LoadMoreBtn.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn className="Button" onClick={onClick}>
      Load More
    </LoadMoreBtn>
  );
};
