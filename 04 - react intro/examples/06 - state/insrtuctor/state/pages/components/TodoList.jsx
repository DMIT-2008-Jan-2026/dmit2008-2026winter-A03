import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


export default function TodoList() {

    const onTodoTextChange = (event) => {
        console.log(event.target.value)
    }

    return <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

            <Grid item xs={10}>
                <TextField
                    id="standard-basic"
                    label="New Todo Item"
                    variant="standard"
                    sx={{ width: '100%' }}
                    onChange={onTodoTextChange}
                />
            </Grid>

        </Grid>
    </Box>
}
