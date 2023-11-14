import articlesApi from "@api/articles";
import { cardAdapter } from "@helpers/Adapters/CardAdapter";
import { promoAdapter } from "@helpers/Adapters/PromoAdapter";
import { cardsTypes } from "../constant";

export const initArticles = (routeTag = '', filtersIds = [], page = null,) => {
  return {
    type: cardsTypes.TYPE,
    payload: articlesApi.getAvailableArticles(page, routeTag, filtersIds).then(res => {
      return {
        items: res.data.blocks.results.reduce(cardAdapter, []),
        promo: res.data.promo.map(promo => promoAdapter(promo)),
        totalItems: res.data.blocks.total,
        itemsRecieved: res.data.blocks.results.length,
        filters: res.data.tags,
      }
    })
  }
}

export const initMainArticles = () => {
  return {
    type: cardsTypes.TYPE,
    payload: articlesApi.getMainArticles().then(res => {

      return {
        items: res.data.blocks.reduce(cardAdapter, []),
        totalItems: res.data.blocks.length,
        itemsRecieved: res.data.blocks.length,
        promo: res.data.promo.map(promo => promoAdapter(promo)),
        filters: {
          available: [],
          all: []
        },
      }
    })
  }
}
