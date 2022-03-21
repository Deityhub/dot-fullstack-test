import React, { useState } from "react"
import Modal from "../Modal";
import { Pageview } from "../PageviewGenerator/logic";

interface Props {
    event: Pageview
}

const PageView: React.FC<Props> = ({ event }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <>
                    <h3>Pageview Event</h3>
                    <p><b>Event ID:</b> {event?.id}</p>
                    <p><b>Event date:</b> {event?.created_at}</p>
                    <p><b>Page title:</b> {event?.page?.title}</p>
                    <p><b>Page description:</b> {event?.page?.description}</p>
                    <p><b>Page tags:</b> {event.page?.tags?.join(', ')}</p>
                    <p><b>User ID:</b> {event?.user?.id}</p>
                    <p><b>User joined:</b> {event?.user?.created_at}</p>
                </>
            </Modal>
            <tr onClick={() => setShowModal(true)} className="cursor-pointer">
                <td>
                    {event?.id}
                </td>
                <td>
                    {event?.created_at}
                </td>
                <td>{event?.page?.title}</td>
            </tr>
        </>
    );
};

export default PageView;
