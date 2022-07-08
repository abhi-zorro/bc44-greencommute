import { Checkbox, FormControlLabel, styled } from '@mui/material';
import { ReactComponent as unChecked } from './unChecked.svg';
import { ReactComponent as checked } from './checked.svg';
import responsiveTheme from '../../../theme/index';

import CustomSvgIcon from '../IconSVG';

interface CheckBoxProps {
  label: string | undefined;
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  '& .MuiFormControlLabel-label': {
    fontWeight: '500',
    fontFace: responsiveTheme.typography.body2,
    color: responsiveTheme.palette.secondary.darker,
  },
}));

const StyledCheckbox = styled(Checkbox)({
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiSvgIcon-root': {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.3rem',
  },
});

const CheckBoxComponent = (props: CheckBoxProps) => {
  const { label } = props;

  return (
    <StyledFormControlLabel
      control={
        <StyledCheckbox
          icon={<CustomSvgIcon component={unChecked} />}
          checkedIcon={<CustomSvgIcon component={checked} />}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default CheckBoxComponent;
