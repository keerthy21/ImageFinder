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
    };

    onTextChange = e => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({images: res.data.hits}))
                .catch(err => console.log(err));
        });
    };

    onAmountChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                    name="SearchText"
                    floatingLabelText="Search For Images"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={true}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>

                </SelectField>
                <br/>
            </div>
        );
    }
}

export default Search;
