import { styled } from "styled-components"
import { flexCenter } from "../../../styled/common"
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Validation } from "../../../utill/validation"
import { useState } from "react";
import PopUp from "./popup";


const SignUp = () => {

  const [isPopUp, setIsPopUp] = useState(false)

  const {register, handleSubmit, watch, formState:{errors},setValue} = useForm({
    defaultValues: {
      nickname: '',
      email:'',
      password:'',
      passwordconfirm:'',
      phone : '',
      address:''
    },
    resolver: yupResolver(Validation)
  })

  const onSubmit = (data) => {
    // alert(JSON.stringify(data))
    console.log(data)
  }

  const handleOpen = (e) => {
    e.preventDefault()
    setIsPopUp(true)
  }
  const handleClose = () => {
    setIsPopUp(false)
  }

  const handleAddress  = (fullAddress) => {
    setValue('address', fullAddress)
  }

  return(
    <S.Wrrapper>
    <S.Title>회원가입</S.Title>
    <p>즐거운 중고거래를 응원합니다 :)</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.CheckContent>
        <label>닉네임</label> 
        <input placeholder="닉네임를 입려해주세요" name="nickname" {...register('nickname')}/>
        <button>중복확인</button>
        <p>{errors.nickname?.message}</p>
      </S.CheckContent>
      <S.CheckContent>
        <label>이메일</label>
        <input placeholder="이메일을 입려해주세요" name="email" {...register('email')} />
        <button>중복확인</button>
        <p>{errors.email?.message}</p>
      </S.CheckContent>
      <S.Content>
        <label>비밀번호</label>
        <input placeholder="비밀번호를 입력해주세요" name="password" {...register('password')}/>
        <p>{errors.password?.message}</p>
      </S.Content>
      <S.Content>
        <label>비밀번호 확인</label>
        <input placeholder="비밀번호를 확인해주세요" name="passwordconfirm" {...register('passwordconfirm')} />
        <p>{errors.passwordconfirm?.message}</p>
      </S.Content>
      <S.Content>
        <label>핸드폰</label>
        <input placeholder="핸드폰번호입력(-생략)" name="phone" {...register('phone')}/>
        <p>{errors.phone?.message}</p>
      </S.Content>
      <S.CheckContent>
        <label>주소</label>
        <input placeholder="서울시 강남구 역삼동" name="address" {...register('address')} value={watch('address')}  />
        <button onClick={handleOpen}>주소 찾기</button>
        {isPopUp && <PopUp handleClose={handleClose} handleAddress={handleAddress}/>}
        <p>{errors.address?.message}</p>
      </S.CheckContent>
      <S.Checkbox>
        <input type="checkbox"/>
        <label>아이디 기억하기</label>
      </S.Checkbox>
      <S.Button type="submit">가입하기</S.Button>
    </form>
  </S.Wrrapper>
  )
}

export default SignUp

const Wrrapper = styled.div`
  position: relative;
  padding: 100px 0;
  height: auto;
  ${flexCenter};
  flex-direction: column;
`
const Title = styled.h1`
  margin-bottom: 16px;
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

const CheckContent = styled.div`

padding: 15px 0;

label{
  display: block;
  font-size: ${({theme})=> theme.FONT_SIZE.midum};
}

input{
    width: 380px;
    height: 54px;
    margin: 5px 0;

    &::placeholder{
      margin: 20px 0;
    }
  }
  button{
    margin-left: 10px;
    width: 90px;
    height: 54px;
    border: none;
    background-color:  ${({theme}) => theme.PALLET.primary3};
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
  Button,
  CheckContent,
}