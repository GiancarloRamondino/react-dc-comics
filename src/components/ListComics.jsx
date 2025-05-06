import comics from "src/dc-comics-2/comics.js"
import React from "react"
import ComicsCard from "./ComicsCard"

const ListComics = () => {
  return (
    <div>
      <h1>List of Comics</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListComics


