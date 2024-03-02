
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropDown({ categ, categorySelection, transId }) {

    console.log(transId);


    const [category, setCategory] = React.useState('');

    // const handleChange = (event) => {
    //     setCategory(event.target.value);
    // };


    function patchToCategoryTest() {
        fetch(`http://localhost:3000/transactions`)
    }



    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Expense Category"
                onChange={categorySelection}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}