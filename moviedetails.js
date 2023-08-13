let m_name = localStorage.getItem("movie_name");
let m_overview = localStorage.getItem("movie_overview");
let m_releasedate = localStorage.getItem("movie_releasedate");
let m_average = localStorage.getItem("movie_average");
let m_img=localStorage.getItem("movie_img");

let div=document.createElement('div');
div.style.width='500px';
div.style.padding='5px';
div.style.borderRadius='30px';


div.style.backgroundColor='black';


let name_holder=document.createElement('h3');
name_holder.id="movie_name";
name_holder.style.color="chocolate";
name_holder.style.fontSize="25px";
name_holder.style.fontWeight="100";
// name_holder.style.textShadow="2px 2px 4px rgba(0,0,0, 0.5)";
name_holder.textContent=m_name;

let overview_holder=document.createElement('p');
overview_holder.id="movie_overview";
overview_holder.style.color="white";
overview_holder.textContent=m_overview;

let date_holder=document.createElement('p');
date_holder.id="movie";
date_holder.style.color="orange";
date_holder.textContent=m_releasedate;

let avg_holder=document.createElement('p');
avg_holder.id="movie";
avg_holder.style.color="yellow";
avg_holder.textContent=m_average;

let img_holder=document.createElement('img');
img_holder.id="movie";
 img_holder.style.padding='12px';
 img_holder.style.borderRadius='30px';
img_holder.src=m_img;
img_holder.alt="Sorry Image is not found";
img_holder.style.width='200px';
img_holder.style.height='250px';
img_holder.style.position='absolute';
img_holder.style.top='0px';
img_holder.style.left='520px';



document.body.append(div);
div.appendChild(name_holder);
div.appendChild(date_holder);
div.appendChild(avg_holder);
div.appendChild(overview_holder);
div.appendChild(img_holder);
