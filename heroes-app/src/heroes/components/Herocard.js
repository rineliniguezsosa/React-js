

export const Herocard = ({superhero,publisher,alter,first,characters}) => {
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src="" alt={superhero}></img>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
