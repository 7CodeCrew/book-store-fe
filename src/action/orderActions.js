import api from '../utils/api';
import * as types from '../constants/order.constants';
import { commonUiActions } from './commonUiAction';

// 주문 생성.
const createOrder = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_ORDER_REQUEST });
    const response = await api.post('/order', payload);
    if (response.status !== 200) throw new Error(response.error);
    dispatch({ type: types.CREATE_ORDER_SUCCESS, payload: response.data.orderNum });
    dispatch(cartActions.getCartQty());
    navigate('/payment/success');
  } catch (error) {
    dispatch({ type: types.CREATE_ORDER_FAIL, payload: error.error });
    dispatch(commonUiActions.showToastMessage(error.error, 'error'));
  }
};

// 내 주문 조회.
const getMyOrder = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ORDER_LIST_REQUEST });
    const response = await api.get('/order/me');
    dispatch({ type: types.GET_ORDER_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: types.GET_ORDER_LIST_FAIL, payload: err.error });
    dispatch(commonUiActions.showToastMessage(err.error, 'error'));
  }
};

// 모든 주문 조회.
const getOrderList = (query) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ORDER_LIST_REQUEST });
    const response = await api.get('/order', { params: { ...query } });
    dispatch({ type: types.GET_ORDER_LIST_SUCCESS, payload: response.data }); // orders로 데이터 받음.
  } catch (err) {
    dispatch({ type: types.GET_ORDER_LIST_FAIL, payload: err.error });
    dispatch(commonUiActions.showToastMessage(err.error, 'error'));
  }
};

// 주문 상태 업데이트.
const updateOrder = (id, status) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_ORDER_REQUEST });
    const response = await api.put(`/order${id}`, { status });
    dispatch({ type: types.UPDATE_ORDER_SUCCESS });
    dispatch(commonUiActions.showToastMessage('주문 상태를 수정했습니다.', 'success'));
    dispatch(getOrderList());
  } catch (err) {
    dispatch({ type: types.UPDATE_ORDER_FAIL, payload: err.error });
    dispatch(commonUiActions.showToastMessage(err.error, 'error'));
  }
};

export const orderActions = {
  createOrder,
  getMyOrder,
  getOrderList,
  updateOrder,
};
