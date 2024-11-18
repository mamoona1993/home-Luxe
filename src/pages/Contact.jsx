import { styled } from "styled-components";
import SignupForm from "../ui/SignupForm";
import Map from "../ui/Map";
const ContactForm = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 13rem;
`;
const ContactHeading = styled.h2`
  font-size: 4rem;
  margin-bottom: 6rem;
  text-align: center;
`;

const ContactMap = styled.div`
  display: flex;
  gap: 2rem;
  /* gap: -3rem; */
`;

function Contact() {
  return (
    <ContactForm>
      <ContactHeading>Contact Us</ContactHeading>
      <ContactMap>
        <SignupForm />;
        <Map />
      </ContactMap>
      {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=satara+sapna+%2Cfaisalabad&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.alarm-clock.net"></a><br/><a href="https://www.alarm-clock.net"></a><br/><style>.mapouter{{position:relative,text-align: right,height: 560px,width: 820px}}</style><a href="https://www.ongooglemaps.com">google map net<a/><style>.gmap_canvas{{overflow: hidden,height: 560px,width: 820px}}</style></div></div> */}
    </ContactForm>
  );
}

export default Contact;
