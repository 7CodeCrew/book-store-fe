import React from 'react';
import { Box, Typography, Link, Grid, Button } from '@mui/material';

const MyPageCategory = () => {
  const userLevel = ['브론즈', '실버', '골드', '플래텸'];
  const myShoppingList = [
    { list: '주문내역/배송조회', link: '/mypage/order-list' },
    { list: '반품/교환 신청 및 조회', link: '/mypage/order-claim-list' },
    { list: '취소 주문 내역', link: '/mypage/order-cancel-list' },
    { list: '리뷰 관리', link: '/mypage/my-review' },
    { list: '찜한 도서', link: '/mypage/wishlist' },
  ];
  const myInfoList = [
    { list: '개인정보 수정', link: '/member/confirm-password' },
    { list: '이벤트 당첨 내역', link: '#' },
    { list: '회원 탈퇴', link: '/member/account-deletion' },
  ];
  return (
    <>
      {/* 유저 등급 */}
      <Grid container>
        <Box mt={2} p={2} border={1} borderRadius={4} borderColor="grey.400">
          <Typography variant="h6">나의 북두칠성 등급</Typography>
          <Box display="flex" mt={2}>
            {userLevel.length > 0
              ? userLevel?.map((level, index) => (
                  <Box
                    key={index}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mr={2}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#f0f0f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Typography variant="caption">{level}</Typography>
                  </Box>
                ))
              : 'null'}
          </Box>
        </Box>
      </Grid>

      {/* 나의 쇼핑 */}
      <Grid container>
        <Box mt={2} p={2} pl={3} pr={9} border={1} borderRadius={4} borderColor="grey.400">
          <Typography color="primary">나의 쇼핑</Typography>
          <Box>
            {myShoppingList?.map((item, index) => (
              <Box m={1} sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <Link href={item.link} underline="hover" color="inherit" key={index}>
                  {item.list}
                </Link>
              </Box>
            ))}
          </Box>
          {/* </Box> */}
          <Typography mt={2} mb={2} borderBottom={1} borderColor="grey.400" />

          {/* 나의 정보 */}
          {/* <Box mt={4} p={2} border={1} borderRadius={4} borderColor="grey.400"> */}
          <Typography color="primary">나의 정보</Typography>
          <Box mb={2}>
            {myInfoList?.map((item, index) => (
              <Box m={1}>
                <Link href={item.link} underline="hover" color="inherit" key={index}>
                  {item.list}
                </Link>
              </Box>
            ))}
          </Box>
          <Button variant="outlined" color="primary" fullWidth sx={{ width: '20ch', height: '30px', borderRadius: '10px' }}>
            <Typography variant="subtitle2">1:1 문의</Typography>
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default MyPageCategory;
