const React = require('react')
const Def = require('./defualt')


function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <image src="/images/image1.jpg" alt="Food Drink" />
                <div>
                  Photo by <a href="https://unsplash.com/@erol?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erol Ahmed</a> on <a href="https://unsplash.com/photos/blueberry-pie-on-plate-with-knife--N2Jdazh03Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home