import { useState, useEffect } from "react"
import cuid from "cuid"
import { loremIpsum } from "lorem-ipsum"
import axios from 'axios'

const BASE_URL = 'http://18.218.168.41:3100/api/v1'

export interface Pageview {
  id: string
  created_at: Date

  page: {
    title: string
    description: string
    tags: string[]
  }

  user: {
    id: string
    created_at: Date
  }
}

const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

export const usePageviewGenerator = () => {
  const [pageview, setPageview] = useState<Pageview | null>(null)
  const [isAddingPageView, setIsAddingPageView] = useState<boolean>(false)
  const [records, setRecords] = useState<Pageview[]>([])

  useEffect(() => {
    axios(`${BASE_URL}/store`).then(res => {
      setRecords(res.data.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const generate = async () => {
    if (isAddingPageView) return;

    setIsAddingPageView(true);

    const event: Pageview = {
      id: cuid(),
      created_at: new Date(),

      page: {
        title: loremIpsum(),
        description: loremIpsum({ count: 3 }),
        tags: Array.from({ length: Math.floor(Math.random() * 10) }, () =>
          loremIpsum({ units: 'words', count: 1 })
        )
      },

      user: {
        id: `USER${cuid()}`,
        created_at: randomDate(new Date(2019, 0, 1), new Date())
      }
    }

    // add event to datastore
    await axios.post(`${BASE_URL}/store`, event).then(res => {
      setRecords(prevState => [res.data.data, ...prevState])
      setPageview(event)
      setIsAddingPageView(false)
    })
  }

  return {
    generate,
    pageview,
    isAddingPageView,
    records
  }
}
