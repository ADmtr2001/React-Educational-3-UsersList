import Card from '../UI/Card.js'

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="">Username</label>
                <input id="userName" type="text" />
                <label htmlFor="">Age (Years)</label>
                <input id="age" type="text" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
};

export default AddUser;