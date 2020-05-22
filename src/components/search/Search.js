import React, {useEffect, useState} from 'react';
import {TextField, SelectField, MenuItem} from 'material-ui';
import axios from 'axios';


const Search = () => {

    const [images, setImages] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [amount, setAmount] = useState(15);

    useEffect(() => {
        apiCall();
    }, [searchText, amount]);

    const onTextChange = e => {
        setSearchText(e.target.value);
    };

    const onAmountChange = e => {
        setAmount(e.target.value);
    };

    const apiCall = () => {
        const apiUrl = 'https://pixabay.com/api'
        const apiKey = '16671798-01f55fad2301ad3f652388cef'
        axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`)
            .then(res => setImages(res.data.hits))
            .catch(err => console.log(err));
        console.log(images)

    };


    return (
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
    );
}

export default Search
