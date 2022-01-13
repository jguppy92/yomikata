import React from 'react'
import { getAllKanji } from  '../lib/api'

function Home() {
  const [kanji, setKanji] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllKanji()
        setKanji(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  // console.log(kanji)

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half"
          >
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  placeholder="Search by Kanji, On'yomi or Kun'yomi..."
                  name="search"
                />
                <button type="submit" className="button is-warning">
                Log Me In!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <canvas className="kanji-anim">
        <h1>Kanji Anim</h1>
      </canvas>
    </section>
  )
}

export default Home