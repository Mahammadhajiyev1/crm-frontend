import axios from "axios";

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/v1/ticket/", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haGFtbWFkaGFqaXlldjRAZ21haWwuY29tIiwiaWF0IjoxNjQ1NTEzNzE1LCJleHAiOjE2NDU1MTQ2MTV9.T75drZBk4YVUGyrZRD0m5m77GfAAxNEST9bGjIJBHV8",
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
