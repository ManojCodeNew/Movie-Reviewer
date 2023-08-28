// Accessing id and name of the movie at script.js
let movie_type_name=localStorage.getItem("name");
let ids=localStorage.getItem("id")
let movie_name_section=document.getElementById('h3');
movie_name_section.innerHTML=movie_type_name;
movie_name_section.style.fontSize="25px";
movie_name_section.style.color="";
movie_name_section.style.fontWeight="900";
movie_name_section.style.margin="0%";
movie_name_section.style.marginBottom="1%";
movie_name_section.style.padding="2%";
movie_name_section.style.borderRadius="9px";
movie_name_section.style.textAlign="center";
movie_name_section.style.background="linear-gradient(to bottom,#b60f46,#e27c39)";
// movie_name_section.style.background="linear-gradient(#cc2b5e,#753a88)";


let apikey="35e12f6ca3bd8bc9fccc68dcf71236e7";
let all_data=[];
let anchortag;
let img_id=[];
let img_class=[];
let images=[];
let imgtag;
let all_movies_gener;
let all_movies_gener_data=[];
let all_movies_id=[];
let all_movies_type=[];

// This for loop is used to looping page
for (let i = 1; i < 10; i++) {
  // This link 'i' represent the page and 'ids' represent the movie id
   let movies_gener_access_tool="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&page="+i+"&vote_average.gte=7.0&with_genres="+ids;
   async function fetch_data() {
    let promise=await fetch(movies_gener_access_tool);
    let convert_json=await promise.json();

    // Accessing results of promise object[convert_json]
    let results= await convert_json.results;

    // all_data variable stored all results of a movie id
    all_data.push(results);
    let data=[];
    data.push(results);
   
    // 
    function data_access() {
         data[0].forEach((k,l)=> {
            let div=document.getElementById('top');
            anchortag=document.createElement('a');
            anchortag.href="moviedetails.html";
            anchortag.id="a";

            imgtag=document.createElement('img');

            let img_path="https://image.tmdb.org/t/p/w500";
            let half_img_path=k.poster_path;
            let full_img_path=img_path+half_img_path;
            imgtag.src=full_img_path;
            imgtag.width="150";
            imgtag.height="200";
            imgtag.id=l;
            imgtag.style.borderRadius='10px';
            imgtag.style.padding='4px';
            imgtag.className=i; 
            imgtag.alt="Movies";
            
            document.body.append(div);
            div.appendChild(anchortag); 
            anchortag.appendChild(imgtag);

            imgtag.addEventListener('click',function(){
                let movie_name=k.original_title;
                //here access particular results data one by one 
                let movie_overview=k.overview;
                let movie_releasedate=k.release_date;
                let movie_average=k.vote_average;
                let clicked_img_path=k.poster_path;
                let default_img_path="https://image.tmdb.org/t/p/w500";
                let movie_img=default_img_path+clicked_img_path;
    
                // here you will give same key [""] and same value name it will give write output
                localStorage.setItem("movie_img", movie_img);
                localStorage.setItem("movie_name", movie_name);
                localStorage.setItem("movie_overview", movie_overview);
                localStorage.setItem("movie_releasedate", movie_releasedate);
                localStorage.setItem("movie_average", movie_average);
              
                }); 
         });    
    }
    data_access(); 
};
fetch_data();
};


 