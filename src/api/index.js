export const sendRequest = async (input, page) => {
  const paramArr = []

  for (let [key, value] of Object.entries(input)) {
    if (value){
      if (paramArr.length<1) {
        paramArr.push(`&${key}=${value}`) 
      } else {
        paramArr.push(`${key}=${value}`) 
      }
    }
  }
  
  const API = `https://api.geocollections.info/locality/?page=${page}${paramArr.join("&")}`;

  const response = await fetch(API, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
  
  