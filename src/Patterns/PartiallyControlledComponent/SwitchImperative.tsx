import { useState, useImperativeHandle, forwardRef } from "react"

const SwitchImperative = forwardRef((_, ref) => {
  const [on, updatedOn] = useState(false)

  const toogle = updatedOn(prevState => !prevState)

  useImperativeHandle(ref, () => ({
    toggle: toogle
  }))

  return <button ref={ref} onClick={toogle}>{on ? 'ON' : 'OFF'}</button>
})

SwitchImperative.displayName = 'Switch'

export default SwitchImperative