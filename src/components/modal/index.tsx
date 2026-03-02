import React from "react";
import { Modal } from "antd";

interface ReusableModalProps {
  title?: string;
  open: boolean;
  onOk?: () => void;
  onCancel: () => void;
  width?: number | string;
  children?: any;
  footer?: any;
  confirmLoading?: boolean;
  centered?: boolean;
  destroyOnClose?: boolean;
  maskClosable?: boolean;
}

const ReusableModal = ({
  title,
  open,
  onOk,
  onCancel,
  width = 520,
  children,
  footer,
  confirmLoading = false,
  centered = true,
  destroyOnClose = true,
  maskClosable = false,
}: ReusableModalProps) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      footer={footer}
      confirmLoading={confirmLoading}
      centered={centered}
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable}
    >
      {children}
    </Modal>
  );
};

export default ReusableModal;