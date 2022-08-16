import { apiKey } from "../components/AddWord";

export const postData = async values => {
  await fetch(`${apiKey}/palindrome`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
};
