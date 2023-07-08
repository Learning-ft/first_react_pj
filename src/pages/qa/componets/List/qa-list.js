
import { useSelector } from "react-redux"
import { styled } from "styled-components"
import { container } from "../../../../styled/common"



const Qalists = () => {

  const qalist  = useSelector((state) => state.qalist.list) // 저장소에 저장된 state에 등록되s slice의 이름, 그 slice안에 동록된 저장공간 



  console.log(qalist )
  return(
    <>
       <Warrper>
       {qalist.map((item) => (
          <div key={item.id}> 
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
       </Warrper>
      </>
  )
}

export default Qalists

const Warrper = styled.div`
 ${container}
 text-align: center;
 background-color: ${({theme}) => theme.PALLET.background.darkWihte};
 padding: 120px 0;
`