/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Box, Dialog, Grid, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import ButtonComponent from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import close from '../../../../public/assets/icons/DeleteIconWhite.png';
import React from 'react';
import responsiveTheme from '../../../theme';

const MainDialog = styled(Dialog)({
  width: '46.87rem',
  height: '28rem',
  borderRadius: '0.75rem',
  paddingLeft: '3.37rem',
  paddingBottom: '3.37rem',
});

const TypographyContainer = styled(Grid)({
  paddingLeft: '1.25rem',
  paddingRight: '1.25rem',
});

const DottedContainer = styled(Box)({
  width: '34.5rem',
  height: '14.25rem',
  backgroundColor: `${responsiveTheme.palette.success.main}`,
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: `${responsiveTheme.palette.primary.main}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0.75rem',
});

const TypographyItem = styled(Grid)({
  paddingBottom: '0.3rem',
  display: 'flex',
  flexDirection: 'row',
});

const CloseIconContainer = styled(Grid)({
  justifyContent: 'end',
  paddingTop: '1.56rem',
  paddingRight: '1.56rem',
  color: `${responsiveTheme.palette.secondary.darker}`,
});

const DottedContainerItem = styled(Grid)({
  paddingBottom: '3.375rem',
});

const FileUploadCard: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MainDialog open={open} onClose={handleClose}>
      <CloseIconContainer container>
        <Icon url={close} />
      </CloseIconContainer>
      <TypographyContainer container direction='column'>
        <TypographyItem item direction='row'>
          <TypographyComponent variant={'h2'}>File Upload</TypographyComponent>
        </TypographyItem>
        <DottedContainerItem item>
          <DottedContainer data-testid='Button1004'>
            <ButtonComponent
              buttonVariant={'contained'}
              children={'Click Here to Upload File'}
              color={'primary'}
              size={'large'}
              typoVariant={'captionBold'}
            />
          </DottedContainer>
        </DottedContainerItem>
      </TypographyContainer>
    </MainDialog>
  );
};

export default FileUploadCard;
