import Stack from 'react-bootstrap/Stack';
import { styled } from 'styled-components';
import { container } from '../../styled/common';




const Header = () => {

  return(
    <Wrrapper>
      <Container>
        <Stack direction="horizontal" gap={3}>
        <div className="p-2">로고</div>
        <div className="p-2 ms-auto">로그인</div>
        <div className="vr" />
        <div className="p-2">회원가입</div>
        <div className="p-2">Q&A</div>
        </Stack>
      </Container>
    </Wrrapper>
  )
}

export default Header

const Wrrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.PALLET.background.darkWihte};
`

const Container = styled.div`
  ${container}
`