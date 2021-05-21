import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Component/Card'
import movieData from './Component/SeriesData'
// console.log(movieData[0].name);
ReactDOM.render(
  <>
  <header>
  <h1>Top tv series</h1>
  </header>
  <div className="App">
<Card hrefLink={movieData[0].hrefLink} 
      img={movieData[0].img}
      name={movieData[0].name} 
      category={movieData[0].category} />,

<Card hrefLink={movieData[1].hrefLink} 
      img={movieData[1].img}
      name={movieData[1].name} 
      category={movieData[1].category} />
      
      <Card hrefLink={movieData[2].hrefLink} 
      img={movieData[2].img}
      name={movieData[2].name} 
      category={movieData[2].category} />
      
  <Card hrefLink={movieData[3].hrefLink} 
      img={movieData[3].img}
      name={movieData[3].name} 
      category={movieData[3].category} />
    
    <Card hrefLink={movieData[4].hrefLink} 
      img={movieData[4].img}
      name={movieData[4].name} 
      category={movieData[4].category} />

<Card hrefLink={movieData[5].hrefLink} 
      img={movieData[5].img}
      name={movieData[5].name} 
      category={movieData[5].category} />
      </div>

      <footer>
  <h1>ReactJS</h1>
      </footer>
      </>,     

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
