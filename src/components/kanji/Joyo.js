import React from 'react'
import { getJoyoKanji } from '../lib/api'

function Joyo() {
  const [joyoKanji, setJoyoKanji] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getJoyoKanji()
        setJoyoKanji(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  console.log(joyoKanji)

  return (
    <div className="columns is-half kanji-card-container">
      {joyoKanji.map(kanji => (
        <div key={kanji} className="kanji-card">
          <h1>{kanji}</h1>
        </div>
      ))}
    </div>
  )
}

export default Joyo