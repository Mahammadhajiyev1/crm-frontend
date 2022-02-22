import axios from "axios";
const loginUrl = "http://localhost:3001/v1/user/login";
const userProfileUrl = "http://localhost:3001/v1/user";
export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginUrl, formData);
      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "crmTicket",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};
export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found");
      }
      const result = await axios.get(userProfileUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });

      resolve(result.data);
    } catch (error) {
      reject(error.messsage);
    }
  });
};
