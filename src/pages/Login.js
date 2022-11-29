import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
import { GithubContext, GithubProvider } from '../context/context';

const Login = () => {
  const { isAuthenticated, loginWithRedirect, user, isLoading } = useAuth0()
  console.log(isAuthenticated, user, isLoading)

  return <Wrapper>
    <div className="container">
      <img src={loginImg} alt="github user" className='img' />
      <h1>Github User</h1>
      <form>
          {/* bug here!! didn't jump to login input page!!! */}
          {/* bug done!!Congrats!!! */}
          <button className='btn' 
          onClick={loginWithRedirect}
          >
            Login
          </button>
      </form>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
