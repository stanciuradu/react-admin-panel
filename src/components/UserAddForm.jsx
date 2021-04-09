import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            wage:'',
            src:'',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }
    // metoda penntru a actualiza inputul pentru salariu
    updateWage(event){
        const newWage=event.target.value;
        this.setState({wage:newWage});
    }
    // metoda pentru a actualiza iputul file pentru imagine
    updateSrc(event){
        const newSrc=event.target.files;
        this.setState({src:newSrc});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }
    

    render() {
        const {name, email, wage, src, isGoldClient} = this.state;

        return (
            
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, wage, src, isGoldClient)}
            >
                <div className='validare'>
                    {/* operator ternar pentru pentru validare nume */}
                    {
                        this.state.name!==''
                            ?<p>Nume introdus</p>
                            :<p>Nume necompletat</p>
                    }
                
                {/* operator ternar pentru validarea emailului-am folosit pentru string metoda includes pentru a verifica daca stringul contine un anumit substring */}
                    {
                        this.state.email.includes('@') && this.state.email.includes('.')
                            ?<p>Email valid</p>
                            :<p>Email invalid</p>
                    }
                </div>
                {/* adaugam value pentru fiecare input pentru a avea Control 100% asupra valorii inputurilor */}
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    id='name'
                    onChange={(event) => this.updateName(event)}
                    value={this.state.name}
                />  
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id='email'
                    onChange={(event) => this.updateEmail(event)}
                    value={this.state.email}
                />
                <label htmlFor="wage">Salariu:</label>
                <input
                    type="text"
                    name="wage"
                    id='wage'
                    onChange={(event) => this.updateWage(event)}
                    value={this.state.wage}
                />
                <label htmlFor="src">Imagine:</label>
                <input
                    type="file"
                    name="src"
                    id='src'
                    onChange={(event) => this.updateSrc(event)}
                    files={this.state.src}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    id='is-gold-client'
                    onChange={(event) => this.updateIsGoldClient(event)}
                    checked={this.state.checked}
                />

                <input id='submit' type="submit" value="Introdu utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;