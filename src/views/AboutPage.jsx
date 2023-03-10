import React, {useEffect, useState} from "react";
import DynamicZone from "../components/DynamicZone";
import {API_ROUTE} from "../utils/constants";

export default function AboutPage(){
	const [aboutpage, setAboutpage]=useState([]);

	useEffect(()=>{
		const fetchZones=async ()=>{
			const response=await fetch(API_ROUTE);
			const dataResponse=await response.json();
			setAboutpage(dataResponse);
		}
		fetchZones();
	}, [])

	const {
		data: {
			attributes: {
				dynamic_sections
			} = {}
		} = {}
	}=aboutpage || {};

	return (
		<>
			<div>
				<div className="overflow-hidden">
					<DynamicZone dynamicSectionsArray={dynamic_sections}/>
				</div>
			</div>
		</>
	);
}