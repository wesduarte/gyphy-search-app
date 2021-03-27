export default function GifItem({index, title, images}) {
  return (
    <div key={index} className="giphy-search-result-item">
      <h3>{title}</h3>
      <img src={images.original.url} alt={title}/>
    </div>
  )
}
