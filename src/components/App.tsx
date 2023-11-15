import { useEffect } from "react"
import Button from "./Button"
function App() {
  const tele  = window.Telegram.WebApp
  useEffect(()=>{
    tele.ready()
  })
  return (
    <>
      <h1>
        I am here !
      </h1>
        <Button type="add" title="Add" />
        <Button type="remove" title="Remove" />
        <Button type="checkout" title="Checkout" />
    </>
  )
}

export default App
