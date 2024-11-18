import { styled } from "styled-components";

const PrivacyContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 13rem;
`;
const PrivacyHeading = styled.h1`
  font-size: 4rem;
  color: #333;
  margin-bottom: 4rem;
`;

const PrivacyPara = styled.p`
  margin-bottom: 4rem;
  color: #555;
  font-size: 2rem;
  line-height: 1.6;
`;

function Privacy() {
  return (
    <PrivacyContainer>
      <PrivacyHeading>Privacy Policy</PrivacyHeading>
      <PrivacyPara>
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year. If you visit our
        login page, we will set a temporary cookie to determine if your browser
        accepts cookies. This cookie contains no personal data and is discarded
        when you close your browser. When you log in, we will also set up
        several cookies to save your login information and your screen display
        choices. Login cookies last for two days, and screen options cookies
        last for a year. If you select “Remember Me”, your login will persist
        for two weeks. If you log out of your account, the login cookies will be
        removed. If you edit or publish an article, an additional cookie will be
        saved in your browser. This cookie includes no personal data and simply
        indicates the post ID of the article you just edited. It expires after 1
        day.
      </PrivacyPara>
      <PrivacyHeading>Terms & Condition</PrivacyHeading>
      <PrivacyPara>
        <ol>
          <li>
            The company retains the right to modify the pricing of any product
            or collection at its sole discretion. These changes may occur at any
            time without prior notice.
          </li>
          <li>
            The company holds the right to edit, change, add, or remove any
            product, collection, and content on the platform at any time without
            prior notice.
          </li>
          <li>
            {" "}
            We strive to ensure that any such changes align with the best
            interests of our customers. The company reserves the right to decide
            whether to provide its services and products to any individual or
            entity, without providing a reason for such a decision. In
            exceptional cases, we may need to block a customer's access to our
            platform. This action will only be taken under necessary
            circumstances and shall be in line with our platform's policies.
          </li>
          <li>
            Discount vouchers and E-Gift cards can be redeemed exclusively on
            our website. It is important to note that each purchase can only
            utilize a single voucher code.
          </li>
          <li>
            The company reserves the right to invalidate any coupon code or gift
            voucher under certain circumstances and in accordance with its
            policies, terms, and conditions.
          </li>
        </ol>
        By accessing or using our platform, you agree to the terms and
        conditions stated above. Review our Privacy Policy and Terms &
        conditions periodically for updates. Contact us with any questions or
        concerns.
      </PrivacyPara>
    </PrivacyContainer>
  );
}

export default Privacy;
