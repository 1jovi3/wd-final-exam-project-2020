let url = "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=yuNONjamnVchTIIA3tNlsspEr00xBKyU";

let headlines = document.getElementById("headlines");

fetch(url)
  .then(response => response.json())
  .then(data => { 

        console.log(data);

        data.results.map(article => {

            console.log(article.title);

            let a = document.createElement("a");
            a.setAttribute('href' , article.url);
            a.innerHTML = article.title;

            let p = document.createElement("p");
            p.innerHTML = article.abstract;

            let img = document.createElement("img");
            img.setAttribute('src' , article.multimedia[0].url);
    
    headlines.appendChild(a);
    headlines.appendChild(p);
    headlines.append(img); 
})
})    