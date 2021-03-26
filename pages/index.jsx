import Head from 'next/head'
import { useGiphySearch } from './useGiphySearch';

export default function Home(initialData) {

  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css"/>
      </Head>
      <h1>Gyphy Search App</h1>

      <div class="giphy-search-results-grid">
        {initialData.catGifs.data.map((each, index) => {
          return(
            <div key="index">
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
