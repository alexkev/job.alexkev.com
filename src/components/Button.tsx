import React from 'react';
import styled from 'styled-components';

type Props = {
  ariaLabel: string;
  text: string;
  hoverText?: string;
}

const StyledButton = styled.a<Omit<Props, "ariaLabel">>`
  color: inherit;
  text-decoration: none;
  outline: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgb(187, 151, 190);
  background-image: linear-gradient(-25deg, rgb(187, 151, 190), rgb(218, 188, 221));
  border-radius: 10vh;
  padding: 2vh;
  margin: 1vh 0;
  display: flex;
  width: 20rem;
  justify-content: space-around;
  /* box-shadow: 0 0 0 0; */
  /* transition: box-shadow 0.3s; */
  transition: box-shadow 0.3s;
  font-size: 1.6em;
  line-height: 0.8em;
  font-weight: bold;
  &:before {
    content: ${(props) => `"${props.text}"`};
  }
  &:hover:before {
    content: ${(props) => `"${props.hoverText ?? props.text}"`};
  }
  &:hover {
    /* box-shadow: 0.1em 0.2em 0.2em 0.1em rgba(0, 0, 0, 0.3); */
    box-shadow: 0.1em 0.2em 0.2em 0.1em rgba(187, 151, 190, 0.3);
  }
  @media (min-width: 600px) {
    width: 30rem;
  }
`;

export const Button = ({ ariaLabel, ...rest }: Props) => (
  <StyledButton aria-label={ariaLabel} {...rest} />
);