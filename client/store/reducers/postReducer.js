import * as types from "../types";
import moment from "moment";
const initalState = {
  TypeBland: "ACER",
  Navbar: 2,
  SSID: "",
  BirdDay: moment().format("MMM Do YY"),
  PostId: "",
  time: 0,
  token: null,
  loadding: false,
  error: null,
  post: {},
};
export const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.UPDATE_TYPEBLAND:
      return {
        ...state,
        TypeBland: action.payload,
      };
    case types.UPDATE_NAVBAR:
      return {
        ...state,
        Navbar: action.payload,
      };
    case types.UPDATE_SSID:
      return {
        ...state,
        SSID: action.payload,
      };
    case types.UPDATE_BIRD:
      return {
        ...state,
        BirdDay: moment(action.payload).format("MMM Do YY"),
      };
    case types.UPDATE_POST:
      return {
        ...state,
        PostId: action.payload,
      };
    case types.UPDATE_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case types.UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
