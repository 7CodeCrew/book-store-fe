import React, { useEffect, useState } from 'react';
import { Box, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../action/userActions';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const AccountDeletionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [password, setPassword] = useState('');

  const handleGoToLogout = () => {
    navigate('/');
    dispatch(userActions.logout());
  };
  const handleGoToMyPage = () => {
    navigate('/mypage');
  };

  const handleDeleteAccount = () => {
    dispatch(userActions.deleteUser(user._id, password, navigate));
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', marginTop: '10px' }}>
      <Container align="center">
        {/* 상단 */}
        <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid item sx={4} md={4}>
            북두칠성 로고
          </Grid>
          <Grid item sx={4} md={4}>
            <Typography variant="h6">회원탈퇴</Typography>
          </Grid>
          <Grid item sx={4} md={4}>
            <Button variant="contained" color="secondary" onClick={handleGoToLogout}>
              로그아웃
            </Button>
            <Button variant="contained" color="secondary" onClick={handleGoToMyPage}>
              마이페이지
            </Button>
          </Grid>
        </Grid>

        {/* 하단 */}
        <Grid sx={{ mt: 3 }}>
          <Box align="left" p={8} border={1} borderRadius={1} borderColor="grey.400" sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="md" style={{ marginTop: '20px' }}>
              <Typography variant="h5" gutterBottom>
                아래 내용을 꼭 확인해 주세요.
              </Typography>

              <Box p={3} mb={4} border={1} borderColor="grey.300" bgcolor="#f8f9fa">
                <Typography variant="h6" color="error" gutterBottom>
                  회원정보 및 계좌내역 삭제
                </Typography>
                <Typography variant="subtitle2" color="error" gutterBottom>
                  회원탈퇴 즉시 회원정보는 모두 삭제되며, 재가입시에도 복원되지 않습니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 삭제되는 정보 : 구매하신 eBook, 개인정보, 계좌내역(북두칠성 쿠폰 등), 사내 계정
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 회원탈퇴 시 회원 레벨 및 적립의 자격이 자동으로 상실됩니다.(주문/정산 중에는 탈퇴불가)
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 회원탈퇴 시 북두칠성 마이페이지 서비스의 이용이 불가합니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 회원탈퇴 시 구매하신 eBook도 모두 삭제됩니다. 회원탈퇴 후 타 ID로 사용 권한을 양도하실 수 없습니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 탈퇴 후 사내 및 사내와 연결된 이용기록(예:책 리뷰)은 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 게시판형 서비스에 등록한 게시물은 삭제되지 않고 유지됩니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 회원님의 주문이 진행되고 있는 경우 회원 탈퇴가 불가능 합니다.
                  <Link href="#" color="primary">
                    FAQ 바로가기
                  </Link>
                </Typography>
              </Box>

              <Box p={3} mb={4} border={1} borderColor="grey.300" bgcolor="#f8f9fa">
                <Typography variant="h6" gutterBottom>
                  1개월간 회원 재가입 제한
                </Typography>
                <Typography variant="body2" gutterBottom>
                  회원탈퇴 후, 1개월간은 회원 재가입이 불가능합니다.
                </Typography>
              </Box>

              <Box p={3} mb={4} border={1} borderColor="grey.300" bgcolor="#f8f9fa">
                <Typography variant="h6" gutterBottom>
                  탈퇴 후 정보보관
                </Typography>
                <Typography variant="body2" gutterBottom>
                  전자상거래 등에서의 소비자보호에 관한 법률 제6조에 의거 성명, 주소 등 거래의 주체를 식별할 수 있는 정보에 한하여 서비스 이용에 관한 동의를
                  철회한 경우에도 이를 보존할 수 있으며, 동법 시행령 제6조에 의거 다음과 같이 거래 기록을 보관합니다.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 표시, 광고에 관한 기록 : 6개월
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 계약 또는 청약철회 등에 관한 기록 : 5년
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 대금결제 및 재화 등의 공급에 관한 기록 : 5년
                </Typography>
                <Typography variant="body2" gutterBottom>
                  - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                </Typography>
              </Box>

              <Box p={3} mb={4} border={1} borderColor="grey.300" bgcolor="#f8f9fa">
                <Typography variant="h6" gutterBottom>
                  본인인증을 위해 탈퇴를 하시려면 1:1 문의를 이용해 주세요.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  본인인증 문의 없이 탈퇴할 경우, 30일 이내 재가입(인증)이 불가능합니다.
                </Typography>
                <Grid container justifyContent="flex-end">
                  <Button variant="contained" color="secondary">
                    본인인증 1:1문의하기
                  </Button>
                </Grid>
              </Box>

              <Box p={3} mb={4} border={1} borderColor="grey.300" bgcolor="#f8f9fa">
                <Typography variant="h6" component="div" gutterBottom>
                  회원님의 정보 내역을 확인해 주세요.
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  회원 탈퇴 후 주문정보 및 계좌내역은 모두 삭제됩니다. <br />
                  YES포인트, YES상품권, 예치금 등은 탈퇴 전 모두 잔여금액 소진을 권해드립니다.
                </Typography>
                <TableContainer component={Paper} style={{ marginTop: '10px', marginBottom: '40px', width: '600px' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>진행중인 주문</TableCell>
                        <TableCell>예치금</TableCell>
                        <TableCell>쿠폰</TableCell>
                        <TableCell>포인트</TableCell>
                        <TableCell>상품권</TableCell>
                        <TableCell>쿠폰</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>0건</TableCell>
                        <TableCell>0원</TableCell>
                        <TableCell>0장</TableCell>
                        <TableCell>0원</TableCell>
                        <TableCell>0원</TableCell>
                        <TableCell>0장</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography mt={2} variant="body1" gutterBottom>
                  어떤 점이 불편하셨나요?
                </Typography>
                <RadioGroup name="complaint" style={{ marginBottom: '30px' }}>
                  <Grid>
                    <Grid item xs={12} md={4}>
                      <FormControlLabel value="상품정보 부족" control={<Radio />} label="상품정보 부족" />
                      <FormControlLabel value="상품가격 불만" control={<Radio />} label="상품가격 불만" />
                      <FormControlLabel value="배송서비스 불만" control={<Radio />} label="배송서비스 불만" />
                      <FormControlLabel value="교환/환불/반품 불만" control={<Radio />} label="교환/환불/반품 불만" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControlLabel value="상품 및 콘텐츠 검색 불편" control={<Radio />} label="상품 및 콘텐츠 검색 불편" />
                      <FormControlLabel value="사이트 불편" control={<Radio />} label="사이트 불편" />
                      <FormControlLabel value="회원혜택 부족" control={<Radio />} label="회원혜택 부족" />
                      <FormControlLabel value="상담원 응대 불친절" control={<Radio />} label="상담원 응대 불친절" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <FormControlLabel value="시스템 오류" control={<Radio />} label="시스템 오류" />
                      <FormControlLabel value="예스24 이용안함" control={<Radio />} label="예스24 이용안함" />
                      <FormControlLabel value="개인정보 및 보안 우려" control={<Radio />} label="개인정보 및 보안 우려" />
                    </Grid>
                  </Grid>
                </RadioGroup>
                <Typography variant="body1">정확한 본인확인을 위해 비밀번호를 입력해 주세요.</Typography>
                <TextField variant="outlined" fullWidth margin="normal" value={user?.email} InputProps={{ readOnly: true }} />
                <TextField
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  placeholder="비밀번호"
                  sx={{ m: 0 }}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleDeleteAccount}>
                  회원탈퇴
                </Button>
              </Box>
            </Container>
          </Box>
        </Grid>

        <Typography sx={{ mt: 1, textAlign: 'center' }} variant="body2">
          Copyright © BOOKDO7STARS Corp. All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
};
export default AccountDeletionPage;
