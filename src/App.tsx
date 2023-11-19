import React, { useState } from 'react';
import profile from './images/profile-pic.png';
import { Button } from './components/Button';
import styled from 'styled-components';
import { CopyToClipboardButton } from './components/CopyToClipboardButton';
import { presetColors, ThemeContext } from './theme-context';
import { CirclePicker } from 'react-color';
import Slider from 'react-color/lib/components/slider/Slider';
import useWindowDimensions from './hooks/useWindowDimensions';
import { Link } from './components/Link';
import download from './images/download.svg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';

const Contianer = styled.div<{ backgroundColor: string; height: number; width: number}>`
  text-align: center;
  background-color: ${(props) => `${props.backgroundColor}`};
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const ProfilePic = styled.img`
  height: 30vmin;
  padding-top: 1vh;
  margin: 1em;
  pointer-events: none;
  @media (min-width: 600px) {
    height: 25vmin;
  }
`

const ColorContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 28em;
  @media (min-width: 600px) {
    width: 32em;  
  }
`

const SilderContainer = styled.div`
  padding: 1.5em 5em 0 5em;
  margin-top: auto;
  width: 100%;
`

function App() {
  const { theme, updateTheme } = React.useContext(ThemeContext);
  const [activeColor, setActiveColor] = useState(theme.primaryColorString)
  const { height, width } = useWindowDimensions();

  return (
    <Contianer 
      backgroundColor={theme.backgroundColor} 
      height={height}
      width={width}
      >
      <Menu>
      <ProfilePic src={profile} alt="logo" />
      <Button
        ariaLabel={"Download My Resume!"}
        text={"RÉSUMÉ"}
        hoverText={"DOWNLOAD"}
        href={process.env.PUBLIC_URL + "/Alex_Matheson_Resume_2023.pdf"}
        svg={download}
        />
      <Button
        ariaLabel={"GO TO LINKEDIN"}
        text={"LINKEDIN"}
        hoverText={"GO TO LINKEDIN"}
        href="https://www.linkedin.com/in/alexkev/"
        svg={linkedin}
        />
      <Button
        ariaLabel={"Navigate to Github"}
        text={"GITHUB"}
        hoverText={"SEE MY CODE"}
        href="https://github.com/alexkev"
        svg={github}
        />
      <CopyToClipboardButton
        text={"alex.kmatheson@gmail.com"}
        hoverText={"CLICK TO COPY"}
        />
      </Menu>
      <ColorContainer>
        <CirclePicker
          color={activeColor}
          colors={presetColors}
          onChange={(color) => setActiveColor(color.hex)}
          onChangeComplete={(color) => updateTheme(color.rgb)}
          />
        <SilderContainer>
          <Slider
            color={activeColor}
            onChange={(color) => setActiveColor(color.hex)}
            onChangeComplete={(color) => updateTheme(color.rgb)}
            />
        </SilderContainer>
        <Link
          text={"view code"}
          href="https://github.com/alexkev/alexkev.com"
          />
      </ColorContainer>
      
    </Contianer>
  );
}

export default App;
