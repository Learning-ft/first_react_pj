import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { flexCenter } from "../../../styled/common"
import {useForm}  from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { Validation2 } from "../../../utill/validation"


const Login =() => {

  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      email:'',
      password:'',
    },
    resolver: yupResolver(Validation2)
  })

  const onSubmit = (data) => {console.log(data);}
  const handleGoogleLogin = (e) => {
    e.preventDefault()
  }

  return(
    <S.Wrrapper>
      <S.Title>LOGIN</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Content>
          <label>이메일</label>
          <input placeholder="아이디를 입려해주세요"  name="email" {...register('email')}/>
          <p>{errors.email?.message}</p>
        </S.Content>
        <S.Content>
          <label>비밀번호</label>
          <input placeholder="비밀번호를 입력해주세요" name="password" {...register('password')}/>
          <p>{errors.password?.message}</p>
        </S.Content>
        <S.Checkbox>
          <input type="checkbox"/>
          <label>아이디 기억하기</label>
        </S.Checkbox>
        <S.Button type="submit">로그인</S.Button>
        <S.Button onClick={handleGoogleLogin}>구글로 로그인하기</S.Button>
      </form>
      <Link to={'/SignUp'}>회원가입</Link>
    </S.Wrrapper>
  )
}

export default Login

const Wrrapper = styled.div`
  height:  calc(100vh - 150px); 
  ${flexCenter};
  flex-direction: column;
`
const Title = styled.h1`
  margin-bottom: 40px;
`

const Content = styled.div`
  padding: 15px 0;

  label{
    display: block;
    font-size: ${({theme})=> theme.FONT_SIZE.midum};
  }

  input{
    width: 480px;
    height: 54px;
    margin: 5px 0;

    &::placeholder{
      margin: 20px 0;
    }
  }
`

const Checkbox = styled.div`
    padding: 15px 0;
    
    input{
      margin-right: 10px;
    }
    
`

const Button = styled.button`
  width:  480px;
  height: 60px;
  display: block;
  margin: 15px 0;
  border: none;
  background-color: ${({theme}) => theme.PALLET.primary};
  color: white;

  &:hover{
    background-color: ${({theme}) => theme.PALLET.primary2};
    transition: 0.6s;
  }
`
const S ={
  Wrrapper,
  Title,
  Content,
  Checkbox,
  Button
}