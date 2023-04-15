// React + Web3 Essentials
import React from 'react';

// External Packages
import { Route, Routes, useParams } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

// Internal Components
import { SectionV2 } from 'components/reusables/SharedStylingV2';
import ChatModule from 'modules/chat/ChatModule';

// Internal Configs
import GLOBALS from 'config/Globals';

// Chat page
const ChatPage = () => {
  let { chatid } = useParams();
  
  // RENDER
  return (
    <Container>
      <ChatModule chatid={chatid}/>
    </Container>
  );
}
export default ChatPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
  flex: 1;
  flex-direction: column;
  align-self: stretch;
`;