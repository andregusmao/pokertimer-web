import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Background from '../../assets/pokertimer-background.jpg';

const useStyles = makeStyles({
    root: {
        backgroundImage: Background,
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }
});

export default useStyles;