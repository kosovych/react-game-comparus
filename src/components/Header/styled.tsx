import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const HeaderInner = styled('header')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
    padding: `${theme.spacing(2)}`
}));

export const Score = styled(Paper)(() => ({
    padding: `4px 8px`,
    marginRight: 'auto',
    marginLeft: 0
}));
