import React, {useState} from 'react'

import {TextField, SelectField, MenuItem} from 'material-ui';

const Search = () => {
    const [state, setstate] = useState(
        {
            searchText: '',
            amount: 15,
            apiUrl: 'https://pixabay.com/api',
            apiKey: '16671798-01f55fad2301ad3f652388cef',
            images: []
        }
    );
    return (
        <div>
            <TextField
                name="SearchText"
                value={this.state.searchText}
                onChange={this.onTextChange}
                floatingLabelText="Search For Images"
                fullWidth={true}
            />
            <br/>
            <SelectField
                name="amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
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
