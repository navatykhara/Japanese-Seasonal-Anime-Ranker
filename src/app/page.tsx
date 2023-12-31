"use client";

import Image from 'next/image'
import {NextUIProvider, Link} from "@nextui-org/react";
import MyCard from './card'
import data from 'public/topten_data.json'

function retrieveTopTenCurrentSeason(){
	
	let tt = [];
	let anime;
	for(let i = 0; i < 10; i++){
		anime = data.data.Page.media[i]
		console.log(anime.siteUrl)
		tt.push(
		<div className="m-0 p-0 bg-cover bg-center">
			<div className="transition hover:scale-110 transition-opacity duration-1000 ease-out ">
				<MyCard title={anime.title.romaji} cover={anime.coverImage.extraLarge} url={anime.siteUrl} />
			</div>

		</div>
		);
	}
	
	return tt;
	
}


export default function Home() {
	
	//getAPIData();
	
	
	return (
		<NextUIProvider>
			<title> Japanese Seasonal Anime Ranker </title>
			<div className="m-4">
				<div className="flex flex-wrap ">
					<p className="font-mono font-medium text-4xl m-1"> #Top 10 Japanese Animated Series of {data.data.Page.media[0].season} {data.data.Page.media[0].seasonYear} </p>
					<div className="p-0 m-1">
							<Link href='https://github.com/navatykhara/Japanese-Seasonal-Anime-Ranker' isExternal>
								<Image
									priority
									height={32}
									width={32}
									src='github-mark.svg'
									alt='Github'
									/>
							</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center m-10 p-10 gap-20">
				{retrieveTopTenCurrentSeason()}
			</div>
			
		</NextUIProvider>
	)
}
