import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const otpRequestUrl = rootUrl + "user/reset-password";

export const requestPasswordOtp = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(otpRequestUrl, {
        email,
      });

      if (result.data.status === "success") {
        resolve(result.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const updateUserPassword = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(user);
      const result = await axios.patch(otpRequestUrl, user);

      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
