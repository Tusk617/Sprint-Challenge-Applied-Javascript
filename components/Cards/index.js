// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function articleCreator(obj) {
    //element creation
    const cardContainer = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          authorPic = document.createElement('img'),
          authorName = document.createElement('span');

    
    // class distribution
    cardContainer.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    //content
    headline.textContent = obj.headline;
    authorPic.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    //appending
    cardContainer.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(authorPic);


    return cardContainer;
}

// let topicsArray = ['javascript', 'bootstrap', 'technology', 'jquery', 'node']

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(response => {
    console.log(response);
    let articles = response.data.articles;
    console.log(articles);
    for (items in articles){
        // console.log(items);
        let topic = articles[items];
        console.log(topic);
        for (index in topic){
        document.querySelector('.cards-container').appendChild(articleCreator(topic[index]))
        }
    }
})

