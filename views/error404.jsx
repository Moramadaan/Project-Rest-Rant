const React = require('react')
const Def = require('./defualt')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <p>Oops, sorry we can't find this page!</p>
                <div>
                    <image src="/images/image2.jpg" alt="animal" />
                    <div>
                    Photo by <a href="https://unsplash.com/@hhh13?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">傅甬 华</a> on <a href="https://unsplash.com/photos/brown-and-white-cat-in-shallow-focus-shot-tEMU4lzAL0w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
              </div>
            </main>
        </Def>
    )
}

module.exports = error404
