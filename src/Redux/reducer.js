import { User } from "./action";

const init = {
    isAuth : false,
    users :[],
    orders : [],
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
      case User : return {...store,isAuth:true,users:payload}
    default:
      return store;
  }
};
