import iziToast from "izitoast";

export const success = ({ title, message}) => {
  iziToast.success({
    title: title, //title
    message: message, //message
  });
};

export const error = ({ title, message }) => {
    iziToast.error({
      title: title, //title
      message: message, //message
    });
  };
