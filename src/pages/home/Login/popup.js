import { styled } from "styled-components"
import DaumPostcode from "react-daum-postcode";




const PopUp = ({handleClose,handleAddress}) => {

  const handlePostCode = (data) => {
    let fullAddress = ''
    console.log(data)
    console.log(fullAddress)

    if(data.userSelectedType === 'R'){
      fullAddress = `${data.sido} ${data.sigungu} ${data.bname2}`;
      handleAddress(fullAddress)
    }else{
      fullAddress = `${data.sido} ${data.sigungu} ${data.bname2}`;
      handleAddress(fullAddress)
    }
    handleClose();
  }



  return(
      <Center>
      <DaumPostcode onComplete={handlePostCode} autoClose={true} />
      </Center>

  )

}

export default PopUp




const Center = styled.div`
  display: block;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
  height: auto;
  padding: 7px;
  border: 1px solid black;

`
