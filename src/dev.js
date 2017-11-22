import './dev.scss';
import ReactShortcutToScreen from './main';

/*===example start===*/

// install: npm install afeiship/react-shortcut-to-screen --save
// import : import ReactShortcutToScreen from 'react-shortcut-to-screen'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-shortcut-to-screen">
        <ReactShortcutToScreen ref='rc' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
