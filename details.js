let names=localStorage.getItem("name");
let ids=localStorage.getItem("id")
let h3=document.getElementById('h3');
h3.innerHTML=names;



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
// let data=[];


for (let i = 1; i < 233; i++) {
   let movies_gener_access_tool="https://api.themoviedb.org/3/discover/movie?api_key="+apikey+"&language=en-US&page="+i+"&vote_average.gte=7.0&with_genres="+ids;
   async function fetch_data() {
    let promise=await fetch(movies_gener_access_tool);
    let convert_json=await promise.json();
    let results= await convert_json.results;
    all_data.push(results);
    let data=[];
    data.push(results);
   //  console.log(data);
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
            imgtag.width=200;
            imgtag.height=250;
            imgtag.id=l;
            imgtag.style.borderRadius='10px';
            imgtag.style.padding='4px';



             imgtag.className=i; 
            //  console.log(imgtag.className);
             
            imgtag.alt="Movies";
            
            document.body.append(div);
            div.appendChild(anchortag); 
            anchortag.appendChild(imgtag,i);
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

 