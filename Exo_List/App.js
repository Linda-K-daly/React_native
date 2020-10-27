import React from 'react';
import { FlatList, View, Text } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);

    this.state = {
      countries: [],
    }
  }



  renderItem({ item }) {
    return (
      <View>
        <Text>{item.name},{item.capital} </Text>
      </View>
    );
  }

  componentDidMount() {
    const listCountries = this.state.countries.map(elem => {
      const url = 'http://restcountries.eu/rest/v2/all'
      return fetch(url).then(res => res.json())
    });
      const countriesParse = JSON.parse(listCountries)
      console.log (countriesParse)

    Promise.all()
      .then(res => {
        console.log('[countries results]', res);
          return {
            title: elem.name,
            description: elem.capital,
            imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
          }
        })
        console.log('[newlist of countries] results', listCountries)
        this.setState({
          countries: listCountries
        })
    
      // .catch(err => console.log(err))
  }

 

  render() {
    return (
      <FlatList
        // data={[{key: 'a', key: 'b'}]}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default App;