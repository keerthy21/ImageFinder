import React, {Component} from 'react';
import {TextField, SelectField, MenuItem} from 'material-ui';
import axios from 'axios';


class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '16671798-01f55fad2301ad3f652388cef',
        images: []
    }

    const
    onTextChange = e => {
        setSearchText(e.target.value);
    };

    const
    onAmountChange = e => {
        setAmount(e.target.value);
    };

    const
    apiCall = () => {

        axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`)
            .then(res => setImages(res.data.hits))
            .catch(err => console.log(err));
        console.log(images)

    };


    return(

<div>
<TextField
name="SearchText"
value={searchText}
onChange={onTextChange}
floatingLabelText="Search For Images"
fullWidth={true}
/>
<br/>
<SelectField
name="amount"
value={amount}
onChange={onAmountChange}
floatingLabelText="Amount"
>
<MenuItem value={5} primaryText="5"/>
<MenuItem value={10} primaryText="10"/>
<MenuItem value={15} primaryText="15"/>

</SelectField>
<br/>
</div>
)
    ;
}

export default Search
