import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGiphySearch } from '../../hooks/search/useGiphySearch'
import GifsGrid from '../../components/gifs/gifsGrid'
import Footer from '../../components/footer'

export default function Search(initialData) {

  const router = useRouter()
  return (
    <>
      <Head>
      <title>Search results for: {router.query.searchTerm}</title>
        <meta name="description" content={initialData.gifs.data.map((each, index) => each.title + ' ')}></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <p>Go <Link href="/"><a>home</a></Link></p>
      <h1>Search results for: {router.query.searchTerm}</h1>

      <GifsGrid gifsResults={initialData.gifs.data} />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm
  const response = await useGiphySearch().getGifs(searchTerm)
  const gifs = await response.json()
  return { props: { gifs } }
}
