const isEncoded = (string) => {
  return typeof string == "string" && decodeURIComponent(string) !== string;
};

const deepDecode = (encodedString) => {
  const decodedString = decodeURIComponent(encodedString);
  return isEncoded(decodedString) ? deepDecode(decodedString) : decodedString;
};

export default deepDecode;
