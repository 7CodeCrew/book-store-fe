import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BookCard from '../BookCard';

const AuthorBooksSection = ({ otherBooksByAuthor }) => {
  return (
    <Box id="author" my={4}>
      <Typography variant="h4">저자의 다른 책들</Typography>
      {otherBooksByAuthor.length !== 0 ? (
        <Grid container spacing={2} mt={2}>
          {otherBooksByAuthor.map((otherBook) => (
            <Grid item xs={6} sm={4} md={3} key={otherBook._id}>
              <BookCard book={otherBook} sx={{ width: 120, height: 180 }} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ width: '100%', height: '100px', backgroundColor: 'green', mt: 2 }}>이 작가의 다른 책이 없습니다.</Box>
      )}
    </Box>
  );
};

export default AuthorBooksSection;