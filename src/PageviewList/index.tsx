import React from 'react'
import { Pageview } from '../PageviewGenerator/logic'
import PageView from './pageview'

interface Props {
    eventList: Pageview[]
}

const PageviewList: React.FC<Props> = (props) => {
    return (
        <>
            <table id="events">
                <thead>
                    <tr>
                        <td>
                            Event ID
                        </td>
                        <td>
                            Event Date
                        </td>
                        <td>Page Title</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.eventList && props.eventList.length !== 0 && props.eventList.map(event => (
                            <PageView key={event?.id} event={event} />
                        ))
                    }
                </tbody>
            </table>
            {
                (!props.eventList || props.eventList.length === 0) && (
                    <span style={{ fontSize: 16 }}>No event generated yet</span>
                )
            }
        </>
    )
}

export default PageviewList