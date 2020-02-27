import React from 'react';

import useStyles from './styles';

const Board = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}></div>
    )
}

export default Board;