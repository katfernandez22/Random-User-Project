import React , {useState , useEffect} from 'react';
import axios from 'axios';
const baseURL =  `https://api.randomuser.me/`

const FetchUser = async () => {
  try {
    const resp = await axios.get(baseURL);
    console.log('this is fetched data', resp.data.results);
    const res = resp.data.results;
    return res;
  } catch (err) {
    console.error(err);
  }
};

export default FetchUser