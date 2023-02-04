import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio?: string;
  }[];
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[]
    }[];
  }[]
}[]

type Error = {
  error: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  console.log('api called')
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/apple`)
    .then((resp) => resp.json())
    .then((data) => {
      res.status(200).json(data)
    })
    .catch(err => res.status(400).json({ error: 'Not Found' }))
  // res.status(200).json({ name: 'John Doe' })
}