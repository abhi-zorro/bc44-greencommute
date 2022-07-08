/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Dialog, Grid, Paper, RadioGroup, styled } from '@mui/material';
import React from 'react';
import responsiveTheme from '../../../theme';
import RadioButtonComponent from '../../atoms/RadioButton';
import ButtonComponent from '../../atoms/Button';
import CheckBoxComponent from '../../atoms/Checkbox';
import Icon from '../../atoms/Icon';
import TypographyComponent from '../../atoms/Typography';
import close from '../../../../public/assets/icons/DeleteIconWhite.png';

interface FilterMenuProps {
  data: Data[];
}

interface Data {
  id: string;
  name: string;
  inputs: string[];
}

const CustomTypography = styled(TypographyComponent)({
  color: `${responsiveTheme.palette.secondary.dark}`,
  paddingBottom: '12px',
});

const ButtonGrid = styled(Grid)({
  paddingRight: '16px',
  paddingTop: '7px',
});

const MenuContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'end',
  paddingTop: '39px',
});

const MainContainer = styled(Grid)({
  maxWidth: '546px',
  maxHeight: '464px',
});

const CloseIconContainer = styled(Grid)({
  justifyContent: 'end',
  color: `${responsiveTheme.palette.secondary.dark}`,
});

const renderSet = (data: Data[]) => {
  return data.map((entry) => {
    return (
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <CustomTypography variant='body1' children={entry.name} />
          </Grid>
          {entry.id === 'Green_Commute' ? (
            <Grid item>
              <RadioGroup>{renderRadioButton(entry.inputs)}</RadioGroup>
            </Grid>
          ) : (
            <Grid item>{renderCheckbox(entry.inputs)}</Grid>
          )}
        </Grid>
      </Grid>
    );
  });
};

const StyledPaper = styled(Paper)({
  paddingRight: '25px',
  paddingLeft: '50px',
  paddingTop: '31px',
  paddingBottom: '32px',
});

const renderRadioButton = (checkboxInputs: string[]) => {
  return checkboxInputs.map((input) => {
    return (
      <Grid item>
        <RadioButtonComponent label={input} />
      </Grid>
    );
  });
};

const renderCheckbox = (checkboxInputs: string[]) => {
  return checkboxInputs.map((input) => {
    return (
      <Grid item>
        <CheckBoxComponent label={input} />
      </Grid>
    );
  });
};

const FilterMenu: React.FC<FilterMenuProps> = ({ data }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperComponent={StyledPaper}>
      <CloseIconContainer container>
        <Icon url={close} />
      </CloseIconContainer>
      <MainContainer container rowSpacing={5} columnSpacing={6}>
        {renderSet(data)}
      </MainContainer>
      <MenuContainer container direction='row'>
        <ButtonGrid item>
          <ButtonComponent
            buttonVariant='text'
            size={'small'}
            color={'primary'}
            type={'reset'}
            typoVariant={'captionBold'}
            children={'Clear All'}
          />
        </ButtonGrid>
        <Grid item>
          <ButtonComponent
            size={'small'}
            buttonVariant='contained'
            color={'primary'}
            type={'button'}
            typoVariant={'captionBold'}
            children={'Apply'}
          />
        </Grid>
      </MenuContainer>
    </Dialog>
  );
};

export default FilterMenu;
