import { Container } from "./styles";
import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Contact me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:ananypriyanshu@gmail.com">ananypriyanshu@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Email" />
          <a href="tel:+917488175458">(91) 7488175458</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}