import React from 'react';
import { FlatList, View, Text } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);

    this.state={
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

    Promise.all(listCountries)
            .then(res => {
                console.log ('[countries results]' , res);
                const newCountries = res.map ( elem => {
                    return {
                        title: elem.name,
                        description: elem.capital,
                        // imgUrl: `https://image.tmdb.org/t/p/w300/${elem.poster_path}`
                    }
                })
                console.log ('[newlist of countries] results', newCountries)
                this.setState({
                  countries: newCountries
                })
              })
              .catch(err => console.log(err))
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