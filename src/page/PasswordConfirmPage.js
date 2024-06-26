import React, { useEffect, useState } from 'react';
import { Container, Box, Button, IconButton, TextField, Typography, Grid, Link, InputLabel, FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../action/userActions';

const PasswordConfirmPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const { error } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleGoToLogout = () => {
    navigate('/');
    dispatch(userActions.logout());
  };
  const handleGoToMyPage = () => {
    navigate('/mypage');
  };

  const handleConfirmPassword = () => {
    dispatch(userActions.confirmPassword(password, navigate));
  };
  const onCheckEnter = (event) => {
    if (event && event.key === 'Enter') {
      event.preventDefault();
      handleConfirmPassword();
    }
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
            <Typography variant="h6">비밀번호 재확인</Typography>
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
          <Box p={8} border={1} borderRadius={1} borderColor="grey.400" sx={{ backgroundColor: '#ffffff' }}>
            <Typography variant="subtitle2" mb={2}>
              개인정보보호를 위해 회원님의 비밀번호를 다시 한번 확인합니다.
            </Typography>

            <Box>
              <Box p={3} width={'500px'} border={1} borderRadius={1} borderColor="grey.200" sx={{ backgroundColor: '#f8f9fa' }}>
                <Grid>
                  <Grid>
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label={user?.email}
                      type="Email"
                      // defaultValue={user?.email}
                      sx={{ width: '47ch', backgroundColor: '#ffffff' }}
                    />
                  </Grid>
                  <FormControl sx={{ mt: 1, width: '47ch', backgroundColor: '#ffffff' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      onKeyPress={onCheckEnter}
                      label="Password"
                    />
                    <Button
                      sx={{ mt: 2, width: '53ch', height: '47px' }}
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={() => handleConfirmPassword()}>
                      확인
                    </Button>
                  </FormControl>
                  {error && <Typography color="error">{error}</Typography>}
                </Grid>
              </Box>

              <Typography sx={{ mt: 2, width: '60ch', textAlign: 'left' }} variant="subtitle2">
                외부 연동 계정을 통해 북두칠성에 회원가입하신 경우,
                <Link href="#" color="primary">
                  1:1 문의
                </Link>
                를 통해 비밀번호를 확인 후 이용해주시기 바랍니다.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Typography sx={{ mt: 1, textAlign: 'center' }} variant="body2">
          Copyright © BOOKDO7STARS Corp. All Rights Reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default PasswordConfirmPage;
