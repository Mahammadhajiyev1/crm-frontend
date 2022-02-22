import axios from "axios";
const loginUrl = "http://localhost:3001/v1/user/login";
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
