import { styled } from "styled-components"
import OneCard from "./one-card"
import { container } from "../../styled/common"


const Mainpage = () => {
  return(
    <Container>
      <OneCard/>
    </Container>

  )
}

export default Mainpage


const Container = styled.div`
  ${container}
`
