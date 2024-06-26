import api from '../utils/api';
import * as types from '../constants/cart.constants';
import { commonUiActions } from './commonUiAction';

// 장바구니 아이템 추가.
const addToCart = (book, quantity) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_TO_CART_REQUEST });
    const response = await api.post('/cart', { bookId: book._id, qty: quantity });
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.ADD_TO_CART_SUCCESS, payload: response.data });
    dispatch(commonUiActions.showToastMessage(`${quantity}개의 책이 장바구니에 담겼습니다.`, 'success'));
  } catch (error) {
    dispatch({ type: types.ADD_TO_CART_FAIL, payload: error.message });
  }
};
// 장바구니 아이템 조회.
const getCartList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CART_LIST_REQUEST });
    const response = await api.get('/cart');
    console.log('response', response);
    if (response.status !== 200) throw new Error(response.error);
    console.log(response, 'responsesssssss');
    dispatch({ type: types.GET_CART_LIST_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.GET_CART_LIST_FAIL, payload: error.message });
  }
};

// 장바구니 아이템 삭제.
const deleteCartItem = (id, qty) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_CART_ITEM_REQUEST });
    const response = await api.delete(`/cart/${id}`);
    if (response.status !== 200) throw new Error(response.error);

    dispatch({
      type: types.DELETE_CART_ITEM_SUCCESS,
      payload: response.data.cartItemQty,
    });
    dispatch(commonUiActions.showToastMessage(`${qty} product(s) was deleted`, 'success'));
    dispatch(getCartList());
  } catch (error) {
    dispatch({ type: types.DELETE_CART_ITEM_FAIL, payload: error });
    dispatch(commonUiActions.showToastMessage(error, 'error'));
  }
};

// 장바구니 아이템 아이템 수량 수정.
const updateItemQty = (id, value) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_CART_ITEM_REQUEST });
    const response = await api.put(`/cart/${id}`, { qty: value });
    if (response.status !== 200) throw new Error(response.error);

    dispatch({
      type: types.UPDATE_CART_ITEM_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_CART_ITEM_FAIL, payload: error });
    dispatch(commonUiActions.showToastMessage(error, 'error'));
  }
};

// 장바구니에 담긴 아이템 갯수.
const getCartQty = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CART_QTY_REQUEST });
    const response = await api.get('/cart/qty');
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.GET_CART_QTY_SUCCESS, payload: response.data.qty });
  } catch (error) {
    dispatch({ type: types.GET_CART_QTY_FAIL, payload: error });
  }
};

export const cartActions = {
  addToCart,
  getCartList,
  deleteCartItem,
  updateItemQty,
  getCartQty,
};
