export default function GifItem({title, images}) {
  return (
    <div className="giphy-search-result-item">
      <h3>{title}</h3>
      <img src={images.original.url} alt={title}/>
    </div>
  )
}
