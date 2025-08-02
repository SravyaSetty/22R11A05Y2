


// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Container,
//   Grid,
//   Paper,
//   useMediaQuery,
// } from '@mui/material';

// const App = () => {
//   const isMobile = useMediaQuery('(max-width:768px)');

//   return (
//     <Box
//       sx={{
//         backgroundColor: '#F6F6F6',
//         minHeight: '100vh',
//         py: 6,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center" justifyContent="center">
//           {/* Left Side - Text */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" fontWeight="bold" gutterBottom>
//               More than just shorter links
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 3 }}>
//               Build your brand’s recognition and get detailed insights on how your links are performing.
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: '#A2D5C6',
//                 color: '#000',
//                 borderRadius: '999px',
//                 px: 4,
//                 py: 1,
//                 fontWeight: 'bold',
//                 textTransform: 'none',
//                 '&:hover': {
//                   backgroundColor: '#8ccfba',
//                 },
//               }}
//             >
//               Get Started
//             </Button>
//           </Grid>

//           {/* Right Side - Removed image area */}
//           <Grid item xs={12} md={6} />
//         </Grid>

//         {/* Shorten URL section */}
//         <Paper
//           elevation={3}
//           sx={{
//             backgroundColor: '#CFFFE2',
//             mt: 8,
//             p: isMobile ? 2 : 4,
//             borderRadius: 3,
//             display: 'flex',
//             flexDirection: isMobile ? 'column' : 'row',
//             alignItems: 'center',
//             gap: 2,
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Shorten a link here..."
//             fullWidth
//             sx={{
//               backgroundColor: '#fff',
//               borderRadius: 1,
//               input: { color: '#000' },
//             }}
//           />
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#A2D5C6',
//               color: '#000',
//               px: 4,
//               py: 1.5,
//               fontWeight: 'bold',
//               '&:hover': {
//                 backgroundColor: '#8ccfba',
//               },
//             }}
//           >
//             Shorten It!
//           </Button>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default App;

import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Grid,
  Paper,
  useMediaQuery,
} from '@mui/material';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box
      sx={{
        backgroundColor: '#F6F6F6',
        minHeight: '100vh',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              More than just shorter links
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#A2D5C6',
                color: '#000',
                borderRadius: '999px',
                px: 4,
                py: 1,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#8ccfba',
                },
              }}
            >
              Get Started
            </Button>
          </Grid>

          {/* Right Side - Optional image area */}
          <Grid item xs={12} md={6}></Grid>
        </Grid>

        {/* Shorten URL section */}
        <Paper
          elevation={3}
          sx={{
            backgroundColor: '#CFFFE2',
            mt: 8,
            p: isMobile ? 2 : 4,
            borderRadius: 3,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Shorten a link here..."
            fullWidth
            sx={{
              backgroundColor: '#fff',
              borderRadius: 1,
              input: { color: '#000' },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#A2D5C6',
              color: '#000',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#8ccfba',
              },
            }}
          >
            Shorten It!
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
