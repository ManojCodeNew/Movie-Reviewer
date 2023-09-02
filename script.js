// constans
let apikey="35e12f6ca3bd8bc9fccc68dcf71236e7";
let movies_gener_access_tool="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey;

// storing null value for buttons hovering section
let selectedbtn=null;
let all_movies_gener=[];
let all_movies_gener_data=[];

// navbar section 
let navbar=document.createElement('div');
    navbar.style.border="1px";
    navbar.style.borderRadius="10px";
    document.body.append(navbar);
    let navbar_background_img=document.createElement('div');
    navbar_background_img.style.padding="50px";
    navbar_background_img.style.borderRadius="10px";
    navbar_background_img.style.backgroundImage="url(https://wallpapercave.com/wp/wp1945898.jpg)";
    navbar_background_img.style.animation="anime 6s linear infinite";
    navbar.appendChild(navbar_background_img);
    let Title=document.createElement('div');
    Title.textContent="Movie Reviewer";
    Title.style.textAlign="center";
    Title.style.color="rgba(100,50,20,0.9)";
    Title.style.fontSize="80px";
    Title.style.fontWeight="900";
    navbar_background_img.appendChild(Title);


// Main data section
let big_div=document.createElement('div');
let postersdiv=document.createElement('div');
document.body.append(postersdiv);
let buttons_div=document.createElement('div');
buttons_div.style.display='flex';
buttons_div.style.flexDirection='row';
buttons_div.style.overflowX='auto';

// show more section
let show_more_button=document.createElement('a');
show_more_button.textContent="Show All";
show_more_button.href="detail.html";
show_more_button.style.padding="1%";
show_more_button.style.border="1px";
show_more_button.style.backgroundColor="gray";
show_more_button.style.borderRadius="10px";

