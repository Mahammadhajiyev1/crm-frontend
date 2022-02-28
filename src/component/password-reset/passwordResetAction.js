import { requestPasswordOtp, updateUserPassword } from "../../api/passwordApi";
import {
  passwordResetFail,
  passwordResetPending,
  passwordResetSuccess,
  updateResetSuccess,
} from "./passwordResetSlice";

export const sendPasswordResetOtp = (email) => async (dispatch) => {
  dispatch(passwordResetPending());
  try {
    const { status, message } = await requestPasswordOtp(email);
    status === "success"
      ? dispatch(passwordResetSuccess({ message, email }))
      : dispatch(passwordResetFail(message));
  } catch (error) {
    dispatch(passwordResetFail(error));
  }
};
export const updatePassword = (user) => async (dispatch) => {
  dispatch(passwordResetPending());
  try {
    const result = await updateUserPassword(user);
    console.log(result);
    result.status === "success"
      ? dispatch(updateResetSuccess(result.message))
      : dispatch(passwordResetFail(result.message));
  } catch (error) {
    dispatch(passwordResetFail(error));
  }
};
