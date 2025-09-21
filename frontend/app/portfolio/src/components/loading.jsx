import { Box, Paper } from '@mui/material';


function LoadingPage({ isLoading }){

    return (
        <>
         {isLoading? <Box>

         </Box>: <p>Nothing</p>}
        </>
    );
}

export { LoadingPage };
