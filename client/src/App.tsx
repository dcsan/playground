import React from 'react';
import './App.css';

const Block = (props: any) => {
  return (<div>block [{ props.title }]</div>)
}

const Header = (props: any) => {
  return (<div>header [{ props.title }]</div>)
}


const List = (props: any) => {
  const count = props.children.length
  return (
  <div>
    <h2>list { count }</h2>
      { props.children.map((c: any) => {
        console.log('c', c)
        // c.props.title += '-block'
        const title = c.props.title + '-header'
        return <Header title={ title } key={ title }/>
      })
      }
  </div>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <List>
        <Block title='red'></Block>
        <Block title='green'></Block>
        <Header title='green'></Header>
      </List>
    </div>
  );
}

export default App;
