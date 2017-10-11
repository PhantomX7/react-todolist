import React,{Component} from 'react';

class InputBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.term===''){
      return null;
    }
    this.props.insert(this.state.term);
    this.setState({term:''})
  }


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </form>
    );
  }

  onInputChange(term){
    this.setState({term});
  }
}

export default InputBar;
