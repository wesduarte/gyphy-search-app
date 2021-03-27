import Head from 'next/head'
import Link from 'next/link'
import { useGiphySearch } from './useGiphySearch'
import { useEffect, useState } from 'react'
import GifsGrid from './components/gifs/gifsGrid'

export default function Home(initialData) {

  const [formInputs, setFormInputs] = useState({})
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('cats')

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  }

  const search = async (event) => {
    event.preventDefault()
    const searchTerm = formInputs.searchTerm
    const response = await useGiphySearch().getGifs(searchTerm)
    const gifs = await response.json()
    setSearchResults(gifs.data)
    setSearchTerm(searchTerm)
  }

  useEffect(()=>{
    setSearchResults(initialData.catGifs.data)
  }, [initialData])

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

      <h1>Search results for: {searchTerm}</h1>

      <Link href="/search/[pid]" as={`/search/${searchTerm}`}>
        <a>Share this search with others</a>
      </Link>

      <GifsGrid gifsResults={searchResults} />
    </div>
  )
}

export async function getStaticProps() {
  const response = await useGiphySearch().getGifs('cats')
  const catGifs = await response.json()
  return { props: { catGifs : catGifs } }
}
