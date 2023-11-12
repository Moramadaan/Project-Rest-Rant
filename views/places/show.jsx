const React = require('react')
const Def = require('../defualt')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                <h2>
                  Rating
                </h2>
                <br />
                <p>not Rated</p>
                <br />
                <h2>
                  Description
                </h2>
                <h4>
                  Located in {data.place.city}, {data.place.state} Serving {data.place.cuisines}
                </h4>
              </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <p>no comment yet!</p>
            <hr />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form> 
          </main>
        </Def>
    )
}

module.exports = show

