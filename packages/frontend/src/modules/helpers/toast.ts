import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = {
  success: (message: string) => {
    const display = () =>
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: message
      });

    if (!toast.isActive(message)) display();
  },

  warning: (message: string) => {
    const display = () =>
      toast.warning(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: message
      });

    if (!toast.isActive(message)) display();
  },

  error: (message: string) => {
    const display = () =>
      toast.error(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        toastId: message
      });

    if (!toast.isActive(message)) display();
  }
};
