import React from "react";
import svg from "../Vector.svg";

const renderCards=(section_cards)=>{
	return (
		section_cards?.map((section_card, idx)=> {
			const {
				name,
				position,
				description,
				picture: {
					data: {
						attributes: {
							alternativeText: alt,
							url
						} = {}
					} = {}
				} = {}
			} = section_card || {}

			return (
				<div key={idx} className="pt-8">
					<div className="bg-[#F8F8F8] flex justify-center items-center h-96">
						<img
							alt={alt}
							src={url}
							className="rounded h-3/4"
						/>
					</div>
					<p className="text-xl text-[#212529] font-medium pt-6">{name}</p>
					<p className="text-base font-bold text-[#6C757D] pt-4 line-clamp-1">{position}</p>
					<p className="text-base text-[#6C757D] pt-2 line-clamp-1">{description}</p>
					<a
						href="#"
						className="text-[#6C757D] text-sm">
						View full profile
					</a>
					<img src={svg} className="inline pl-2"/>
				</div>
			)
		})
	)
};

export default function Committee(sections, idx) {
	const {
		data: {
			section_tag,
			section_title,
			section_cards
		} = {}
	} = sections || {}


	return (
		<>
		<hr
			className="text-[#E9ECEF] mt-16 mb-14 text-center ml-14 mr-14"
		/>
		<div className="px-14 pb-24">
			<p className="text-base text-[#6C757D] pb-1">{section_tag}</p>
			<p className="text-2xl text-[#212529]">{section_title}</p>
			<div className="grid grid-cols-3 gap-x-6 gap-y-5 w-screen pr-32">
				{renderCards(section_cards)}
			</div>
		</div>
		</>
	)
}