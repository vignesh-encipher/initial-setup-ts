import { Button } from "antd";

interface ReusableButtonProps {
  name: string;
  color?: string;
  background?: string;
  disabled?: boolean;
  onClick?: () => void;
  borderRadius?: number | string;
  loading?: boolean;
}

const ReusableButton = ({
  name,
  color = "#ffffff",
  background = "green",
  disabled = false,
  onClick,
  borderRadius = "5px",
  loading = false,
}: ReusableButtonProps) => {
  const customStyle = {
    color,
    background,
    borderRadius: borderRadius,
  };

  return (
    <Button
      style={customStyle}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    >
      {loading ? "LOADING..." : name}
    </Button>
  );
};

export default ReusableButton;
