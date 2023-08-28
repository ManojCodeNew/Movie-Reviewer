// here accessing all localstorage values 
let m_name = localStorage.getItem("movie_name");
let m_overview = localStorage.getItem("movie_overview");
let m_releasedate = localStorage.getItem("movie_releasedate");
let m_average = localStorage.getItem("movie_average");
let m_img=localStorage.getItem("movie_img");
let trailer_id;

// Creating div tag 
let movie_details_container=document.createElement('div');
movie_details_container.style.backgroundColor="rgba(0,0,0,0.5)";


movie_details_container.style.width="100%";
movie_details_container.style.height="50%";
movie_details_container.style.borderRadius="9px";
movie_details_container.style.paddingBottom="10%";

let div=document.createElement('div');
div.style.width='50%';
div.style.height='80%';
div.style.right='55%';
div.style.paddingTop='1%';
div.style.paddingLeft='3%';



// Creating h3 tag and h3 tag holding movie name of the movie
let name_holder=document.createElement('h3');
name_holder.id="movie_name";
name_holder.style.color="#eebd89";

name_holder.style.fontSize="30px";
name_holder.style.fontWeight="600";
name_holder.textContent=m_name;

// Creating paragraph tag and paragraph tag holding overview of the movie
let overview_heading=document.createElement('div');
overview_heading.textContent="Overview :";
overview_heading.style.color="#8bffff";
overview_heading.style.marginTop="4%";

let overview_holder=document.createElement('p');
overview_holder.id="movie_overview";
overview_holder.style.color="white";
overview_holder.style.marginTop="1%";
overview_holder.textContent=m_overview;

// Creating paragraph tag and paragraph tag holding release date of the movie

let date_div=document.createElement('div');
date_div.style.marginTop="0%";
let heading_of_date=document.createElement('p');
heading_of_date.style.marginTop="0%";
let date_holder=document.createElement('span');
heading_of_date.textContent="Release Date : ";
heading_of_date.style.color="#8bffff";
date_holder.id="movie";
date_holder.style.color="darkgray";
date_holder.textContent=m_releasedate;

// Creating paragraph tag and paragraph tag holding average of the movie
let average_div=document.createElement('div');
let star_image=document.createElement('img');
star_image.src="https://openclipart.org/image/2400px/svg_to_png/253968/GoldStar.png";
star_image.width='15';
star_image.height='15';

let avg_holder=document.createElement('span');
avg_holder.id="movie";
avg_holder.style.color="yellow";
avg_holder.style.padding="8px";
avg_holder.textContent=m_average;


// Creating Image tag and image tag holding all data 
let img_holder=document.createElement('img');
img_holder.id="movie";

img_holder.style.borderRadius='10%';
img_holder.src=m_img;
img_holder.alt="Sorry Image is not found";
img_holder.style.maxWidth='20%';
img_holder.style.maxHeight='40%';
img_holder.style.position='absolute';
img_holder.style.top='4%';
img_holder.style.left='60%';



// here append all html tags
document.body.append(div);
div.appendChild(name_holder);

div.appendChild(date_div);
date_div.appendChild(heading_of_date);
heading_of_date.appendChild(date_holder);

div.appendChild(average_div);
average_div.appendChild(star_image);
average_div.appendChild(avg_holder);

div.appendChild(overview_heading);
overview_heading.appendChild(overview_holder);

div.appendChild(img_holder);
document.body.append(movie_details_container);
movie_details_container.appendChild(div);


// video's section
let videos_container=document.createElement('div');
videos_container.style.display="flex";
videos_container.style.flexDirection="row";
videos_container.style.justifyContent="center";
videos_container.style.padding="1%";
// videos_container.style.marginRight="29%";



// Movie Trailer accessing section
let apikey="AIzaSyCa0k_y9XnVB00GwZ8nhBhlUCYIbmlP5rU";

let trailer_apilink="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q="+m_name+"trailer&type=video&key="+apikey;   
async function trailer_fetching() {
    let trailerResults=await fetch(trailer_apilink);
    let jsonconvert=await trailerResults.json();
    trailer_id=await jsonconvert.items[0].id.videoId;
    console.log(jsonconvert);
}
trailer_fetching();

   let  trailer_container=document.createElement('div');
   trailer_container.style.ma="10px"

   let trailer_container_heading=document.createElement('h3');
   trailer_container_heading.textContent="Trailer";
    trailer_container_heading.style.fontSize="20px";
    trailer_container_heading.style.fontWeight="900";

    let movie_trailer_holder=document.createElement('a');
    movie_trailer_holder.href="https://www.youtube.com/search?q="+m_name+" trailer";
    movie_trailer_holder.style.color="red";



    let trailer_logo=document.createElement('img');
    trailer_logo.src="https://media.istockphoto.com/id/937037522/photo/video-play-button-3d.jpg?s=612x612&w=0&k=20&c=v6ELtB2WitrxrtNwcey8K0FEJqvauc1JrIaE5j3971Y=";
    trailer_logo.style.width='50px';
    trailer_logo.style.height='50px';
    trailer_logo.alt="Trailer";
    trailer_logo.style.borderRadius="12%";
    trailer_logo.style.padding="1%";
    trailer_logo.style.marginLeft="2px"
    
    document.body.append(videos_container);
    videos_container.appendChild(trailer_container);
    trailer_container.appendChild(trailer_container_heading);
    trailer_container.appendChild(movie_trailer_holder);
    movie_trailer_holder.appendChild(trailer_logo);
    


let music_container=document.createElement('div');
music_container.style.paddingLeft="5%"
let music_container_heading=document.createElement('h3');
music_container_heading.textContent="Music";
music_container_heading.style.fontSize="20px";
music_container_heading.style.fontWeight="900";


let audio=document.createElement('a');
audio.href="https://music.youtube.com/search?q="+m_name+" songs";

let audio_logo=document.createElement('img');
audio_logo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZa_inleDCVx40Ex6LobToAZY506r4_a-pTbLAFyGJboP0xUxPfcQLHwCAmlC2QLQp9ck&usqp=CAU";
audio_logo.alt="This image is not loading...";
audio_logo.style.width="50px";
audio_logo.style.height="50px";
audio_logo.style.borderRadius="12%";
audio_logo.style.padding="1%";


videos_container.appendChild(music_container);
music_container.appendChild(music_container_heading);
music_container.appendChild(audio);
audio.appendChild(audio_logo);

let movie_review_container=document.createElement('div');
movie_review_container.style.paddingLeft="5%";



let movie_review_heading=document.createElement('h3');
movie_review_heading.textContent="Reviews";
movie_review_heading.style.fontSize="20px";
movie_review_heading.style.fontWeight="900";


let movie_review_linking=document.createElement('a');
movie_review_linking.href="https://www.youtube.com/search?q="+m_name+" reviews";
console.log(movie_review_linking);
let movie_review_logo=document.createElement('img');
movie_review_logo.src="https://thumbs.dreamstime.com/b/movie-reviews-icon-elegant-cyan-blue-diamond-button-movie-reviews-icon-isolated-elegant-cyan-blue-diamond-button-abstract-104730279.jpg";
movie_review_logo.alt="This image is not loading...";
movie_review_logo.style.width="50px";
movie_review_logo.style.height="50px";
movie_review_logo.style.marginLeft="10%";
movie_review_logo.style.borderRadius="10%";


videos_container.appendChild(movie_review_container);
movie_review_container.appendChild(movie_review_heading);
movie_review_container.appendChild(movie_review_linking);
movie_review_linking.appendChild(movie_review_logo);


