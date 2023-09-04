import "./App.scss";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Footer from "./components/Footer/Footer";
import Gig from "./pages/gig/gig";
import Gigs from "./pages/gigs/gigs";
import Login from "./pages/login/login";
import Add from "./pages/add/Add";
import Message from "./pages/message/message";
import MyGigs from "./pages/myGigs/myGigs";
import Messages from "./pages/messages/messages";
import Orders from "./pages/Orders/Orders";
import Register from "./pages/register/register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/Success/Success";

function App() {
	const queryClient = new QueryClient();

	const Layout = () => {
		return (
			<div className="app">
				<QueryClientProvider client={queryClient}>
					<Navbar />
					<Outlet />
					<Footer />
				</QueryClientProvider>
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/gigs",
					element: <Gigs />,
				},
				{
					path: "/gig/:id",
					element: <Gig />,
				},
				{
					path: "/orders",
					element: <Orders />,
				},
				{
					path: "/mygigs",
					element: <MyGigs />,
				},
				{
					path: "/add",
					element: <Add />,
				},
				{
					path: "/messages",
					element: <Messages />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/message/:id",
					element: <Message />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/pay/:id",
					element: <Pay />,
				},
				{
					path: "/success",
					element: <Success />,
				},
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
