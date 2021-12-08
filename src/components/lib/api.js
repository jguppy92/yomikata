import axios from 'axios'

const allKanji = 'https://kanjiapi.dev/v1/kanji/all'

export function getAllKanji() {
  return axios.get(`${allKanji}`)
}