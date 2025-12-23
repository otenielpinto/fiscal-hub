import MercadoLivreService from "../services/meliService.js";
import { lib } from "../utils/lib.js";

export class MeliAdapter {
  meli;
  constructor() {
    this.meli = new MercadoLivreService();
  }
  //unica forma que achei de passar o token
  async config(meli_token) {
    await this.meli.setToken(meli_token);
  }
  async setTenant(id_tenant) {
    await this.meli.setTenant(id_tenant);
  }

  //https://api.mercadolibre.com/orders/2000010924837164
  async getOrderById(order_id) {
    let response = await this.meli.get(`/orders/${order_id}`);
    return response;
  }

  //https://api.mercadolibre.com/shipments/44562207077/costs
  async getShippingCost(shipping_id) {
    let response = await this.meli.get(`/shipments/${shipping_id}/costs`);
    return response;
  }

  //https://api.mercadolibre.com/shipments/511444559/payments
  async getPayment(shipping_id) {
    let response = await this.meli.get(`/shipments/${shipping_id}/payments`);
    return response;
  }

  //https://api.mercadolibre.com/packs/2000007308070529
  async getPack(pack_id) {
    let response = await this.meli.get(`/packs/${pack_id}`);
    return response;
  }

  //https://api.mercadolibre.com/orders/search?seller=511444559&order.date_created.from=2025-03-03T00:00:00.000-00:00&order.date_created.to=2025-03-04T23:59:59.000-00:00&q=2000010924837164&offset=0
  async searchOrder(params = {}) {
    let offset = params.offset || 0;
    let date_created_from = params.date_created_from || "";
    let date_created_to = params.date_created_to || "";
    let status = params.status || "";
    let order_id = params.order_id || "";
    let seller = params.seller || this.meli.getSellerId();
    let url = `/orders/search?seller=${seller}`;
    if (order_id) {
      url += `&q=${order_id}`;
    }
    if (date_created_from) {
      url += `&order.date_created.from=${date_created_from}`;
    }
    if (date_created_to) {
      url += `&order.date_created.to=${date_created_to}`;
    }
    if (status) {
      url += `&order.status=${status}`;
    }
    if (offset) {
      url += `&offset=${offset}`;
    }

    let response = await this.meli.get(url);
    return response;
  }

  //https://api.mercadolibre.com/users/me
  async getUser() {
    let response = await this.meli.get("/users/me");
    return response;
  }

  //https://api.mercadolibre.com/users/215824367/items/search?offset=0&limit=100&last_updated_asc
  async searchItems(params = {}) {
    let offset = params.offset || 0;
    let limit = params.limit || 100;
    let seller = params.seller || (await this.meli.getSellerId());
    let scroll_id = params.scroll_id || null;
    let search_type = params.search_type || null;
    let status = params.status || null;

    let orders = params.orders || "stop_time_desc"; //stop_time_desc,last_updated_desc   | mesmo usado pelo mercado
    let url = `/users/${seller}/items/search?offset=${offset}&limit=${limit}&orders=${orders}`;

    if (search_type) {
      url += `&search_type=${search_type}`;
    }

    if (scroll_id) {
      url += `&scroll_id=${scroll_id}`;
    }
    if (status) {
      url += `&status=${status}`;
    }

    let response = await this.meli.get(url);
    return response;
  }

  async getItemById(item_id) {
    let response = await this.meli.get(`/items/${item_id}`);
    return response;
  }

  async getItemsByIds(item_ids = []) {
    if (item_ids.length === 0) {
      return { status: 400, message: "item_ids is required" };
    }
    let ids = item_ids.join(",");
    let response = await this.meli.get(`/items?ids=${ids}`);
    return response;
  }

  //https://api.mercadolibre.com/seller-promotions/items/MLB4226868351?app_version=v2
  async getPromocaoByItemId(item_id) {
    let response = await this.meli.get(
      `/seller-promotions/items/${item_id}?app_version=v2`
    );
    return response;
  }

  //https://api.mercadolibre.com/sites/$SITE/listing_prices?price=$PRICE&listing_type_id=$LISTING_TYPE_ID&category_id=$CATEGORY_ID
  async getListingPrices(params = {}) {
    let site = params?.site || "MLB";
    let price = params?.price || 0;
    let listing_type_id = params?.listing_type_id || "";
    let category_id = params?.category_id || "";

    let url = `/sites/${site}/listing_prices?price=${price}&listing_type_id=${listing_type_id}&category_id=${category_id}`;
    let response = await this.meli.get(url);
    return response;
  }

