import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const AdminPageClaimTable = ({ claimTableHead, requestList }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // 페이지네이션
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log('requestList', requestList);

  return (
    <>
      {/* 문의 테이블 */}
      <TableContainer component={Paper}>
        <Table>
          {/* 테이블 헤더 */}
          <TableHead>
            <TableRow>
              {claimTableHead.map((head, index) => (
                <TableCell key={index}>{head}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {requestList.length > 0 ? (
              requestList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                <StyledTableRow key={order?._id} onClick={() => handleOpenOrderDialog(order)}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{order?.orderNum}</StyledTableCell>
                  <StyledTableCell>{order?.createdAt.slice(0, 10)}</StyledTableCell>
                  <StyledTableCell>{order?.contact?.name}</StyledTableCell>
                  <StyledTableCell>{order?.request?.requestType}</StyledTableCell>
                  <StyledTableCell>{order?.request?.status}</StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableCell style={{ textAlign: 'center' }}>주문이 존재하지 않습니다.</StyledTableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={requestList?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default AdminPageClaimTable;
