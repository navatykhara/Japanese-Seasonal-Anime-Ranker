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
		<div class="m-0 p-0 bg-cover bg-center">
			<div class="transition hover:scale-110 transition-opacity duration-1000 ease-out ">
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
			<div class="m-4">
				<t class=" font-mono font-medium text-4xl"> //Top 10 Japanese Animated Series of {data.data.Page.media[0].season} {data.data.Page.media[0].seasonYear} </t>
				<div class="p-0 m-0 inline-flex flex-wrap">
						<Link href='https://github.com/navatykhara/Japanese-Seasonal-Anime-Ranker' isExternal>
							<Image
								priority
								height={32}
								width={32}
								src='github-mark.svg'
								/>
						</Link>
				</div>
			</div>
			<div class="flex flex-wrap justify-center m-10 p-10 gap-20">
				{retrieveTopTenCurrentSeason()}
			</div>
			
		</NextUIProvider>
	)
}
