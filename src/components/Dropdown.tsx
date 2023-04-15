// React + Web3 Essentials
import { shortenText } from 'helpers/UtilityHelper';
import React from 'react';

// External Packages
import styled, { useTheme } from 'styled-components';

// Internal Components
import { A, Image, ItemH, Span } from '../primaries/SharedStyling';

export type DropdownValueType = {
  id: number|string,
  value?: string,
  title: string,
  icon: string,
  textColor?: string,
  function: () => void,
}

type DropdownProps = {
  dropdownValues: any[];
  textColor?: string;
  iconFilter?: string;
  hoverBGColor?: string;
};


// Create Dropdown
function Dropdown({ dropdownValues, textColor, iconFilter, hoverBGColor }: DropdownProps) {

  const theme = useTheme();

  const getTextColor = (dropdownValue:DropdownValueType) => {
    return dropdownValue.textColor ? dropdownValue.textColor:textColor? textColor : theme.snackbarBorderText;
  }

 
  const copyToClipboard = (address) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    } else {
      const el = document.createElement('textarea');
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  };
  return (
    <>
      {dropdownValues.map((dropdownValue) =>
        dropdownValue.id === 'walletAddress' ? (
          <ItemH
            bg="linear-gradient(87.17deg, #F72C81 0%, #6C55AF 50%, #4FD5FF 100%)"
            radius="17px"
            padding="2px 12px"
            wrap="nowrap"
            margin="0px 0 8px 0"
            width="max-content"
            style={{cursor: "pointer"}}
            onClick={() => dropdownValue?.function()}
          >
            <Span
              margin="11px 22px 11px 2px"
              weight="400"
              size="14px"
              textTransform="uppercase"
              color="#fff"
              spacing="1px"
              width="max-content"
            >
              <DesktopAddress>{dropdownValue?.title}</DesktopAddress>
              <MobileAddress>
                {shortenText(dropdownValue?.title,6)}
              </MobileAddress>
            </Span>
            {dropdownValue?.invertedIcon && (
              <Image
                src={dropdownValue?.invertedIcon}
                alt="icon"
                width="auto"
                cursor="pointer"
                filter="brightness(0) invert(1)"
                onClick={() => {
                  copyToClipboard(dropdownValue?.value);
                }}
              />
            )}
            {dropdownValue?.icon && (
              <Image
                src={dropdownValue?.icon}
                alt="icon"
                width="auto"
                cursor="pointer"
                onClick={() => {
                  copyToClipboard(dropdownValue?.value);
                }}
              />
            )}
          </ItemH>
        ) : (
          <DropdownItemContainer hoverBGColor={hoverBGColor} onClick={() => dropdownValue?.function()}>
            {dropdownValue?.invertedIcon && (
              <Image
                src={dropdownValue.invertedIcon}
                alt="icon"
                width="max-content"
                spacing="1px"
                filter={iconFilter ? iconFilter : theme.snackbarBorderIcon}
              />
            )}
            {dropdownValue?.icon && (
              <Image
                src={dropdownValue.icon}
                alt="icon"
                width="24px"
                cursor="pointer"
              />
            )}
            {!dropdownValue?.link && dropdownValue?.function && (
              <Span
                width="max-content"
                color={getTextColor(dropdownValue)}
                margin="8px 10px"
                weight="400"
                size="15px"
                cursor="pointer"
              >
                {dropdownValue.title}
              </Span>
            )}
            {dropdownValue?.link && (
              <A
                width="max-content"
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="8px 10px"
                weight="400"
                size="16px"
                width="max-content"
                color={getTextColor(dropdownValue)}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </A>
            )}
          </DropdownItemContainer>
        )
      )}
    </>
  );
}

// css styles
const SpanAddress = styled(Span)`
  margin: 11px 22px 11px 2px;
  weight: 400;
  size: 14px;
  text-transform: uppercase;
  color: #fff;
  spacing: 1px;
  width: max-content;
`;
const MobileAddress = styled(SpanAddress)`
  @media (min-width: 993px) {
    display: none;
  }
`;
const DesktopAddress = styled(SpanAddress)`
  @media (max-width: 992px) {
    display: none;
  }
`;

const DropdownItemContainer = styled(ItemH)`
  width: 11.5rem;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin: 1px 0;
  padding: 2px 8px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBGColor || 'none'};
  }
`;

export default Dropdown;
