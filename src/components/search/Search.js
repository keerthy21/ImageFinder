import React, {useEffect, useState} from 'react'
import {TextField, SelectField, MenuItem} from 'material-ui';
import axios from 'axios';


const Search = () => {

    const [data, setData] = useState(
        {
            searchText: '',
            amount: 15,
            apiUrl: 'https://pixabay.com/api',
            apiKey: '16671798-01f55fad2301ad3f652388cef',
            images: []
        }
    );

    useEffect(()=>{
        onTextChange()
    },[]);

    console.log(data.images)
     const onTextChange = e=>{
      setData({[e.target.name]: e.target.value} ,()=>{
          axios.get(`${data.apiUrl}/?key=${data.apiKey}&q=${data.searchText}&image_type=photo&per_page=${data.amount}&safesearch=true`)
              .then(res =>setData({images:res.data.hits}))
              .catch(err => console.log(err));

      });
    };

    const onAmountChange = ()=>{

    }

    return (
        <div>
            <TextField
                name="SearchText"
                value={data.searchText}
                onChange={onTextChange}
                floatingLabelText="Search For Images"
                fullWidth={true}
            />
            <br/>
            <SelectField
                name="amount"
                value={data.amount}
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
