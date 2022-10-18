import styled from 'styled-components';

type Props = {
  text: string;
  href: string;
}

const StyledLink = styled.a<Props>`
  color: inherit;
  display: flex;
  font-size: 1em;
  font-family: monospace;
  justify-content: space-around;
  line-height: 0.8em;
  text-align: center;
  margin: 3vh 0 4vh 0;
  text-decoration:  "underline";
  &:before {
    content: ${(props) => `"${props.text}"`};
  }
`;

export const Link = ({ text, href }: Props) => (
  <StyledLink
    text={text}
    href={href}
    />
);