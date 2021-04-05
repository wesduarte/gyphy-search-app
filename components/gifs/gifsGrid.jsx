import GifItem from './gifItem';

export default function GifsGrid({gifsResults}) {
  return (
    <div className="giphy-search-results-grid">
      { gifsResults.map((gif) => {
          return <GifItem
            key={gif.id}
            title={gif.title}
            images={gif.images}
          />
        })
      }
    </div>
  )
}
