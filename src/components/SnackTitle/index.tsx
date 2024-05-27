import React, { ReactNode } from "react";
import { Title } from "./styles";

interface TitleProps {
  children: ReactNode;
}

function SnackTitle({ children }: TitleProps) {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
}

export default SnackTitle;
