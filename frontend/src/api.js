import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbjJAc2hvcC5jb20iLCJpYXQiOjE2OTgzODMxODh9.20Xywx9de8vEYusfToB_DB4DTZk7btC4wYMP_s8XH1I",
  },
});

export const getShopById = async (id) => {
  const response = await api.get("/shop/" + id);
  return response.data;
};

export const getBanner = async () => {
  const response = await api.get("/banner");
  return response.data;
};
