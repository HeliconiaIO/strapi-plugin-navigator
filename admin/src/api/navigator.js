import { request } from "@strapi/helper-plugin";

const navigatorRequests = {
  getNextRecord: async (model, id) => {
    return await request(`/navigator/findNext/${model}/${id}`, {
      method: "GET",
    });
  },

  getPreviousRecord: async (model, id) => {
    return await request(`/navigator/findPrevious/${model}/${id}`, {
      method: "GET",
    });
  },

  
};

export default navigatorRequests;