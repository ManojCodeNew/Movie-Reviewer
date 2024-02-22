let convert_into_json;
let final_data_of_json = [];
let search_box_div = document.getElementById('search_box_div');
let search_btn = document.getElementById('search_btn');
let movie_poster_container = document.getElementById('movie_poster_container');

let Search_box = document.createElement('input');
Search_box.type = 'search';
Search_box.value = '';
Search_box.placeholder = "Enter the Movie name..";
Search_box.style.padding = "15px";
Search_box.style.borderRadius = "15px";
search_box_div.appendChild(Search_box);
search_box_div.appendChild(search_btn);

let apikey = "35e12f6ca3bd8bc9fccc68dcf71236e7";
let finded_movies = [];

search_btn.addEventListener('click', function () {
    movie_name = Search_box.value;
    fetch_movie(movie_name);
    clearMoviePosters();

})


async function fetch_movie(moviename) {
    if (moviename == '') {
        alert('Enter movie name')
    }
    let movie_searching_link = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${moviename}`;
    let fetch_movie_section = await fetch(movie_searching_link);
    let convert_into_json = await fetch_movie_section.json();
    let movie_details = convert_into_json.results;
    display_movie(movie_details);

}
function display_movie(movie_details) {
    if (!movie_details) {
        alert("Error")
    }
    movie_details.forEach(items => {
        let first_half_poster_path = "https://image.tmdb.org/t/p/w500";
        let poster_linking = document.createElement('a');
        poster_linking.href = 'moviedetails.html';
        let poster = document.createElement('img');

        if (items.poster_path) {
            // poster.src = first_half_poster_path + '/bogkgrgdhrbyjslpxaxhxvstddv.jpg/'


            poster.src = first_half_poster_path + items.poster_path;
            poster.alt = items.title;
            poster.className = "poster";
            poster.style.width = "150px";
            poster.style.height = "200px";
            poster.style.marginTop = "3%";

            poster.style.borderRadius = '15px';
            poster.style.padding = '3px';
            poster.style.cursor = 'pointer';
            movie_poster_container.appendChild(poster_linking)
            poster_linking.appendChild(poster);
        }
        poster.addEventListener('mouseover',function() {
            poster.style.width='170px';
            poster.style.height='205px';
            poster.style.opacity='0.7';


        })
        poster.addEventListener('mouseout',function() {
            poster.style.width='150px';
            poster.style.height='200px';


        })
        poster.addEventListener('click', function () {
            
            let movie_img = first_half_poster_path + items.poster_path;
            let movie_name = items.title;
            let movie_average = items.vote_average;
            let movie_overview = items.overview;
            let movie_releasedate = items.release_date;

            localStorage.setItem("movie_img", movie_img);
            localStorage.setItem("movie_name", movie_name);
            localStorage.setItem("movie_overview", movie_overview);
            localStorage.setItem("movie_releasedate", movie_releasedate);
            localStorage.setItem("movie_average", movie_average);

        })


    });

}
function clearMoviePosters() {
    movie_poster_container.innerHTML = ''

}
