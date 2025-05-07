import React from 'react';
import ComicsCard from './ComicsCard.jsx';
import comics from '../assets/dc-comics-2/comics.js'; // Importing the JSON file

const ListComics = () => {
  return ( 
    <div>
      <h1>List Comics</h1>
      <div className="comics-list">
        {comics.map((comic) => (
          <ComicsCard key={comic.id} title={comic.title} image={comic.thumb} price={comic.price} series={comic.series} sale_date={comic.sale_date} type={comic.type} artists={comic.artists} writers={comic.writers}/>
        ))}
      </div>
    </div>   
  )
}

export default ListComics;

/* <ComicsCard comics={comics[0]}/>
        <ComicsCard title={comics[0].title} image={comics[0].thumb}/>
        <ComicsCard title={comics[1].title} image={comics[1].thumb}/>
        <ComicsCard title={comics[2].title} image={comics[2].thumb}/>
        <ComicsCard title={comics[3].title} image={comics[3].thumb}/>
        <ComicsCard title={comics[4].title} image={comics[4].thumb}/>  
        <ComicsCard title={comics[5].title} image={comics[5].thumb}/>
        <ComicsCard title={comics[6].title} image={comics[6].thumb}/>
        <ComicsCard title={comics[7].title} image={comics[7].thumb}/>
        <ComicsCard title={comics[8].title} image={comics[8].thumb}/>
        <ComicsCard title={comics[9].title} image={comics[9].thumb}/> 
        <ComicsCard title={comics[10].title} image={comics[10].thumb}/>
        <ComicsCard title={comics[11].title} image={comics[11].thumb}/> */

