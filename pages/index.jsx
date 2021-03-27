import Head from 'next/head'
import { useGiphySearch } from './useGiphySearch';
import { useState } from 'react';

export default function Home(initialData) {

  const [formInputs, setFormInputs] = useState({})

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  }

  const search = (event) => {
    event.preventDefault()
  }

  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css"/>
      </Head>
      <h1>Gyphy Search App</h1>

      <form onSubmit={search}>
        <input name="searchTerm" onChange={handleInputs} type="text" required />
        <button>Search</button>
      </form>

      <div className="giphy-search-results-grid">
        {initialData.catGifs.data.map((each, index) => {
          return(
            <div key={index}>
              <h3>{each.title}</h3>
              <img src={each.images.original.url} alt={each.title}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await useGiphySearch().getGifs('cats')
  const catGifs = await response.json()
  return { props: { catGifs : catGifs } }
}
