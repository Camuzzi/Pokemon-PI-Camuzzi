
const validate = (input) => {
    let errors= {};

    //name
    if (!input.name) {
        errors.name = "Name required!!";
    } else if (input.name.length > 20) {
        errors.name = "Name too long";
    } else if (input.name.length < 3) {
        errors.name = "Should have 3 letters, at least";
    }

    return errors;

}

export default validate;