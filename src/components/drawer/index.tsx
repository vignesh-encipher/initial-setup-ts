import { Drawer } from "antd";

interface ReusableDrawerProps {
  title?: string;
  open: boolean;
  onClose: () => void;
  width?: number | string;
  placement?: "left" | "right" | "top" | "bottom";
  children?: any;  
  footer?: any;  
  // destroyOnClose?: boolean;
  maskClosable?: boolean;
}

const ReusableDrawer = ({
  title,
  open,
  onClose,
  width = 500,
  placement = "right",
  children,
  footer,
  // destroyOnClose = true,
  maskClosable = false,
}: ReusableDrawerProps) => {
  return (
    <Drawer
      title={title}
      open={open}
      onClose={onClose}
      width={width}
      placement={placement}
      footer={footer}
      // destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
    >
      {children}
    </Drawer>
  );
};

export default ReusableDrawer;