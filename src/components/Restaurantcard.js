import { StarIcon } from "@heroicons/react/24/solid";
import CDN_URL from "../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;
  // sohrtcut if we don't want to writee resData.data here
  const {
    cloudinaryImageId,
    name,
    avgRating,
    aggregatedDiscountInfo,
    cuisines,
    locality,
  } = resData?.data;
  return (
    <div>
      <div className="overlay-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
          className="relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
        />
        <div className="overlay w-full rounded-md p-2 px-3 ">
          <p className="text-xl font-bold flex gap-2 flex-wrap">
            {aggregatedDiscountInfo?.header
              ? aggregatedDiscountInfo.header
              : ""}{" "}
            {aggregatedDiscountInfo?.subHeader
              ? aggregatedDiscountInfo.subHeader
              : ""}
          </p>
        </div>
      </div>
      <h2 className="text-lg font-semibold mt-2 text-zinc-800">{name}</h2>
      <div className="flex items-center gap-2">
        <StarIcon className="w-6 h-6 text-orange-400" />{" "}
        <p className="font-semibold text-gray-700 text-base">{avgRating}</p>
      </div>
      <p className="truncate  text-zinc-600">
        {cuisines?.map((c, i) => (
          <span key={i}>
            {c}
            {i === cuisines.length - 1 ? "" : ", "}
          </span>
        ))}
      </p>

      <p className="text-zinc-600">{locality}</p>
    </div>
  );
};
export default Restaurantcard;
