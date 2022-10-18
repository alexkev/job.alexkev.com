import React from 'react';
import styled from 'styled-components';
import { ThemeContext, ThemeType } from '../theme-context';

type Props = {
  ariaLabel: string;
  text: string;
  hoverText?: string;
  href?: string;
}

const StyledButton = styled.a<Omit<Props, "ariaLabel"> & ThemeType>`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${(props) => `${props.primaryColorString}`};
  background-image: ${(props) => `${props.primaryGradient}`};
  border-radius: 10vh;
  color: inherit;
  display: flex;
  font-size: 1.6em;
  font-weight: bold;
  justify-content: space-around;
  line-height: 0.8em;
  margin: 1vh 0;
  outline: 0;
  padding: 2vh;
  text-decoration: none;
  transition: box-shadow 0.3s;
  width: 15rem;
  &:before {
    content: ${(props) => `"${props.text}"`};
  }
  @media (hover: hover) {
    /* targets screens that hover */
    &:hover:before {
      content: ${(props) => `"${props.hoverText ?? props.text}"`};
    }
    &:hover {
      box-shadow: 0.1em 0.2em 0.2em 0.1em ${(props) => `${props.primaryBoxShadow}`}
    }
  }
  @media (min-width: 600px) {
    width: 20rem;
    font-size: 1em;
  }
`;

export const Button = ({ ariaLabel, href, ...rest }: Props) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <StyledButton 
      aria-label={ariaLabel} 
      href={href} 
      target="_blank" 
      {...rest}
      {...theme}
      />
  )
};