import {toast} from "react-hot-toast";
import {useDispatch, useSelector} from "react-redux";
import {add, remove} from "../redux/Slices/cartSlice";

const Product = ({post}) => {
	const {cart} = useSelector((state) => state);
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(add(post));
		toast.success("Item added to Cart");
	};
	const removeFromCart = () => {
		dispatch(remove(post.id));
		toast.error("Item removed from Cart");
	};

	return (
		<div className="group hover:scale-105 transition duration-200 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.13)_0px_3px_8px] hover:shadow-[0px_0px_35px_23px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
			<div>
				<p className="truncate w-40 mt-1 text-gray-700 font-semibold text-lg  text-left">
					{post.title}
				</p>
			</div>
			<div>
				<p className=" w-40 text-gray-400 font-normal text-[10px] text-left">
					{post.description.split(" ").slice(0, 10).join(" ") + "..."}
				</p>
			</div>
			<div className="h-[180px]">
				<img
					src={post.image}
					className="h-full w-full object-contain"
					alt="post_image"
				/>
			</div>

			<div className="flex items-center justify-between w-full mt-5">
				<div>
					<p className="text-green-600 font-semibold">
						${post.price}
					</p>
				</div>

				{cart.some((p) => p.id === post.id) ? (
					<button
						className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
						onClick={removeFromCart}>
						Remove Item
					</button>
				) : (
					<button
						className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
						onClick={addToCart}>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export default Product;
