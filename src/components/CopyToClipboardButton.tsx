import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  hoverText?: string;
}

const StyledButton = styled.a<Props & { wasCopied: boolean }>`
  color: inherit;
  display: flex;
  font-size: 1.4em;
  font-weight: bold;
  justify-content: space-around;
  line-height: 0.8em;
  margin: 1vh 0;
  padding: 2vh;
  pointer-events: ${(props) => props.wasCopied ? "none" : "auto"};
  text-decoration-color: 'aqua';
  text-decoration: ${(props) => props.wasCopied ? "none" : "underline"};
  &:before {
    content: ${(props) => props.wasCopied ? `"COPIED!"` : `"${props.text}"`};
  }
  &:hover {
    :before {
      content: ${(props) => props.wasCopied ? `"COPIED!"` : `"CLICK TO COPY"`};;
    }
    text-decoration: none;
  }
`;

export const CopyToClipboardButton = ({ text, ...rest }: Props) => {
  const [ wasCopied, setWasCopied ] = useState(false);
  return (
    <StyledButton
      onClick={() => {
        navigator.clipboard.writeText(text);
        setWasCopied(true);
        setTimeout(() => setWasCopied(false), 3000);
      }}
      text={text}
      wasCopied={wasCopied}
      {...rest}
      />
)};