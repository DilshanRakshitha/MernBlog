import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function DashBoard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect()
  return (
    <div>DashBoard</div>
  )
}
