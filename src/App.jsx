import { Button } from "."

const app = () => {
  return (
    <Button bg={"green"} text={"red"} title={"click me"} onClick={() => { alert("button clicked") }} />
  )
}

export default app