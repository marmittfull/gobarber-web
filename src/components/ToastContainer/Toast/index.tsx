import React, { useEffect } from 'react';

import {
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiXCircle,
} from 'react-icons/fi';
import { Container } from './styles';

import { useToast, ToastMessage } from '../../../hooks/ToastContext';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const ToastIcons = {
  info: <FiInfo size={25} />,
  error: <FiAlertCircle size={25} />,
  success: <FiCheckCircle size={25} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container style={style} type={message.type}>
      {ToastIcons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
