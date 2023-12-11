import Button from "../../Atoms/Button";
import InputAtom from "../../Atoms/InputAtom";

function LoginForm()
{
   return (
       <>
           <InputAtom label='Email:' />
           <InputAtom label='Password:' />
           <Button value='Login'/>
       </>
   )
}

export default LoginForm;