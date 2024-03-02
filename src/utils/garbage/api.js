import axios from "axios";
// import { Client } from '@elastic/elasticsearch';

// https://developers.google.com/custom-search/v1/introduction

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyDne5HRxb9RbBEM5L-5GfOtzY65DQporc4",
  cx: "d2c5012151a7a4d61",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  console.log("here");
  console.log(data);
  return data;
};
