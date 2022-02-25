import axios from "axios";
const rootUrl = "http://localhost:3001/v1/";
const singleTicketUrl = rootUrl + "ticket/";
const closeTicketUrl = singleTicketUrl + "close-ticket/";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket/", {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
export const getSingleTicket = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(singleTicketUrl + _id, {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
// export const updateReplyTicket = (_id, messageObject) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log(_id);
//       const result = await axios.put(singleTicketUrl + _id, messageObject, {
//         headers: {
//           Authorization: sessionStorage.getItem("accessJWT"),
//         },
//       });
//       console.log(result);
//       resolve(result.data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
export const updateReplyTicket = (_id, messageObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(singleTicketUrl + _id, messageObject, {
        headers: {
          authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      console.log(result);

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
export const updateTicketStatusClosed = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
