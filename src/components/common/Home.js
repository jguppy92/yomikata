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
  console.log(kanji)

  return (
    <body>
      <h1>{kanji[700]}</h1>
    </body>
  )
}

export default Home