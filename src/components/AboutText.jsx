import React from "react";
import {renderHtmlContent} from "../utils/functions";

const renderText=(textArray)=>{
	return (
		textArray?.map((array, id)=>{
		if(array.includes("#"))
		{
			return (
				<h1 key={id} className="text-3xl text-[#212529] pb-4 pt-16">{array.replace(/#/g, "")}</h1>
			)
		}
		else return (
			<p key={id} className="text-[#6C757D] text-xl">{array}</p>
		)
	})
	)
};

export default function AboutText(sections, idx) {
	const {
		data: {
			section_text,
			section_image : {
				data: {
					attributes: {
						alternativeText: alt,
						url
					} = {}
				} = {}
			} = {}
		} = {}
	} = sections || {};
	const textArray=section_text.split("\n");

	return (
		<>
			<div className="container px-14">
			<div className="grid grid-cols-2 pt-20">
			<div className="-mb-24 ">
				<img
					src={url}
					alt={alt}
					className="h-4/5"
				/>
			</div>
			<div>
				{renderText(textArray)}
			</div>
		</div>
			</div>
			{/*<div>*/}
			{/*	{renderHtmlContent(section_text)}*/}
			{/*</div>*/}
		</>
	)
}