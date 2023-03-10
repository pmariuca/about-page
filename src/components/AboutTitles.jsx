import React from "react";

export default function AboutTitles(sections, idx) {
	const {
		data: {
			section_title,
			section_description,
			about_tiles
		} = {}
	} = sections || {}

	return (
		<>
			<hr
				className="text-[#E9ECEF] mb-14 text-center ml-14 mr-14"
			/>
		<div className="px-14">
			<h1 className="text-3xl text-[#212529]">{section_title}</h1>
			<p className="text-[#6C757D] text-xl w-2/5 pt-4">{section_description}</p>
			<div className="grid grid-cols-3 gap-x-14 pt-16 pb-6 gap-y-5">
					{about_tiles?.map((about_tile, idx)=>{
						const {
							tile_title,
							tile_description,
							tile_icon: {
								data: {
									attributes: {
										alternativeText: alt,
										url
									} = {}
								} = {}
							} = {}
						} = about_tile || {}

						return (
							<div className="border-[#E9ECEF] border rounded px-4 py-2 pb-14" key={idx}>
								<img
									alt={alt}
									src={url}
								/>
								<h1 className="pt-3 text-xl text-[#6C757D] font-normal">{tile_title}</h1>
								<p className="text-base text-[#6C757D] pt-3">{tile_description}</p>
							</div>
						)
					})}
			</div>
		</div>
			<hr
				className="text-[#E9ECEF] mt-12 text-center ml-14 mr-14"
			/>
		</>
	)
}