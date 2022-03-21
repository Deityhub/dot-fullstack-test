import React, { ReactChild, ReactChildren } from "react"

interface Props {
    children: ReactChild | ReactChildren,
    show: boolean,
    handleClose: () => void
}

const Modal: React.FC<Props> = (props) => {
    const showHideClassName = props.show ? "modal display-block cursor-pointer" : "modal display-none";
    const hideModal = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;

        if (target.id === 'modal-body') {
            props.handleClose()
        }
    }

    return (
        <div className={showHideClassName} onClick={hideModal} id="modal-body">
            <section className="modal-main cursor-default">
                {props.children}
                <button
                    onClick={props.handleClose}
                    className="cursor-pointer"
                >
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