// Movie geners fetching
async function geners(){

    // here fetching the gener access tools
    let fetched=await fetch(movies_gener_access_tool);
    let json_gener=await fetched.json();
    all_movies_gener= await json_gener.genres;

    // storing gener objects in a array
    all_movies_gener_data=[all_movies_gener];

    // this foreach loop is used to create buttons
    all_movies_gener_data[0].forEach((i,j) => {
       
        // here creating all movie types buttons
        let button=document.createElement('p');
        button.className="geners";
        button.id=i.id;
        button.textContent=i.name;
        button.style.cursor='pointer';
        button.style.color='white';
        button.style.margin="1%";
        button.style.padding="1%";
        button.style.paddingTop="0.5%";
        button.style.paddingBottom="0.5%";
        buttons_div.style.textAlign="center";
        button.style.fontSize="16px";
        button.style.fontWeight="400";
        document.body.append(buttons_div);
        buttons_div.appendChild(button);
 
        // here button clicking section
        button.addEventListener('click',function() {
            postersdiv.textContent='';

          //  gener button hovering using null value 
            if (selectedbtn) {
            selectedbtn.style.background='';
            selectedbtn.style.color='white';
            selectedbtn.style.fontSize='';
            selectedbtn.style.borderRadius='';
            selectedbtn.style.borderStyle='';
           }
            button.style.backgroundColor='rgba(9,0,0,0.5)';
            button.style.color="#fd8a04";
            button.style.fontSize="15px";
            button.style.borderRadius="20%";
            button.style.borderStyle="solid";
            button.style.borderColor="white";
            button.style.borderWidth="1px";
             selectedbtn=button;
             let name=i.name;
             let id=i.id;
             show_more_button.id=i.id;
             show_more_button.className=i.name;

            // here pass the values in a local storage
             let all_movie_type_data=[];
             let particular_movie_anchortag;
             let particular_movie_imgtag;


// This for loop is used to looping page
for (let i = 1; i < 2; i++) {
  // This link 'i' represent the page and 'ids' represent the movie id
   let movies_gener_access_tool="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&page="+i+"&vote_average.gte=7.0&with_genres="+id;
  
   async function all_movie_fetch_data() {
    let promise=await fetch(movies_gener_access_tool);
    let convert_json=await promise.json();

    // Accessing results of promise object[convert_json]
    const results= await convert_json.results;

    // all_data variable stored all results of a movie id
    const data=[results];
    
    function all_movie_data_access() {
         data[0].forEach((k,l)=> {
            particular_movie_anchortag=document.createElement('a');
            particular_movie_anchortag.href="moviedetails.html";
            particular_movie_anchortag.id="a";

            particular_movie_imgtag=document.createElement('img');

            let img_path="https://image.tmdb.org/t/p/w500";
            let half_img_path=k.poster_path;
            let full_img_path=img_path+half_img_path;
            particular_movie_imgtag.src=full_img_path;
            particular_movie_imgtag.width='190';
            particular_movie_imgtag.height='250';
            particular_movie_imgtag.id=l;
            particular_movie_imgtag.style.borderRadius='5%';
            particular_movie_imgtag.style.padding='5px';
            particular_movie_imgtag.className="movie_poster"; 
            particular_movie_imgtag.alt="Movies";
           
            
            postersdiv.appendChild(particular_movie_anchortag); 
            particular_movie_anchortag.appendChild(particular_movie_imgtag);
            particular_movie_anchortag.appendChild(show_more_button);

            show_more_button.addEventListener('click',function(){
                // window.location.href="detail.html";
                movieid=show_more_button.id;
                moviename=show_more_button.className;
                localStorage.setItem("name",moviename);
                localStorage.setItem("id",movieid);
            })
            particular_movie_imgtag.addEventListener('click',function(){

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
   all_movie_data_access(); 

};
all_movie_fetch_data();

};
  })
    });
   document.body.append(big_div);
   big_div.appendChild(buttons_div);
   big_div.appendChild(postersdiv);
   

// constans of top movies
let all_data=[];
let anchortag;
let img_id=[];
let img_class=[];
let images=[];
let imgtag;
let all_movies_id=[];
let all_movies_type=[];

// Top movie section
let top_Movies_parent_div=document.createElement('div');
let top_Movies_heading=document.createElement('div');
top_Movies_heading.textContent="Top Movies";
top_Movies_heading.style.fontSize='2vw';
top_Movies_heading.style.fontWeight='900';
top_Movies_heading.style.padding='10px';
top_Movies_heading.style.margin='1%';
top_Movies_heading.style.color='#f1c40f';
top_Movies_heading.style.textShadow='1px 1px 2px rgba(0,0,0,0.5)';
top_Movies_parent_div.appendChild(top_Movies_heading);

// fetching top movies
for (let topmovies_index = 1; topmovies_index < 5; topmovies_index++) {  //this for loop used to loop the movie pages
  // top movie link
let Top_movies_api= "https://api.themoviedb.org/3/movie/popular?api_key="+apikey+"&language=en-US&page="+topmovies_index;

async function fetch_data() {
    let promise=await fetch(Top_movies_api);
    let convert_json=await promise.json();

    // Accessing results of promise object[convert_json]
    let results= await convert_json.results;

    // all_data variable stored all results of a movie id
    all_data.push(results);
    let data=[];
    data.push(results);
    
    function data_access() {
         data[0].forEach((k,l)=> {
            anchortag=document.createElement('a');
            anchortag.href="moviedetails.html";
            anchortag.id="a";
            imgtag=document.createElement('img');

            let img_path="https://image.tmdb.org/t/p/w500";
            let half_img_path=k.poster_path;
            let full_img_path=img_path+half_img_path;
            imgtag.src=full_img_path;
            imgtag.width='190';
            imgtag.height='250';
            imgtag.id=l;
            imgtag.style.borderRadius='10px';
            imgtag.style.padding='4px';
            imgtag.alt="Movies";
            imgtag.className="movie_poster";
            document.body.append(top_Movies_parent_div);
            
            top_Movies_parent_div.appendChild(anchortag);
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
}

}
geners();
