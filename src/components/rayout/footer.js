
import { styled } from "styled-components"
import { flexCenter } from "../../styled/common"


const Footer = () => {

  return(
    <Wrrapper>
      <div>
        <div>
          <div>About Us</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          asperiores, atque blanditiis id voluptatum nesciunt expedita! A illo
          rerum facilis iste accusantium, qui asperiores facere consequuntur
          minima perspiciatis dolor itaque!
        </div>
        <div>
          <div>Our Services</div>
          <div>
            <div href="#">Training Courses</div>
            <div href="#">Service Desk</div>
            <div href="#">Proactive Services</div>
            <div href="#">User Support</div>
            <div href="#">24/7 Services</div>
          </div>
        </div>
        <div>
          <div>Our Policies</div>
          <div>
            <div href="#">Privacy Policy</div>
            <div href="#">Data Policy</div>
          </div>
        </div>
      </div>

      <div>&copy; 2022 Codingstrade - All Rights Reserved.</div>
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

