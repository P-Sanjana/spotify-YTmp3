import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';

import Typography from '../../atoms/typography';
import theme from '../../../theme/theme';
import {
  APP_NAME,
  copyright,
  footerOptions,
  footerSubText,
} from '../../../utils/constants';

const FooterBox = styled(Box)(() => ({
  backgroundColor: theme.palette.primary.main,
  padding: `${theme.spacing(2)} ${theme.spacing(0)} ${theme.spacing(4)} ${theme.spacing(0)}`,
  flexGrow: 1,
}));

const GridLeftItem = styled(Grid)(() => ({
  height: '100%',
}));

const Footer = () => {
  return (
    <FooterBox>
      <Grid container spacing={2} justifyContent='space-between'>
        <Grid item xs={6} sm={6} md={6} direction='column'>
          <GridLeftItem container>
            <Grid item xs={12}>
              <Typography variant='body1' color={theme.palette.text.primary}>
                {APP_NAME}
              </Typography>
              <Typography variant='caption' color={theme.palette.text.primary}>
                {footerSubText}
              </Typography>
            </Grid>
            <Grid item xs={12} display='grid' alignItems='flex-end'>
              <Typography variant='caption' color={theme.palette.text.primary}>
                {copyright}
              </Typography>
            </Grid>
          </GridLeftItem>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Grid
            container
            direction='column'
            rowSpacing={theme.spacing(1)}
            alignItems='flex-end'
          >
            {footerOptions?.map((option) => {
              return (
                <Grid
                  item
                  key={`footer-option-${option}`}
                  xs={12}
                  sm={12}
                  md={12}
                >
                  <Typography
                    variant='caption'
                    color={theme.palette.text.primary}
                  >
                    {option}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </FooterBox>
  );
};
export default Footer;
