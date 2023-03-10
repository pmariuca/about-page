import React from "react";

export default function SimpleBanner(sections, idx) {
	const {
		data: {
			tag,
			description,
			banner_image: {
				data: {
					attributes: {
						url
					} = {}
				} = {}
			} = {}
		} = {}
	}=sections || {};

	return (
		<div
			style={{backgroundImage: `url(${url})`, height:"80vh", overflow:"hidden"}}
			className="bg-cover bg-center w-screen">
			<div className="w-3/5 absolute bottom-1/4 px-14">
				<p className="text-white font-thin text-3xl pb-5">{tag}</p>
				<p className="text-white font-thin text-5xl">{description}</p>
			</div>
		</div>
	);
}