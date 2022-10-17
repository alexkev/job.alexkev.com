import React from 'react';
import profile from './images/profile-pic.png';
import { Button } from './components/Button';
import styled from 'styled-components';
import { CopyToClipboardButton } from './components/CopyToClipboardButton';
import { ThemeContext } from './theme-context';

const Contianer = styled.div<{ backgroundColor: string }>`
  text-align: center;
  background-color: ${(props) => `${props.backgroundColor}`};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const ProfilePic = styled.img`
  height: 30vmin;
  margin: 1rem;
  pointer-events: none;
`

function App() {
  const { theme } = React.useContext(ThemeContext);
  console.log('%cApp.tsx line:28 theme', 'color: #007acc;', theme);

  return (
    <Contianer backgroundColor={theme.backgroundColor}>
      <ProfilePic src={profile} alt="logo" />
      <Button
        ariaLabel={"Download My Resume!"}
        text={"RÉSUMÉ"}
        hoverText={"DOWNLOAD"}
        href="/Alex_Matheson_Resume.pdf"
        />
      <Button
        ariaLabel={"GO TO LINKEDIN"}
        text={"LINKEDIN"}
        hoverText={"GO TO LINKEDIN"}
        href="https://www.linkedin.com/in/alexkev/"
        />
      <Button
        ariaLabel={"Navigate to Github"}
        text={"GITHUB"}
        hoverText={"SEE MY CODE"}
        href="https://github.com/alexkev"
        />
      <CopyToClipboardButton
        text={"alex.kmatheson@gmail.com"}
        hoverText={"CLICK TO COPY"}
        />
    </Contianer>
  );
}

export default App;
