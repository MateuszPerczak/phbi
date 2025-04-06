import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 10px;
  background-color: #1d2340;
  .nav-wrapper {
    display: flex;
    flex: 1;
    max-width: 1000px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 10px;
  }
`;
