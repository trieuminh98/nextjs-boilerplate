import {
  type BackdropProps as MBackdropProps,
  Backdrop as Mbackdrop,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

type BackdropProps = {} & MBackdropProps;

export function Backdrop({ open }: BackdropProps) {
  return (
    <Mbackdrop sx={{ color: '#fff' }} open={open}>
      <CircularProgress color="inherit" />
    </Mbackdrop>
  );
}
