import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return({
        root: {
            display: 'flex',
            justifyContent: 'center',
            width: 'auto',

            '& > *': {
                padding: theme.spacing(2),
            },
        },   
    })
});
        

export const Marker = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <Paper elevation={3}>
                {props.text}
            </Paper>
        </div>
    )
}

export default Marker;