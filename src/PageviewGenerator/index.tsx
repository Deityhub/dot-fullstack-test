import React from 'react'
import { usePageviewGenerator } from './logic'
import PageviewList from '../PageviewList'

export const PageviewGenerator: React.FC = () => {
  const { generate, isAddingPageView, records } = usePageviewGenerator()

  return (
    <>
      <button style={{ fontSize: 24, marginBottom: 40 }} onClick={generate}>
        {isAddingPageView ? 'Generating pageview' : 'Generate pageview'}
      </button>

      <PageviewList eventList={records} />
    </>
  )
}
