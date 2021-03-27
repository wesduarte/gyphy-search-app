import Head from 'next/head'
import { useRouter } from 'next/router'
import { useGiphySearch } from '../useGiphySearch'
import GifsGrid from '../components/gifs/gifsGrid'

export default function Search(initialData) {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <h1>Search results for: {router.query.searchTerm}</h1>

      <GifsGrid gifsResults={initialData.gifs.data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm
  const response = await useGiphySearch().getGifs(searchTerm)
  const gifs = await response.json()
  return { props: { gifs } }
}
