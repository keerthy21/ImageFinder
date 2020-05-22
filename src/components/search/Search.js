import React, {useState} from 'react'
import {TextField, SelectField, MenuItem} from 'material-ui';
import axios from 'axios';


const Search = () => {
    const [state, setState] = useState(
        {
            searchText: '',
            amount: 15,
            apiUrl: 'https://pixabay.com/api',
            apiKey: '16671798-01f55fad2301ad3f652388cef',
            images: []
        }
    );

    const onTextChange = (e)=>{
      setState({[e.target.name]: e.target.value} ,()=>{
          axios.get(`${state.apiUrl}/?key=${state.apiKey}&q=${}`)
      });
    };

    const onAmountChange = ()=>{

    }

    return (
        <div>
            <TextField
                name="SearchText"
                value={state.searchText}
                onChange={onTextChange}
                floatingLabelText="Search For Images"
                fullWidth={true}
            />
            <br/>
            <SelectField
                name="amount"
                value={state.amount}
                onChange={onAmountChange}
                floatingLabelText="Amount"
            >
                <MenuItem value={5} primaryText="5"/>
                <MenuItem value={10} primaryText="10"/>
                <MenuItem value={15} primaryText="15"/>

            </SelectField>
            <br/>
        </div>
    );
}

export default Search
