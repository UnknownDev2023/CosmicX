import * as React from 'react'

const SvgComponent = (props) => (
  <svg width={10} height={9} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.058 8.026c-.049-.047-.255-.225-.425-.39C2.563 6.663.813 4.13.278 2.805.193 2.604.012 2.096 0 1.823c0-.26.06-.509.182-.746C.352.782.619.545.935.415 1.155.33 1.81.2 1.822.2 2.539.071 3.705 0 4.993 0 6.221 0 7.34.071 8.068.178c.011.012.826.142 1.105.284.51.26.827.77.827 1.314v.047c-.012.355-.33 1.101-.34 1.101-.536 1.254-2.2 3.729-3.306 4.723 0 0-.284.28-.462.402-.255.19-.57.284-.886.284-.353 0-.681-.106-.949-.307Z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
