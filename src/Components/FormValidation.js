import React,{useState} from "react"; 


const FormValidation = () => {
    // let [name, setName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmPassword, setConfirmPassword] = useState("")
    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""})
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    console.log("user", user)

    function validateForm(event){
        event.preventDefault()
        if(user.name.length < 3 || user.name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!user.email.includes("@") || !user.email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        }
        else if(user.password.length < 8 || user.password.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(user.password !== user.confirmPassword){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("User Registered Successfully")
        setError("")

    }

    return(
        <div>
            {
                error && <h1>ErrMessage = {error}</h1>
            }
            {
                success && <h1>SuccMessage = {success}</h1>
            }
            <form onSubmit={validateForm}>
                <input type="text" placeholder="Enter Your Name" 
                    onChange={(event)=>setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Enter Your Email" 
                    onChange={(event)=>setUser({...user, email: event.target.value})}
                />
                <input type="password" placeholder="Enter Your Password" 
                    onChange={(event)=>setUser({...user, password: event.target.value})}
                />
                <input type="password" placeholder="Enter Your Confirm Password" 
                    onChange={(event)=>setUser({...user, confirmPassword: event.target.value})}
                />

                <button type="Submit" >Submit</button>
            </form>
        </div>
    )

}

export default FormValidation;