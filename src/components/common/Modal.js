import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Modal = forwardRef( (props, ref) => {

    const [Open, setOpen] = useState(true);

    useImperativeHandle(ref, () => {
        return { open: () => {setOpen(true) }, idx: (idx) => idx }
    })

    return (
       Open && <aside className="modal" ref={ref}>
            <div className='con'>{props.children}</div>
            {/* <div style={{color: "#fff"}}>{props.Vids.map(item => item.id)}</div> */}
            <span className='close' onClick={() => setOpen(false)}>close</span>
        </aside>
    );
} ) 

export default Modal;