import React, { useEffect } from 'react';
import NavBar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'; // useLocation import 추가
import ToastMessage from '../components/ToastMessage';
import { userActions } from '../action/userActions';
import { bookActions } from '../action/bookActions';
import { cartActions } from '../action/cartActions';
import Sidebar from '../components/Sidebar'; // Sidebar import 추가
import Footer from '../components/Footer/Footer';
import CategoryBar from '../components/CategoryBar';

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation(); // useLocation 사용
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.loginWithToken());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(cartActions.getCartQty());
    }
  }, [user]);

  const { bookList, bookGroup } = useSelector((state) => state.book);

  useEffect(() => {
    if (bookGroup) {
      dispatch(bookActions.getBookList({ queryType: bookGroup }));
    } else {
      dispatch(bookActions.getBookList({}));
    }
  }, [bookGroup]);

  return (
    <div>
      <ToastMessage />
      {location.pathname.includes('member') ? (
        ''
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#6b8e23',
            height: '60px',
          }}>
          <h2 style={{ margin: 0, color: '#fff', textAlign: 'center' }}>10만원 이상 주문 시 모든 주문 무료 배송 (Standard Shipping)</h2>
        </div>
      )}
      {location.pathname.includes('admin') ? ( // 관리자 페이지 여부에 따라 조건부 렌더링
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flexGrow: 1, padding: '20px' }}>{children}</main>
        </div>
      ) : location.pathname.includes('member') ? (
        <div style={{ marginTop: '20px' }}>{children}</div>
      ) : (
        <div>
          <NavBar user={user} />
          <CategoryBar bookList={bookList} />
          <div style={{ marginTop: '20px' }}>{children}</div>
        </div>
      )}
      {location.pathname.includes('member') ? '' : <Footer />}
    </div>
  );
};

export default AppLayout;
