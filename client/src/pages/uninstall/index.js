import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { uninstallUser } from '../../requests/api-request';
import { targetPage } from '../../utils/index';
import logo from '../../assets/header/shop-with-freedom-color.png';
import ButtonField from '../../components/button-field';
import { 
  Content,
  Statement,
  Remove,
  RemoveHeader,
  Form,
  Logo,
  NoResize,
} from './uninstall.style';
import {Container, LinkText} from '../../styles/global.style';


const Uninstall = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [response, setResponse] = useState(false);

  const sendInfo = () => {
    const val = getValues();

    uninstallUser(val)
      .then(() => {
        targetPage('');
      })
      .catch((err) => {
        console.log('Uninstall Error: ', err);
      });
  };

  const userResponse = () => {
    setResponse(!response);
  };

  return (
    <Content>
      <Container>
        <Statement>
          <Logo>
            <img src={logo} alt="Shop with Freedom" />
          </Logo>
          <div>
            <strong>
            Did you know Freedom is much more than a shopping assistant &amp;
            money saving extension? We also provide entertainment with{' '}
              <a href="/freedomtv">
                <LinkText>
              Freedom TV+
                </LinkText>
              </a>
            ,{' '}
              <a href="/games">
                <LinkText>
              Freedom Arcade
                </LinkText>
              </a>
            , and{' '}
              <a href="/earlyaccess">
                <LinkText>
              Freedom Friday
                </LinkText>
              </a>
            . Explore Freedom with the links at the bottom of the page.
            </strong>
          </div>
        </Statement>
        <Remove>
          <RemoveHeader>
          Tell us why you removed the Freedom Super Saver Extension.
            <br />
            <u>Check all that apply</u>
          </RemoveHeader>
          <form>
            <Form>
              <div>
                <label>
                  <input type="checkbox" name="shop" ref={register} /> It
                doesn&lsquo;t work at stores I shop at
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="work" ref={register} /> Work
                computer
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="annoying" ref={register} /> I found
                it annoying
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="technical" ref={register} />{' '}
                I&lsquo;m having a technical issue
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="useful" ref={register} /> It
                wasn&lsquo;t useful to me
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="cashback" ref={register} /> I use
                other cash back or coupon sites
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="canada" ref={register} /> I need an
                International version
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" name="sizing" ref={register} /> The
                sizing was too distracting
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="other"
                    ref={register}
                    onClick={userResponse}
                  />{' '}
                Other
                </label>
                {response ? (
                  <NoResize
                    name="other_response"
                    ref={register}
                  ></NoResize>
                ) : null}
              </div>
            </Form>
            <ButtonField color="primary" onClick={handleSubmit(sendInfo)}>
            Submit
            </ButtonField>
          </form>
        </Remove>
      </Container>
    </Content>
  );
};

export default Uninstall;
