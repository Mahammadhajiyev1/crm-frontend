import { newUserRegistration } from "../../api/userApi";
import {
  registrationFail,
  registrationPending,
  registrationSuccess,
} from "./userRegistrationSlice";

export const userRegistration = (formData) => async (dispatch) => {
  dispatch(registrationPending());
  try {
    const result = await newUserRegistration(formData);
    result.status === "success"
      ? dispatch(registrationSuccess(result.message))
      : dispatch(registrationFail(result.message));
  } catch (error) {
    dispatch(registrationFail(error));
  }
};
