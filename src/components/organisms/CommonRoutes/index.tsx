/**
 * @author Asish Kalintha <asish.sugun@zemosolabs.com>
 */

import { Grid, SvgIcon } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { makeStyles } from '@mui/styles';
import responsiveTheme from '../../../theme';
import { ReactComponent as backIcon } from '../../../../public/assets/icons/back.svg';
import { ReactComponent as bike } from '../../../../public/assets/icons/scootyIcon.svg';
import { ReactComponent as metro } from '../../../../public/assets/icons/metroIcon.svg';
import { ReactComponent as cab } from '../../../../public/assets/icons/cabIcon.svg';
import { ReactComponent as bus } from '../../../../public/assets/icons/busIcon.svg';
import { ReactComponent as cabWhite } from '../../../../public/assets/icons/cabIconWhite.svg';
import { ReactComponent as busWhite } from '../../../../public/assets/icons/busIconWhite.svg';
import { ReactComponent as locPad } from '../../../../public/assets/icons/locPad.svg';
import { ReactComponent as locationOrange } from '../../../../public/assets/icons/locationIconOrange.svg';
import { ReactComponent as swap } from '../../../../public/assets/icons/swap.svg';
import eclipsePng from '../../../../public/assets/icons/eclipse.png';
import CustomSvgIcon from '../../atoms/IconSVG';
import { useState } from 'react';
import Icon from '../../atoms/Icon';
import swapPng from '../../../../public/assets/icons/swap.png';

const useStyles = makeStyles({
  container: {
    width: '362px',
    paddingLeft: '21px',
    paddingRight: '21px',
  },
  container2: {
    color: `${responsiveTheme.palette.secondary.dark}`,
    paddingBottom: '5px',
  },
  container3: {
    color: `${responsiveTheme.palette.secondary.darker}`,
    paddingBottom: '9px',
  },
  iconContainer: {
    paddingRight: '15px',
    display: 'flex',
    maxWidth: '362px',
    justifyContent: 'flex-Start',
  },
  pad1: {
    paddingTop: '2.5px',
    paddingLeft: '10px',
  },
  container4: {
    width: '39px',
    height: '39px',
    borderRadius: '50px',
    backgroundColor: `${responsiveTheme.palette.primary.main}`,
    marginLeft: '5px',
    marginRight: '5px',
  },
  alignment2: {
    width: '39px',
    height: '39px',
    borderRadius: '50px',
    backgroundColor: `${responsiveTheme.palette.primary.main}`,
    marginRight: '5px',
  },

  iconAlignment: {
    marginLeft: '10.5px',
    marginTop: '10.5px',
  },
  container5: {
    boxShadow: `0px -2px 10px #7D7D7D`,
    marginBottom: '10px',
  },
  container6: {
    paddingTop: '11.5px',
    paddingLeft: '11.5px',
    height: '28px',
  },
  container7: {
    padding: '10px',
    paddingLeft: '5.5px',
  },
  container8: {
    height: '20px',
    paddingLeft: '3px',
    paddingTop: '2px',
  },
  innerIcon: {
    marginTop: '1.5px',
  },
  swap: {
    alignItems: 'center',
    justifyContent: 'end',
    paddingTop: '10px',
  },
  swapIcon: {
    paddingTop: '20px',
  },
  container10: {
    paddingTop: '7px',
    marginLeft: '16.5px',
    marginRight: '280px',
  },
  dotContainer: {
    height: '8px',
  },
});

interface CommonRoutesProps {
  currentLocation: string;
  destination: string;
}

const CommonRoutesCard: React.FC<CommonRoutesProps> = ({ currentLocation, destination }) => {
  const [cabOption, setCabOption] = useState<boolean>(false);
  const [busOption, setBusOption] = useState<boolean>(true);
  const handleClick = () => {
    setCabOption(!cabOption);
    setBusOption(!busOption);
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction='column'>
        <Grid item className={classes.container2}>
          <Grid container direction='row'>
            <Grid item>
              <CustomSvgIcon component={backIcon} />
            </Grid>
            <Grid item className={classes.pad1}>
              <TypographyComponent variant={'body1'} children={'Common Routes'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column' className={classes.container5}>
            <Grid item>
              <Grid container direction='row' className={classes.container6}>
                <Grid item>
                  <SvgIcon component={locPad} className={classes.innerIcon} />
                </Grid>
                <Grid item>
                  <TypographyComponent variant={'caption'} children={currentLocation} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Grid container direction='column' className={classes.container10}>
                    <Grid item className={classes.dotContainer}>
                      <Icon url={eclipsePng} />
                    </Grid>
                    <Grid item className={classes.dotContainer}>
                      <Icon url={eclipsePng} />
                    </Grid>
                    <Grid item className={classes.dotContainer}>
                      <Icon url={eclipsePng} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className={classes.swap}>
                  <Icon url={swapPng} className={classes.swapIcon} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction='row' className={classes.container7}>
                <Grid item>
                  <SvgIcon component={locationOrange} />
                </Grid>
                <Grid item className={classes.container8}>
                  <TypographyComponent variant={'caption'} children={destination} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction='row' className={classes.iconContainer}>
          <Grid item>
            <div>
              <SvgIcon component={bike} className={classes.iconAlignment} />
            </div>
          </Grid>
          <Grid item>
            {busOption ? (
              <div className={classes.container4}>
                <SvgIcon component={busWhite} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            ) : (
              <div>
                <SvgIcon component={bus} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            )}
          </Grid>
          <Grid item>
            {cabOption ? (
              <div className={classes.container4}>
                <SvgIcon component={cabWhite} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            ) : (
              <div>
                <SvgIcon component={cab} className={classes.iconAlignment} onClick={handleClick} />
              </div>
            )}
          </Grid>
          <Grid item>
            <div>
              <SvgIcon component={metro} className={classes.iconAlignment} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CommonRoutesCard;
