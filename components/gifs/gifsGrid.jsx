import GifItem from './gifItem';

export default function GifsGrid({gifsResults}) {
  return (
    <div className="giphy-search-results-grid">
      { gifsResults.map((gif, index) => {
          return <GifItem
            index={index}
            title={gif.title}
            images={gif.images}
          />
        })
      }
    </div>
  )
}
