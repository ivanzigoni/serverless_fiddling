const body = {
  name: "Ivan",
  idade: 25,
  address: {
    rua: 1,
    doak: "s",
    dad: [1, 2, "c"],
  },
};

const headers = {
  "content-type": "application/json",
};

export const request = JSON.stringify({
  headers: headers,
  body: JSON.stringify(body),
});
