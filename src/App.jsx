import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<div>
			<div className="bg-slate-900">
				<Navbar />
			</div>
			<Routes>
				<Route path="/ecomzy-shop" element={<Home />} />
				<Route path="/ecomzy-shop/cart" element={<Cart />} />
			</Routes>
		</div>
	);
};

export default App;
