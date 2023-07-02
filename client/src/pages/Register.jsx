import { useState } from "react"
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });

export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

    async function registerUser(e) {
        e.preventDefault("");
        try{
          await instance.post("/api/posts",{
            name,
            email,
          });
          alert('User registration successful. Now You can Login');


        }
        catch(e){
          alert('Registration Failed. Please try again later.');
        }
    }


  return (
    <>
        <>
      <div className=" mt-4 grow flex items-center justify-around" onSubmit={registerUser}>
        <form className="max-w-md mx-auto border">
        <h1>Username</h1>
          <input
          className="border rounded-full"
          type="text"
          placeholder='Username'
          value={name}
          onChange = { e => setName(e.target.value)}
           />

            <h1>Email</h1>
          <input
          className=""
          type="email"
          placeholder='Email'
          value={email}
          onChange = { e => setEmail(e.target.value)}
          />

          <button>Post</button>

        </form>
      </div>
    </>
    </>
  )
}
