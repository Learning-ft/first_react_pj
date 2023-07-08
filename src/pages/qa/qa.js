import { styled } from "styled-components"
import { Button } from "react-bootstrap"
import ModalAdd from "./componets/Modal/addmodal"
import { useState } from "react"
import Qalists from "./componets/List/qa-list"


const QaPage = () => {

  const [isModal, setIsmodal] = useState(false)

  const handleOpenModal = () => {
    setIsmodal(true)
  }

  const onClose = () => {
    setIsmodal(false)
  }



  return(
    <>
      {isModal && <ModalAdd onClose={onClose} />}
      <Banner>
        <Overay>
          <Title>Q&A</Title>
        </Overay>
      </Banner>
      <Continer>
        <div>
            <ContentTT>질문/답변</ContentTT>
            <Content>내가 궁금했던 내용을 질문하고, 아는 질문에는 댓글도 남겨주세요.</Content>
            <StyledButton onClick={handleOpenModal} >등록하기</StyledButton>
        </div>
        <div></div>
      </Continer>
      <Qalists/>
    </>
  )
}

export default QaPage



const Banner = styled.div`
  width: 100%;
  height: 380px;
  background: url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80")  no-repeat center;
  position: relative;
`

const Overay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 380px;
`

const Title = styled.h1`
  font-size: ${({theme}) => theme.FONT_SIZE.Title };
  text-align: center;
  color: ${({theme}) => theme.PALLET.background.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Continer = styled.div`
  padding: 120px 0;
  & > div{
    text-align: center;
  }

`

const ContentTT = styled.h2`
  font-size: ${({theme}) => theme.FONT_SIZE.large };
  text-align: center;
  font-weight: ${({theme}) => theme.FONT_WEIGHT.bold };
  line-height: ${({theme}) => theme.FONT_LINE.midum };;
`
const Content = styled.p`
  font-size: ${({theme}) => theme.FONT_SIZE.midum };
  text-align: center;
`
const StyledButton = styled(Button)`
  color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
  background-color: ${({theme}) => theme.PALLET.background.white};
  margin: 0 auto;

  &:hover{
    background-color: palevioletred;
    color: ${({theme}) => theme.PALLET.background.white};
    transition: 0.3s;
    padding: 0.25em 1em;
    border: 2px solid  ${({theme}) => theme.PALLET.background.white};
  }

  &:active{
    background-color: palevioletred;
    color: ${({theme}) => theme.PALLET.background.white};
    transition: 0.3s;
  }
`