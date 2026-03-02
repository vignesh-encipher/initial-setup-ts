// React
import React from "react";
// Styles
import styles from "./style.module.css";

interface CardProps {
  children?: any;
  Bgcolor?: string;
  padding?: string;
  borderRadius?: string;
  bg?: string;
  width?: string;
  height?: string;
  "data-testid"?: string;
}

const ReusbaleCard = ({
  children,
  Bgcolor = "",
  padding = "5px",
  borderRadius = "16px",
  bg,
  "data-testid": testId,
  width,
  height,
}: CardProps) => {
  const cardStyle = {
    background: bg ?? Bgcolor,
    padding,
    borderRadius,
    width,
    height,
  };

  return (
    <div className={styles.card} style={cardStyle} data-testid={testId}>
      {children}
    </div>
  );
};

export default ReusbaleCard;
