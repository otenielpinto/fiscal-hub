import axios from "axios";
const base_url = "https://api.mercadolibre.com";

export const meliApi = async (
  accessToken,
  endpoint,
  body = "",
  method = "GET"
) => {
  if (!accessToken) {
    throw new Error("Obrigatoria a informação do token de acesso");
    return;
  }

  let response = null;
  try {
    response = await axios({
      method,
      url: `${base_url}${endpoint}`,
      data: body,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log(
      "erro ao chamar api do mercado livre",
      error?.message,
      `url: ${base_url}${endpoint}`
    );
    return error?.response;
  }
};
