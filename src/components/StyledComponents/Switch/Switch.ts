// StyledComponents/Switch/Switch.ts
import styled from "styled-components";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.switchBg};
  transition: 0.4s;
  border-radius: 24px;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: ${({ theme }) => theme.switchThumb};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const StyledSwitch = styled.div<{ checked: boolean }>`
  ${SwitchSlider} {
    background-color: ${({ checked, theme }) =>
      checked ? theme.switchCheckedBg : theme.switchBg};
  }

  ${SwitchSlider}::before {
    transform: ${({ checked }) => (checked ? "translateX(16px)" : "translateX(0)")};
  }
`;
