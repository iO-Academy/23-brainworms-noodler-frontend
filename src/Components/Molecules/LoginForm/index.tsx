import Button from "../../Atoms/Button";
import InputAtom from "../../Atoms/InputAtom";

function LoginForm() {
    return (
        <>
            <form>
                <InputAtom label='Email:'/>
                <InputAtom label='Password:'/>
                <Button value='Login' type='submit'/>
            </form>
        </>
    )
}

export default LoginForm;