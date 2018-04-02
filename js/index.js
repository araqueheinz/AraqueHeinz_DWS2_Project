

const KEY = `2055f069ebab88a96da56841e6da6b78`;
const imageURL = `https://image.tmdb.org/t/p/w500/`;
const urlPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`;
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`;
const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=zootopia`;

let popularMovies = document.querySelector('#most-popular-movies');
let featuredMoives = document.querySelector('#featured-movies');
let topRatedMovies = document.querySelector('#top-rated');


/* /////////////////////////////////////////////////////////////////////// */
/* /                        MOST POPULAR MOVIES                          / */
/* /////////////////////////////////////////////////////////////////////// */


fetch(urlPopularMovies)
.then(items => items.json())
.then(items => {
   
    let content = '<ul>';
    console.log(items.results);
    
   content += `
   <li>
   <h2>${items.results[0].original_title}</h2>
   <img src="${imageURL}${items.results[0].backdrop_path}" alt="${items.results[0].original_title}">
   </li>
   <li>
   <h2>${items.results[1].original_title}</h2>
   <img src="${imageURL}${items.results[1].backdrop_path}" alt="${items.results[0].original_title}">
   </li>
   </ul>
   `;
   
   popularMovies.innerHTML = content;
   })

/* /////////////////////////////////////////////////////////////////////// */
/* /                       FEATURED MOVIES                               / */
/* /////////////////////////////////////////////////////////////////////// */
    
fetch(urlPopularMovies)
.then(items => items.json())
.then(items => {
   
    let content = '<ul>';
    
    
   content += `
   <li>
   <h2>${items.results[2].original_title}</h2>
   <img src="${imageURL}${items.results[2].backdrop_path}" alt="${items.results[2].original_title}">
   </li>
   <li>
   <h2>${items.results[3].original_title}</h2>
   <img src="${imageURL}${items.results[3].backdrop_path}" alt="${items.results[3].original_title}">
   </li>
   <li>
   <h2>${items.results[4].original_title}</h2>
   <img src="${imageURL}${items.results[4].backdrop_path}" alt="${items.results[4].original_title}">
   </li>
   <li>
   <h2>${items.results[5].original_title}</h2>
   <img src="${imageURL}${items.results[5].backdrop_path}" alt="${items.results[5].original_title}">
   </li>
   </ul>
   `;
   
   featuredMoives.innerHTML = content;
   })

/* /////////////////////////////////////////////////////////////////////// */
/* /                       TOP RATED MOVIES                              / */
/* /////////////////////////////////////////////////////////////////////// */

fetch(urlTopRated)
.then(items => items.json())
.then(items => {
    console.log(items.results);
    let content = `
    <h1>Top Rated</h1>
    <ul>`;
    
    items.results.forEach(element =>{
        content += `
        <li>
        <img src="${imageURL}${element.poster_path}" alt="${element.original_title}">
        
        </li>
        `
    })

     content += '</ul>';
   
    topRatedMovies.innerHTML = content;
   })

  
/* /////////////////////////////////////////////////////////////////////// */
/* /                            SEARCH                                   / */
/* /////////////////////////////////////////////////////////////////////// */


let searchURL =`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=`

document.querySelector('#search-bottom').addEventListener('click', function(){
    
    let userSearch = document.querySelector('#search').value;
    let search = searchURL + userSearch;


    fetch(search)
    .then(items => items.json())
    .then(items => {
        console.log(items);

        if(items.results.length == 0){

            let content = `
            <h1>No Results!</h1>
            <ul>`;
            content += '</ul>';

                document.querySelector('#top-rated').innerHTML = content;

        }
        else{

            let content = `
            <h1>Search Results</h1>
            <ul>`;
            
            items.results.forEach(element =>{
                content += `
                <li>
                <img src="${imageURL}${element.poster_path}" alt="${element.original_title}">
                </li>
                `
            })
        
            content += '</ul>';

            document.querySelector('#top-rated').innerHTML = content;
        }
    
})


})
// data to the #results section
