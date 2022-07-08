import { Box, Drawer, styled } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../../organisms/Header';
import theme from '../../../theme';
import SideMenu from '../../organisms/SideMenu';
import TypographyComponent from '../../atoms/Typography';
import Search from '../../organisms/JobSearch';

const MainContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  position: 'relative',
});

// const BodyContainer = styled(Container)({
//   marginRight: '0px',
//   marginLeft: '0px',
//   position: 'relative',
//   width: '100%',
// });

const BodyContainer = styled(Grid)({
  width: '100%',
  flexWrap: 'nowrap',
});
const JobContainer = styled(Container)({
  marginTop: '6%',
  backgroundColor: `#E5E5E5`,
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
});

const MenuDrawer = styled(Drawer)({
  '& .MuiBackdrop-root': {
    display: 'none',
  },
  '& .MuiDrawer-paper': {
    overflow: 'initial',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 8px rgba(125, 125, 125, 0.12)',
    zIndex: '0',
  },
});

const SearchContainer = styled(Grid)({
  position: 'relative',
});

const HomePage = () => {
  return (
    <MainContainer>
      <Header userLocation={'East MaredPally'} />
      <BodyContainer direction='row' spacing={3}>
        <Grid item xl={3}>
          <MenuDrawer variant='permanent'>
            <SideMenu />
          </MenuDrawer>
        </Grid>
        <Grid item xl={6}>
          <SearchContainer container direction='column'>
            <Grid item>
              <TypographyComponent variant='h3'>Find Jobs</TypographyComponent>
            </Grid>
            <Grid item>
              <Search />
            </Grid>
          </SearchContainer>
        </Grid>
      </BodyContainer>
    </MainContainer>
  );
};

export default HomePage;
