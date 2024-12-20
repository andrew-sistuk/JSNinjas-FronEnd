import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import css from './Toaster.module.css';

export function Toaster() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={css.message}
      progressClassName={css.progress}
    />
  );
}
