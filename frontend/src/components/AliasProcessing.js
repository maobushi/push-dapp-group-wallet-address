// React + Web3 Essentials
import React from "react";

// External Packages
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

// Internal Components
import { Section } from "../primaries/SharedStyling";
import AliasSetup from "./AliasSetup";
import ChangeNetwork from "./ChangeNetwork";
import VerifyAlias from "./VerifyAlias";

const AliasProcessing = ({ aliasEthAccount, setAliasVerified }) => {
  const { processingState } = useSelector((state) => state.channelCreation);

  return (
    <Section>
      <ItemHere>
        <Tab type={processingState >= 1 ? "active" : "inactive"} active={processingState == 1 ? 'active' : 'inactive'}>
          <div>Waiting for Setup</div>
          <Step type={processingState >= 1 ? "active" : "inactive"} />
        </Tab>
        <Tab type={processingState >= 2 ? "active" : "inactive"} active={processingState == 2 ? 'active' : 'inactive'}>
          <div>Change Network</div>
          <Step type={processingState >= 2 ? "active" : "inactive"} />
        </Tab>
        <Tab type={processingState >= 3 ? "active" : "inactive"} active={processingState == 3 ? 'active' : 'inactive'}>
          <div>Verify Alias Network</div>
          <Step type={processingState >= 3 ? "active" : "inactive"} />
        </Tab>
        <Line />
      </ItemHere>

      {processingState === 1 && <AliasSetup />}
      {processingState === 2 && <ChangeNetwork />}
      {processingState === 3 && (
        <VerifyAlias
          aliasEthAccount={aliasEthAccount}
          setAliasVerified={setAliasVerified}
        />
      )}
    </Section>
  );
};

const ItemHere = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 50px 0px 0px 0px;
  @media (max-width: 768px) {
    display: flex;
    margin: 0px 0px 0px 0px;
  }
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: row;
  }
`;

const Step = styled.div`
  height: 5px;
  width: 100%;
  background: #cfd7e4;
  border-radius: 13px;

  ${({ type }) =>
    type === "active" &&
    css`
      background: #e20880;
    `};
`;

const Line = styled.div`
  position: absolute;
  height: 5px;
  background: #f1f1f1;
  right: 0;
  left: 0;
  margin: 0px 10px;
  z-index: -1;
`;

const Tab = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0px 10px;
  color: #657795;
  div {
    margin: 5px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 4px;
    div {
      font-weight: 500;
      font-size: 15px;
    }
  }

  ${({ type }) =>
    type === 'active' &&
    css`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

  ${({ active }) =>
    active === 'active' &&
    css`
      color: #e20880;
      @media (max-width: 768px) {
          width: 100%;
    }
    `};

    ${({ active }) =>
    active === 'inactive' &&
    css`
    @media (max-width: 768px) {
      width: 40%;
        div {
          font-size: 0px;
            @media (max-width: 768px) {
            }
        }
    }
    `};
`;

export default AliasProcessing;
