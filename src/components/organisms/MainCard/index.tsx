/**
 * @author Abhishek Bhemisetty <abhishek.bhemisetty@zemosolabs.com>
 */

import theme from '../../../theme';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '../../atoms/Button';
import InputField from '../../atoms/InputField';
import TypographyComponent from '../../atoms/Typography';
import TabPanel from '../TabPanel';
import React, { useState } from 'react';
import { CommonProps } from '@mui/material/OverridableComponent';
import { styled } from '@mui/material';

interface TabPanelProps {
  searchBarText?: string;
}

const ButtonGrid = styled(Grid)({
  marginTop: '40px !important',
});

const GridTab = styled(Grid)({
  height: '60px',
});

const Skip = styled(TypographyComponent)({
  width: '38px',
  marginTop: '60px !important',
  color: `${theme.palette.primary.main}`,
  borderBottom: `2px solid ${theme.palette.primary.main}`,
});

const Subtitle = styled(TypographyComponent)({
  marginBottom: '12px !important',
});

const SpacedButton = styled('div')({
  display: 'inline',
  padding: '0px',
  paddingRight: '12px',
});

const MainContainer = styled(Container)({
  width: '672px',
});

const TypoGrid = styled(Grid)({
  marginTop: '72px',
  marginBottom: '64px',
});

const MainCard: React.FC<TabPanelProps & CommonProps> = ({ searchBarText }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  //for just checking the feature, implementation will be added in pages
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  //for just checking the feature, implementation will be added in pages
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const backClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <MainContainer>
      <Grid container direction='column' justifyContent='center'>
        <GridTab item>{currentPage === 0 ? <TabPanel></TabPanel> : <TabPanel pageId={currentPage} />}</GridTab>
        <TypoGrid item>
          <TypographyComponent variant='h1'>More than 2000 people are using Green Commute</TypographyComponent>
        </TypoGrid>
        <Grid item>
          <Subtitle variant='subtitle1'>{searchBarText}</Subtitle>
          <InputField
            placeholder={'Enter your job location'}
            handleClick={handleClick}
            handleDelete={handleDelete}
          ></InputField>
        </Grid>
        <ButtonGrid item>
          {currentPage > 0 ? (
            <SpacedButton>
              <Button
                color='primary'
                buttonVariant='outlined'
                type='reset'
                typoVariant='body1'
                onClickHandler={backClickHandlerWrap}
                size='large'
              >
                Back
              </Button>
            </SpacedButton>
          ) : (
            ''
          )}
          <Button
            color='primary'
            buttonVariant='contained'
            type='button'
            typoVariant='body1'
            onClickHandler={nextClickHandlerWrap}
            size='medium'
          >
            Next
          </Button>
        </ButtonGrid>
        <Grid item>
          <Skip variant='subtitle1'>Skip</Skip>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

MainCard.defaultProps = {
  searchBarText: 'Where do you stay?',
};

export default MainCard;
