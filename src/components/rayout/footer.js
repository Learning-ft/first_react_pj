
import { styled } from "styled-components"
import { flexCenter } from "../../styled/common"


const Footer = () => {

  return(
    <Wrrapper>
      footer 입니다. 
    </Wrrapper>

  )
}

export default Footer

const Wrrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({theme}) => theme.PALLET.primary };
  ${flexCenter}
`