

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="">Username</label>
            <input id="userName" type="text" />
            <label htmlFor="">Age (Years)</label>
            <input id="age" type="text" />
            <button type="submit">Add User</button>
        </form>
    )
};

export default AddUser;