import { apiKey } from "../components/AddWord";

export const getData = async () => {
  try {
    const resp = await fetch(`${apiKey}/palindrome`);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
