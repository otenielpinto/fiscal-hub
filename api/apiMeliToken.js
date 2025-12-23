import axios from "axios";
const base_url = "https://teste.servidor.workers.dev";

// Cache em memória para armazenar tokens
const tokenCache = new Map();

export const apiMeliAuth = async (endpoint, body = {}, method = "GET") => {
  let response = null;

  try {
    const config = {
      method,
      url: `${base_url}${endpoint}`,
      headers: {
        "content-type": "application/json",
      },
    };

    // Só adiciona o data se o body tiver conteúdo
    if (body && Object.keys(body).length > 0) {
      config.data = body;
    }

    response = await axios(config);
    return response;
  } catch (error) {
    tokenCache.clear(); // Limpa o cache em caso de erro
    console.log(error);
    return response;
  }
};

// Função para verificar se o token está expirado
const isTokenExpired = (tokenData) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const tokenAge = currentTime - tokenData.created_at;

  // Considera expirado se faltam 200 segundos ou menos
  if (tokenAge >= tokenData.expires_in - 200) {
    console.log("Token expirado, vamos renovar o token");
    return true;
  }

  return false;
};

//faz apenas a troca de token , quando necessario, renovacao refresh token
export const meliToken = async (id) => {
  const cacheKey = `token_${id}`;

  // Verifica se existe token no cache
  if (tokenCache.has(cacheKey)) {
    const cachedToken = tokenCache.get(cacheKey);

    // Verifica se o token ainda é válido
    if (!isTokenExpired(cachedToken.data)) {
      return cachedToken;
    } else {
      // Remove o token expirado do cache
      tokenCache.delete(cacheKey);
    }
  }

  // Busca novo token da API
  console.log("Buscando novo token para ID:", id);
  const response = await apiMeliAuth(`/token?id=${id}`, {}, "GET");

  // Armazena o novo token no cache se a requisição foi bem-sucedida
  if (response && response.data) {
    tokenCache.set(cacheKey, response);
    console.log("Novo token armazenado no cache para ID:", id);
  }

  return response;
};

// Função para limpar cache específico ou todo o cache
export const clearTokenCache = (id = null) => {
  if (id) {
    const cacheKey = `token_${id}`;
    tokenCache.delete(cacheKey);
    console.log("Cache limpo para ID:", id);
  } else {
    tokenCache.clear();
    console.log("Todo o cache foi limpo");
  }
};
