import { postAPI, getAPI, deleteAPI } from "../apiMethods";

export const LINKS_API = {
  createLink: (reqBody) => postAPI("links", reqBody),
  getLinks: () => getAPI("links"),
  getLinkById: (id) => getAPI(`linksf/${id}`),
  deleteLink: (id) => deleteAPI(`links/${id}`),
};
