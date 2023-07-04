import { styled } from "styled-components"
import { flexB } from "../../../../styled/common"
import { Button} from "react-bootstrap"



const ModalAdd = ({onClose}) => {




  return(
    <Wrraper>
        <Form>
          <Title>
            <ContentTT>질문 등록</ContentTT>
            <Button onClick={onClose}>X</Button>
          </Title>
          <Content>
            <SubTitle>글 제목</SubTitle>
            <input placeholder="제목을 입력해주세요"/>
            <SubConTent>
              <SubTitle>내용</SubTitle>
              <textarea placeholder="내용을 입력해주세요"></textarea>
            </SubConTent>
          </Content>
          <Button>ADD</Button>
        </Form>
    </Wrraper>
  )
}

export default ModalAdd





const Wrraper = styled.div`
  width: 460px;
  height: 560px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme}) => theme.PALLET.background.white};
  border-radius: 25px;
  border : 2px solid ${({theme}) => theme.PALLET.primary};
  padding: 40px;
`

const Form = styled.form`

  & > button{
    width: 100%;
  }

`

const Title = styled.div`
  ${flexB}
  border-bottom: 1px solid ${({theme}) => theme.PALLET.selectBlack.black};
  padding-bottom: 15px;
`

const ContentTT = styled.h2`
  font-size: ${({theme}) => theme.FONT_SIZE.large };
  text-align: center;
  font-weight: ${({theme}) => theme.FONT_WEIGHT.bold };
  line-height: ${({theme}) => theme.FONT_LINE.midum };;
`

const Content = styled.div`
  margin-top: 60px;
  text-align: left;

  & > input { 
      width: 100%;
      height: 46px;
      background-color: ${({theme}) => theme.PALLET.background.darkWihte};
      opacity: 0.6;
      margin: 10px 0;
      outline: none;
      border: none;
    
  }
`

const SubConTent = styled.div`
    margin: 10px 0;

    & > textarea { 
      width: 100%;
      height: 100px;
      background-color: ${({theme}) => theme.PALLET.background.darkWihte};
      opacity: 0.6;
      margin: 10px 0;
      outline: none;
      border: none;

       & ::placeholder{
        padding : 10px;
      }
  }

`


const SubTitle = styled.div`
`
