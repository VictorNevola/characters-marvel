import styled from "styled-components";
import { HeartIcon } from "@heroicons/react/outline";

export const ProfileWrapper = styled.a`
  display: block;
  cursor: pointer;
  position: relative;
  margin-left: 8px;
  min-width: 24px;
  padding: 0px;
  text-decoration: none;
`;

export const ProfileIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  aspect-ratio: 1;
  border-image: radial-gradient(red 69%,#0000 70%) 84.5% fill/100%;
  clip-path: polygon(-41% 0,50% 91%, 141% 0);
  width: 28px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfileCount = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 24px;
  margin-top: -4px;
`;
