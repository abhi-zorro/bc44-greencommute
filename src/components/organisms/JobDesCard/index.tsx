import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { CommonProps } from '@mui/material/OverridableComponent';
import Logo from '../../atoms/Logo';
import TypographyComponent from '../../atoms/Typography';
import CustomSvgIcon from '../../atoms/IconSVG';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';
import theme from '../../../theme';
import CardActions from '@mui/material/CardActions';
import Button from '../../atoms/Button';
import { useState } from 'react';
import { styled } from '@mui/material';

interface DescProps {
  companyLogo: string;
  company: string;
  title: string;
  location: string;
  postedDate: string;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}

const useStyles = makeStyles({
  title: {
    color: `${theme.palette.secondary.dark}`,
  },
  svg: {
    height: '60px',
    width: '60px',
  },
  location: {
    color: `${theme.palette.secondary.darker}`,
  },
  apply: {
    width: '50px !important',
  },
});

const MainCard = styled(Card)({
  paddingLeft: '21px',
  paddingRight: '21px',
  width: '400px',
});

const CompanyLogo = styled('img')({
  width: '55px',
  height: '55px',
});

const MoreIcon = styled('div')({
  marginTop: '11px',
});

const CustomCardActions = styled(CardActions)({
  justifyContent: 'flex-start',
  paddingRight: '10px',
  paddingLeft: '75px',
});

const CustomCardHeader = styled(CardHeader)({
  padding: '0px',
});
const JobDesCard: React.FC<DescProps & CommonProps> = ({
  companyLogo,
  postedDate,
  company,
  title,
  location,
  onClickHandler,
}) => {
  const [isSaved, changeState] = useState<boolean>(false);
  const [isApplied, changeAppliedState] = useState<boolean>(false);

  const classes = useStyles();
  const wrapSaveClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeState(!isSaved);
  };

  const wrapApplyClickHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    changeAppliedState(!isApplied);
  };

  return (
    <MainCard>
      <CustomCardHeader
        avatar={<CompanyLogo src={companyLogo} />}
        title={
          <Box>
            <TypographyComponent variant='subtitle1' className={classes.title}>
              {title}
            </TypographyComponent>
            <TypographyComponent variant='caption' className={classes.location}>
              {company}
            </TypographyComponent>
          </Box>
        }
        subheader={
          <Box>
            <TypographyComponent variant='caption' className={classes.location}>
              {location}
            </TypographyComponent>
            <br></br>
            <TypographyComponent variant='captionBold' className={classes.location}>
              {postedDate}
            </TypographyComponent>
          </Box>
        }
        action={
          <MoreIcon>
            <CustomSvgIcon component={MoreHorizIcon} />
          </MoreIcon>
        }
      />
      <CustomCardActions>
        <Button
          color='primary'
          type={'button'}
          size='small'
          buttonVariant='outlined'
          typoVariant='captionBold'
          onClickHandler={wrapSaveClickHandle}
        >
          {!isSaved ? 'Save' : 'Unsave'}
        </Button>
        <Button
          color='primary'
          type={'submit'}
          size='small'
          buttonVariant='contained'
          typoVariant='captionBold'
          onClickHandler={wrapApplyClickHandle}
        >
          {!isApplied ? 'Apply' : 'Applied'}
        </Button>
      </CustomCardActions>
    </MainCard>
  );
};

export default JobDesCard;
