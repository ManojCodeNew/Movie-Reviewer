let apikey="35e12f6ca3bd8bc9fccc68dcf71236e7";
let movies_gener_access_tool="https://api.themoviedb.org/3/genre/movie/list?api_key="+apikey;

let all_movies_gener=[];
let all_movies_gener_data=[];


async function geners(){

    let fetched=await fetch(movies_gener_access_tool);
    let json_gener=await fetched.json();
    all_movies_gener= await json_gener.genres;
    all_movies_gener_data=[all_movies_gener];
    // console.log(all_movies_gener_data);
    all_movies_gener_data[0].forEach((i,j) => {
        // console.log(i);
        // let div=document.createElement('div');
        let button=document.createElement('button');
        button.textContent=i.name;
        button.style.margin='12px';
        document.body.append(button);

        // div.appendChild(button);
        button.addEventListener('click',function() {
              window.location.href="detail.html";
            let name=i.name;
            let id=i.id;
            localStorage.setItem("name",name);
            localStorage.setItem("id",id);
        })
    });
  

}
geners();



