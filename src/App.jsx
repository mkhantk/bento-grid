import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import fiveStar from "./assets/images/illustration-five-stars.webp";
import ai from "./assets/images/illustration-ai-content.webp";
import audience from "./assets/images/illustration-audience-growth.webp";
import consist from "./assets/images/illustration-consistent-schedule.webp";
import create from "./assets/images/illustration-create-post.webp";
import grow from "./assets/images/illustration-grow-followers.webp";
import mulplat from "./assets/images/illustration-multiple-platforms.webp";
import postsch from "./assets/images/illustration-schedule-posts.webp";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="container max-w-6xl m-auto">
			<div className=" grid grid-cols-1 px-3 py-8 gap-10 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
				<div className="bg-purple-500 rounded-lg p-8 sm:col-span-2 lg:p-12">
					<div className="text-5xl font-bold text-white text-center lg:text-6xl mb-5">
						Social Media <span className="text-yellow-500">10x</span>
						<em> Faster </em>
						with AI
					</div>
					<img src={fiveStar} alt="" className="w-48 m-auto py-2 " />
					<p className="text-center text-xl text-white">
						Over 4,000 5-star reviews
					</p>
				</div>

				<div className="p-6 bg-white relative rounded-xl pr-px overflow-hidden ">
					<img
						src={mulplat}
						alt=""
						className="lg:h-16 lg:object-cover lg:object-left mb-5"
					/>
					<div className="text-2xl font-bold lg:text-3xl lg:leading-6 lg:pr-8">
						Manage multiple accounts and platforms.
					</div>
				</div>

				<div className="bg-yellow-400 rounded-xl p-3 overflow-hidden lg:p-5 ">
					<div className="text-2xl pr-2 mb-2 leading-5 font-bold lg:text-3xl lg:leading-6 lg:mb-5">
						Maintain a consistent posting schedule.
					</div>
					<img src={consist} alt="" className="w-56 -mb-9 lg:-mb-20" />
				</div>

				<div className="bg-purple-100 rounded-xl px-5 lg:pr-px lg:col-span-1 sm:row-span-2 lg:col-start-4 lg:row-start-1  relative ">
					<div className="text-center text-2xl py-5 lg:text-3xl lg:font-bold lg:text-start lg:leading-6">
						Schedule to social media
					</div>
					<img
						src={postsch}
						alt=""
						className="lg:h-80 lg:object-cover lg:object-left"
					/>
					<div className="text-center px-2 py-5 text-lg lg:text-start">
						Optimize post timings to publish content at the perfect time for
						your audience.
					</div>
				</div>

				<div className="bg-purple-700 px-16 py-8 lg:px-6 lg:py-4 rounded-xl flex flex-col lg:flex-row lg:col-span-2 lg:col-start-3">
					<img src={grow} alt="" className="mb-6 w-60 lg:mb-0" />
					<div className="text-3xl text-white text-center lg:text-4xl lg:font-bold lg:text-start lg:m-auto">
						Grow followers with non-stop content.
					</div>
				</div>

				<div className="bg-white p-5 rounded-xl lg:col-start-2 lg:row-start-3">
					<div className="text-5xl lg:font-bold">&gt;56%</div>
					<p className="text-lg py-4">faster audience growth</p>
					<img src={audience} alt="" className="w-48" />
				</div>

				<div className="grid gap-10 sm:grid-cols-2 sm:col-span-2 lg:grid-cols-1 lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-3">
					<div className="bg-yellow-100 rounded-xl p-6   ">
						<p className="text-3xl py-3 leading-7 font-semibold sm:text-4xl sm:leading-6 lg:leading-7">
							Create and schedule content
							<span className="text-purple-500 italic"> quicker.</span>
						</p>
						<img src={create} alt="" className="py-3 w-48" />
					</div>
					<div className="bg-yellow-400 rounded-xl p-6 lg:flex lg:flex-col lg:justify-between  ">
						<div className="text-3xl font-semibold leading-6 mb-5 lg:text-4xl lg:leading-9">
							Write your content using AI.
						</div>
						<img src={ai} alt="" className="w-56 lg:w-64 " />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
