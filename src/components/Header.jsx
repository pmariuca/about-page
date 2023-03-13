import svg from '../menu.svg'
import svg1 from '../search.svg'
import svg2 from '../download.svg'
import svg3 from '../share.svg'
import light from '../light.svg'
import dark from '../dark.svg'

export default function Header() {
	return (
		<div className="w-screen bg-white h-12 relative block w-full">
			<div className="bg-[#343A40] absolute h-8 w-8 rounded-sm left-5 top-2">
				<button className="absolute left-2 top-3">
					<img src={svg}/>
				</button>
			</div>
			<p className="text-[#6C757D] absolute left-16 text-base flex items-center whitespace-nowrap top-3">About SAI</p>
			<div>
				<input type="text"
				       placeholder="Search Severe Asthma Index"
				       className="text-[#343A40] text-sm bg-[#F8F8F8] rounded border border-[#E9ECEF] absolute top-2 w-1/4 left-1/3 h-8"/>
				<img src={svg1} className="w-3 absolute left-1/3 top-5 ml-2"/>
			</div>
			<div className="bg-[#F8F8F8] absolute h-8 w-36 rounded-sm right-80 top-2 border border-[#E4E7EB]">
				<button className="absolute left-2 top-1 whitespace-nowrap">
					<img src={svg2} className="inline-block pr-1"/>
					<p className="text-[#212529] text-sm inline-block">Download Report</p>
				</button>
			</div>
			<div className="bg-[#F8F8F8] absolute h-8 w-16 rounded-sm right-60 top-2 border border-[#E4E7EB]">
				<button className="absolute left-2 top-1 whitespace-nowrap">
					<img src={svg3} className="inline-block pr-1"/>
					<p className="text-[#212529] text-sm inline-block">Share</p>
				</button>
			</div>
			<div className="absolute h-8 w-12 top-3 right-40">
				<input type="checkbox" className="hidden"/>
				<label for="checkbox" className="label">
					<div>
						<img src={light}/>
					</div>
					<div>
						<img src={dark}/>
					</div>
				</label>
			</div>
		</div>
	);
};