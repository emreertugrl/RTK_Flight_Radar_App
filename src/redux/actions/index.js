import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./../../api/index";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // parametreleri belirle
  const params = {
    bl_lat: "34.480238",
    bl_lng: "24.594651",
    tr_lat: "43.914447",
    tr_lng: "47.662137",
    limit: "300",
  };
  const res = await api.get("/flights/list-in-boundary", { params });
  // apiden dizi içinde dizi geldiği için bunu map ile döneriz ve her birini obje ile çıkartırız
  const formatted = res.data.aircraft.map((item) => ({
    id: item[0],
    code: item[1],
    lat: item[2],
    lng: item[3],
  }));
  // aksiyonların payloadlarını belirle
  return formatted;
});

export const getInfo = createAsyncThunk("info/getInfo", async (id) => {
  const res = await api.get(`/flights/detail?flight=${id}`);

  // aksiyon payload return et
  return res.data;
});
