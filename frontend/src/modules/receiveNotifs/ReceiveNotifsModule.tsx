// React + Web3 Essentials
import React from "react";

// External Packages
import ReactGA from "react-ga";
import styled, { useTheme } from "styled-components";

// Internal Components
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { H2, Item, Section, Span } from "../../primaries/SharedStyling";
import Info from "segments/Info";

// Internal Configs
import GLOBALS, { device, globalsMargin } from "config/Globals";

// Create Header
function ReceiveNotifsModule() {
  ReactGA.pageview("/receive");

  // get theme
  const theme = useTheme();

  // Render
  return (
    <Container>
      <ItemVV2 alignItems="stretch">
        <ItemVV2 align="stretch" justify="flex-start" margin="0px 0px 40px 0px">
          <H2>
            <Span weight="400" size="32px" color={theme.color}>
              Receive Notifications
            </Span>
          </H2>
          <Span
            color={theme.default.secondaryColor}
            weight="400"
            size="16px"
            textTransform="none"
            textAlign="center"
            spacing="0.03em"
            margin="0px 0px"
          >
            The following frontends enables receiving push alerts for your wallet. More coming soon!
          </Span>
        </ItemVV2>

        <Item align="stretch" justify="flex-start" margin="0px 0px 20px 0px">
          <Info />
        </Item>

      </ItemVV2>
    </Container>
  );
}

// css style
const Container = styled(Section)`
	align-items: center;
	align-self: center;
	background: ${(props) => props.theme.default.bg};
	border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
	box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
	display: flex;
	flex-direction: column;
	flex: initial;
	justify-content: center;
  max-width: 1200px;
  width: calc(100% - ${globalsMargin.MINI_MODULES.DESKTOP.RIGHT} - ${globalsMargin.MINI_MODULES.DESKTOP.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG} - ${GLOBALS.ADJUSTMENTS.PADDING.BIG});
  padding: ${GLOBALS.ADJUSTMENTS.PADDING.BIG};
	position: relative;
  margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};

  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.TABLET.RIGHT} - ${globalsMargin.MINI_MODULES.TABLET.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.MOBILE};
    padding: ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT};
    width: calc(100% - ${globalsMargin.MINI_MODULES.MOBILE.RIGHT} - ${globalsMargin.MINI_MODULES.MOBILE.LEFT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT} - ${GLOBALS.ADJUSTMENTS.PADDING.DEFAULT});
  }
`;


// Export Default
export default ReceiveNotifsModule;
