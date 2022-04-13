import React from 'react';

class CreateList extends React.Component {
    state = { name: '' }

    onInputChange = (event) => {
        this.setState({ name: event.target.value })
    }

    render () {
        return (
            <div className="ui container ui raised segment">
                <form className="ui form">
                    <div className="field">
                        <label>List Name</label>
                        <input 
                            type="text" 
                            name="list-name" 
                            placeholder="List Name"
                            value={this.state.name}
                            onChange={this.onInputChange}
                        />
                    </div>
                        <button
                            className="ui button" 
                            type="submit"
                            onClick={() => this.props.onSubmitClick(this.state.name)}
                        >Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateList;