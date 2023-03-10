import React from "react";
import SimpleBanner from "./SimpleBanner";
import AboutText from "./AboutText";
import AboutTitles from "./AboutTitles";
import Committee from "./Committee";
import {SECTION_TYPE} from "../utils/constants";

function renderDynamicSection(sections, idx, Component) {
	return (
		<div key={idx}>
			<Component data={sections} key={idx}/>
		</div>
	)
};

function renderDynamicSectionsByType(dynamicSectionsArray) {
	return dynamicSectionsArray?.map((sections, idx)=>{
		switch(sections?.__component){
			case SECTION_TYPE.BANNER: {
				return renderDynamicSection(sections, idx, SimpleBanner);
			}
			case SECTION_TYPE.TEXT: {
				return renderDynamicSection(sections, idx, AboutText);
			}
			case SECTION_TYPE.TITLE: {
				return renderDynamicSection(sections, idx, AboutTitles);
			}
			case SECTION_TYPE.COMMITTEE: {
				return renderDynamicSection(sections, idx, Committee);
			}
		}
	})
};

export default function DynamicZone(props) {
	const {dynamicSectionsArray}=props || {};

	return (
		<div>
			{renderDynamicSectionsByType(dynamicSectionsArray)}
		</div>
	);
}