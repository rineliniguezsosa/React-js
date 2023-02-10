

export function Griditem({titulo,url}) {
  return (
    <div className="card">
        <img src={url} alt={titulo}></img>
    </div>
  )
}
