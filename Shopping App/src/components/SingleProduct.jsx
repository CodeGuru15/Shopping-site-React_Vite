const SingleProduct = ({
  img,
  title,
  discount,
  category,
  price,
  brand,
  rating,
}) => {
  return (
    <>
      <div className="px-3 py-1 gap-1 flex flex-col w-[150px] sm:w-[200px] overflow-hidden">
        <div className="h-[100px] sm:h-[150px] overflow-hidden">
          <img className="w-full h-full " src={img} alt={category} />
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="font-bold truncate">{brand}</div>
          <div className="font-semibold truncate">{title}</div>
          <div className="font-semibold">Rating: {rating}</div>
          <div className="">
            <span className="p-[6px] text-sm text-white bg-red-600">
              Up to {discount}% off
            </span>
          </div>
          <div className="font-semibold">Price: &#8377; {price}</div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
