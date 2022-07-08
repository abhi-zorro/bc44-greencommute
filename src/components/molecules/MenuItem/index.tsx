/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Box, ListItemIcon, MenuItem, styled } from '@mui/material';
import responsiveTheme from '../../../theme';
import CustomSvgIcon from '../../atoms/IconSVG';
import TypographyComponent from '../../atoms/Typography';
import { CommonProps } from '@mui/material/OverridableComponent';

interface MenuItemProps {
  component: React.FC;
  selectedComponent: React.FC;
  itemData: String;
  selected: boolean;
  handleState?: React.MouseEventHandler<HTMLLIElement>;
}

const StyledMenuItem = styled(MenuItem)({
  width: '270px',
  height: '63px',
  paddingBottom: '16px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiMenuItem-root': {
    '& .Mui-selected': {
      backgroundColor: responsiveTheme.palette.info.light,
      color: responsiveTheme.palette.primary.main,
    },
  },
});

const MainContainer = styled('div')({
  padding: '0px',
  display: 'flex',
  flexDirection: 'row',
});
const Line = styled(Box)({
  width: '4px',
  height: '63px',
  marginLeft: '-4px',
  display: 'flex-wrap',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  backgroundColor: `${responsiveTheme.palette.primary.normal}`,
});

const menuItemTypographyStyle = {
  color: responsiveTheme.palette.secondary.dark,
};

const selectedMenuItemTypographyStyle = {
  color: responsiveTheme.palette.primary.main,
};

const selectedSvgIconBorderStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  borderRadius: '50%',
  alignItems: 'center',
  display: 'flex',
  marginRight: '8px',
  justifyContent: 'center',
};

const svgIconBorderStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: responsiveTheme.palette.greyScale.light,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',
  justifyContent: 'center',
};

const svgIconStyle = {
  paddingLeft: '8.5',
  paddingTop: '4px',
};

const MenuItemComponent = (props: MenuItemProps & CommonProps) => {
  const { component, itemData, selected, selectedComponent, handleState } = props;
  return (
    <MainContainer>
      <StyledMenuItem onClick={handleState} selected={selected}>
        <ListItemIcon style={selected ? selectedSvgIconBorderStyle : svgIconBorderStyle}>
          <CustomSvgIcon component={!selected ? component : selectedComponent} />
        </ListItemIcon>
        <TypographyComponent
          variant='body2'
          children={itemData}
          style={selected ? selectedMenuItemTypographyStyle : menuItemTypographyStyle}
        />
      </StyledMenuItem>
      {selected ? <Line></Line> : ''}
    </MainContainer>
  );
};

export default MenuItemComponent;
