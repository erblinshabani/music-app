import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://soundcloud-downloader4.p.rapidapi.com/soundcloud/search',
  params: {query: 'Yêu 5'},
  headers: {
    'X-RapidAPI-Key': '952f9ddbfemsh9a4214e0f4b36c7p15ebf3jsn4f7ff4a0197b',
    'X-RapidAPI-Host': 'soundcloud-downloader4.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});