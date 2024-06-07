import React from 'react'
import { createPortal } from 'react-dom'
export default function Modal({children}) {
  return (
   createPortal( <dialog>
    {children}
</dialog>,getelementById('modal-root')
  )
}
