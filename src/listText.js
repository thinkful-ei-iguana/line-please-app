import React from 'react';


class listText extends React.Component {
state = {textTitles: [],}

getTitleNames = () => {
    const URL = 'http://localhost:8000/textTitles';
  
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error (res.statusText);
        }
        return res.json();
      })
      .then(titles => {
        console.log(titles);
        this.setState({
          textTitles: titles,
        });
      })
      .catch(err => {
        this.setState({
          error: 'Sorry could not find that',
        });
      })
  
  }

  displayTitleNames = (titles) => {

    return (
      titles.map(text => <li>{text.title}<button onClick={e => this.deleteText(text.id)}>DELETE</button></li>)
     
    )}

    deleteText = (id) => {
        fetch('http://localhost:8000/listText', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
    }

componentDidMount () {
        this.getTitleNames();
      }


render () {
    return (
        <ul>
        {this.displayTitleNames(this.state.textTitles)}
        </ul>
        
    )}


}

export default listText; 