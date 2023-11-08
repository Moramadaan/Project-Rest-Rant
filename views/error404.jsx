const React = require('react')
const Def = require('./defualt')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                    <image className="w-50 h-100" src="/images/image4.jpg" alt="animal" />
                    <div>
                      Photo by <a href="https://unsplash.com/@bielmorro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Biel Morro</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-gray-cat-peeking-at-the-table-bsSIk3LV_NE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
              </div>
            </main>
        </Def>
    )
}

module.exports = error404
