import StarIcon from "../assets/star.svg";
export default function Rating({ rating }) {
  const stars = Array(rating).fill(StarIcon);
  return (
    <>
      {stars.map((star, index) => (
        <img key={star, index} src={star} width="14" height="14" alt="Star" />
      ))}
    </>
  );
}