  //https://api.mercadolibre.com/users/$USER_ID/shipping_options/free?dimensions=$DIMENSIONS&verbose=$VERBOSE&item_price=$ITEM_PRICE&listing_type_id=$LISTING_TYPE&mode=$MODE&condition=$CONDITION&logistic_type=$LOGISTIC_TYPE
  async getFreeShippingOptions(params = {}) {
    let user_id = params?.user_id || (await this.meli.getSellerId());
    let item_id = params?.item_id || null;
    let dimensions = params?.dimensions || null; //0.1x10x10,0.1x20x20
    let verbose = params?.verbose || "true"; //true or false
    let item_price = params?.item_price || 0;
    let listing_type_id = params?.listing_type_id || ""; //gold_special
    let mode = params?.mode || "me2"; //me2 or me1
    let condition = params?.condition || "new"; //new,used,not_specified
    let logistic_type = params?.logistic_type || "fulfillment"; //fulfillment,drop_off,custom
    //Obrigatorio enviar o item_id

    let url = `/users/${user_id}/shipping_options/free?`;
    if (item_id) url += `item_id=${item_id}`;
    if (verbose) url += `&verbose=${verbose}`;
    if (dimensions) url += `&dimensions=${dimensions}`;

    let response = await this.meli.get(url);
    return response;
  }

  // Função para obter o menor preço de promoção com status "started"
  async getLowestStartedPromotion(item) {
    if (!item || !Array.isArray(item)) {
      return null;
    }

    const startedPromotions = item.filter(
      (promo) => promo?.status === "started" && promo?.price > 0
    );

    if (startedPromotions?.length === 0) {
      return null;
    }

    // Encontra a promoção com o menor preço
    const lowestPromo = startedPromotions.reduce((min, current) => {
      return current.price < min.price ? current : min;
    });

    return lowestPromo;
  }

  //https://developers.mercadolivre.com.br/pt_br/itens-e-buscas
  async getBySku(sku) {
    let me = await this.meli.getSellerId();
    let response = await this.meli.get(`/users/${me}/items/search?sku=${sku}`);
    return response;
  }

  async getBySellerSku(seller_sku) {
    let me = await this.meli.getSellerId();
    let response = await this.meli.get(
      `/users/${me}/items/search?seller_sku=${seller_sku}`
    );
    return response;
  }

  //https://developers.mercadolivre.com.br/pt_br/produto-sincronizacao-de-publicacoes#Atualiza%C3%A7%C3%A3o-do-estoque

  async updateStock(item_id, available_quantity) {
    if (available_quantity < 0) {
      available_quantity = 0;
    }

    let data = {
      available_quantity: available_quantity,
    };
    let response = await this.meli.put(`/items/${item_id}`, data);
    return response;
  }

  //https://developers.mercadolivre.com.br/pt_br/variacoes#Modificar-estoque
  async updateVariationStock(item_id, variations = []) {
    if (!Array.isArray(variations) || variations.length === 0) {
      return { status: 400, message: "variations is required" };
    }

    //CUIDAO SE NAO ENVIAR TODA A GRADE O MERCADO LIVRE EXCLUI AS VARIACOES QUE NAO FORAM ENVIADAS
    //ESSE METODO AQUI NUNCA FALHA **** EH O ENVIO GRANULAR ***  ATUALIZA APENAS A VARIACAO QUE FOI ENVIADA
    //      {
    // 	"variations": [{
    // 		"id": 15092589430,
    // 		"available_quantity": 10
    // 	}]
    // }
    let response;

    for (let v of variations) {
      let available_quantity = v?.available_quantity;
      if (available_quantity < 0) {
        available_quantity = 0;
      }

      let data = { available_quantity: available_quantity };
      response = await this.meli.put(
        `/items/${item_id}/variations/${v?.id}`,
        data
      );
    }

    return response;
  }

  //atualizar preco
  async updatePrice(item_id, price) {
    if (price <= 1) {
      price = 0;
      console.log("Preço inválido para atualização, definindo como 0");
      return null;
    }

    let data = {
      price: price,
    };
    let response = await this.meli.put(`/items/${item_id}`, data);
    return response;
  }

  /**
   * Atualizar o preço da variação
   * Enviar todas as variacoes quando tiver alteracao de preco em variacoes
   *
   */

  async updateVariationPrice(item_id, variations = []) {
    if (!Array.isArray(variations) || variations.length === 0) {
      return { status: 400, message: "variations is required" };
    }
    let items = [];
    for (let v of variations) {
      let price = v?.price;
      if (price <= 1) {
        price = 0;
        console.log("Preço inválido para atualização, definindo como 0");
      }
      items.push({ id: v?.id, price: price });
    }

    let data = { variations: items };
    let response = await this.meli.put(`/items/${item_id}`, data);
    return response;
  }
}
/*
# inspiracao 
https://publicapis.io/woocommerce-api

const tiny = new Tiny();
 tiny.put(url, data);
 tiny.post(url, data);
 tiny.get(url);
 tiny.delete(url);
 tiny.patch(url, data);
 
*/
