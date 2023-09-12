function getAPIData(){
	
	var seasons_list=["WINTER", "SPRING", "SUMMER", "FALL"];
	var seasons_index=0;

	const date = new Date();
	const month = date.getMonth();

	var anime_jsons=[];

	if(month >= 0 && month <= 3){
		seasons_index=0;
	}else if(month >= 4 && month <= 6){
		seasons_index=1;
	}else if(month >= 7 && month <= 9){
		seasons_index=2;
	}else if(month >= 9 && month <= 11){
		seasons_index=3;
	}


	var query = `
	query ($season: MediaSeason!, $seasonYear: Int!, $page: Int, $popularity: Int) {
	  Page(page: $page) {
		pageInfo {
		  total
		  perPage
		  currentPage
		  lastPage
		  hasNextPage
		}
		media(season: $season, seasonYear: $seasonYear, type: ANIME, 
		  sort: POPULARITY_DESC, popularity: $popularity, format: TV) {
		  id
		  title {
			romaji
		  }
		  startDate {
			year
			month
			day
		  }
		  season
		  seasonYear
		  popularity
		  coverImage{
			extraLarge
			color
		  }
		  siteUrl
		}
	  }
	}
	`;

	var variables = {
		page: 1,
		season: seasons_list[seasons_index],
		seasonYear: 2023
	};

	var url = 'https://graphql.anilist.co';
	var options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				variables: variables
			})
		};
		
	function handleResponse(response) {
		return response.json().then(function (json) {
			return response.ok ? json : Promise.reject(json);
		});
	}

	function handleData(data) {

		for(let i = 0; i < 10; i++){
			anime_jsons.push(data.data.Page.media[i])
			console.log(data.data.Page.media[i])
		}
		var fs = require('fs');
		fs.writeFile("public/topten_data.json", JSON.stringify(data, null, 2), function(err) {
		if (err) {
			console.log(err);
		}
	});

	}

	function handleError(error) {
		//alert('Error, check console');
		console.error(error);
	}

	fetch(url, options).then(handleResponse)
					   .then(handleData)
					   .catch(handleError);
}

module.exports = getAPIData;
