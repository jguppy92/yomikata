import axios from 'axios'

const allKanji = 'https://kanjiapi.dev/v1/kanji/all'
const joyoKanji = 'https://kanjiapi.dev/v1/kanji/joyo'

export function getAllKanji() {
  return axios.get(`${allKanji}`)
}

export function getJoyoKanji() {
  return axios.get(`${joyoKanji}`)
}