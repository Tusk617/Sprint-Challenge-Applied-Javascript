// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //creating elements
    const header = document.createElement('div'),
          date = document.createElement('span'),
          mainHeading = document.createElement('h1'),
          temperature = document.createElement('span');

    // applying classes
    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    //text content
    date.textContent = 'March 28, 2019';
    mainHeading.textContent = 'Lambda Times';
    temperature.textContent = '98°';


    // appending      
    header.append(date, mainHeading, temperature);

    return header;
}

document.querySelector('.header-container').appendChild(Header());