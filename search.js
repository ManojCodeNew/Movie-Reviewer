let convert_into_json;
let final_data_of_json = [];
let search_box_div=document.getElementById('search_box_div');
let search_btn=document.getElementById('search_btn');

let Search_box = document.createElement('input');
Search_box.type = 'search';
Search_box.value = '';
Search_box.placeholder = "Enter the Movie name..";
Search_box.style.padding = "15px";
Search_box.style.borderRadius = "15px";
Search_box.onchange = onChangehandle;
search_box_div.appendChild(Search_box);
search_box_div.appendChild(search_btn);


const movie_search_name = []
let All_movie = []

// let search_data='';

let apikey = "35e12f6ca3bd8bc9fccc68dcf71236e7";
// console.log(Search_box.value);

for (i = 0; i < 20; i++) {
    let movies_access_tool = "https://api.themoviedb.org/3/discover/movie?api_key=" + apikey + "&language=en-US&page=" + i + "&vote_average.gte=7.0";
    async function Fetch_data() {
        let api_provide_data = await fetch(movies_access_tool)
        convert_into_json = await api_provide_data.json();
        final_data_of_json.push(convert_into_json)
        final_data_of_json.filter((response) => {
            // console.log(response.results);
            All_movie.push(response.results)
        })

    }

    Fetch_data();
}
let img_linking=document.createElement('a');
img_linking.href= "moviedetails.html";
let poster_container = document.createElement('img');

function onChangehandle(e) {
    let search_data = e.target.value;
    search_btn.addEventListener('click',function (){
    if (All_movie) {
        All_movie.some((element, index) => {
            return element.some((movie, i) => {

                if (movie.title == search_data) {

                    let movie_poster_container = document.createElement('div');

                    movie_poster_container.id = "movie_poster";
                    poster_container.id = "poster";
                    let first_half_poster_path = "https://image.tmdb.org/t/p/w500";
                    poster_container.src = first_half_poster_path + movie.poster_path;
                    poster_container.alt = movie.title;
                    poster_container.style.borderRadius = '10px';
                    // poster_container.style.padd = '20px';

                    poster_container.style.width = "200px";
                    poster_container.style.height = "250px";
                    document.body.append(movie_poster_container);
                    movie_poster_container.appendChild(img_linking);
                    img_linking.appendChild(poster_container);


                
                    let movie_img=first_half_poster_path+movie.poster_path;
                    let movie_name=movie.title;
                    let movie_average=movie.vote_average;
                    let movie_overview=movie.overview;
                    let movie_releasedate=movie.release_date;

                    localStorage.setItem("movie_img", movie_img);
                    localStorage.setItem("movie_name", movie_name);
                    localStorage.setItem("movie_overview", movie_overview);
                    localStorage.setItem("movie_releasedate", movie_releasedate);
                    localStorage.setItem("movie_average", movie_average);
    
                    return true;
                }

            })
        })

    }
    })
    
}

console.log(All_movie);

