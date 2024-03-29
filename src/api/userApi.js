import axios from "axios";
const loginUrl = "http://localhost:3001/v1/user/login";
const userProfileUrl = "http://localhost:3001/v1/user";
const userLogoutUrl = "http://localhost:3001/v1/user/logout";
const newAccessJWT = "http://localhost:3001/v1/tokens";
const userVerificationUrl = "http://localhost:3001/v1/user/verify";

export const newUserRegistration = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(userProfileUrl, formData);
      resolve(result.data);
      if (result.data.status === "success") {
        resolve(result.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const newUserRegistrationVerification = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(userVerificationUrl, formData);
      resolve(result.data);
      if (result.data.status === "success") {
        resolve(result.data);
      }
    } catch (error) {
      reject({ status: "error", message: error.message });
    }
  });
};
export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginUrl, formData);
      resolve(result.data);
      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
        localStorage.setItem(
          "crmTicket",
          JSON.stringify({ refreshJWT: result.data.refreshJWT })
        );
      }
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
        reject("Token not found!");
      }

      const result = await axios.get(userProfileUrl, {
        headers: {
          authorization: accessJWT,
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const userLogout = async () => {
  try {
    await axios.delete(userLogoutUrl, {
      headers: {
        authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmTicket"));
      console.log(refreshJWT);

      if (!refreshJWT) {
        reject("Token not found!");
      }

      const result = await axios.get(newAccessJWT, {
        headers: {
          authorization: refreshJWT,
        },
      });

      console.log(result.data);

      if (result.data.status === "success") {
        sessionStorage.setItem("accessJWT", result.data.accessJWT);
      }

      resolve(true);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmTicket");
      }

      reject(false);
    }
  });
};
