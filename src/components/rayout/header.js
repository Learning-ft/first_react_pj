import Stack from 'react-bootstrap/Stack';
import { styled } from 'styled-components';
import { container } from '../../styled/common';
import { Link } from 'react-router-dom';




const Header = () => {

  return(
    <Wrrapper>
      <Container>
        <Stack direction="horizontal" gap={3}>
        <Link to={'/'} className="p-2">로고</Link>
        <Link to={'/Login'} className="p-2 ms-auto">로그인</Link>
        <div className="vr" />
        <Link to={'/SignUp'} className="p-2">회원가입</Link>
        <Link to={'/QaPage'} className="p-2">Q&A</Link>
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