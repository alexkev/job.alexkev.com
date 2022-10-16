import React from 'react';
import profile from './images/profile-pic.png';
import { Button } from './components/Button';
import styled from 'styled-components';

const Contianer = styled.div`
  text-align: center;
  background-color: #282c34;
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
  return (
    <Contianer>
      <ProfilePic src={profile} alt="logo" />
      <Button
        ariaLabel={"Download My Resume!"}
        text={"RÉSUMÉ"}
        hoverText={"DOWNLOAD"}
        />
      <Button
        ariaLabel={"GO TO LINKEDIN"}
        text={"LINKEDIN"}
        hoverText={"GO TO LINKEDIN"}
        />
      <Button
        ariaLabel={"Navigate to Github"}
        text={"GITHUB"}
        hoverText={"SEE MY CODE"}
        />
      {/* <Button
        ariaLabel={"Copy Email to Clipboard"}
        text={"alex.kmatheson@gmail.com"}
        hoverText={"COPY TO CLIPBOARD"}
        /> */}
    </Contianer>
  );
}

export default App;
