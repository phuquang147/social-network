import React from 'react'
import { Link } from "react-router-dom";
import Button from '../components/Button';
import Input from '../components/Input';
import Particle from '../components/Particle'

export default function Register() {
    return (
        <div className="h-[100vh] flex">
            <img src={require("../assets/img/login.jpg")} alt="" className="h-[100vh]"/>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-[360px] flex flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold text-gray-700 mb-9">Register</h2>
                    <Input type='name' placeholder="Your Name"/>
                    <Input type='email' placeholder="Your Email Address"/>
                    <Input type='password' placeholder="Password"/>
                    <Input type='repassword' placeholder="Comfirm Password"/>
                    <div className="w-full flex justify-between items-center mb-4 text-sm font-medium">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox rounded-md h-5 w-5 text-sky-400 focus:ring-sky-400 border-gray-300 border-2"/>
                            <span className="ml-2 text-gray-400">Accept Term and Conditions</span>
                        </label>
                    </div>
                    <Link to="/login" className="w-full">
                        <Button content="Register"/>
                    </Link>
                    <div className="flex justify-start w-full mt-4 text-sm font-medium">
                        <p className="mr-2 text-gray-400">Already have account?</p>
                        <Link to="/login" className="">
                            <p className="text-md font-bold">Login</p>
                        </Link>
                    </div>
                    <Particle />
                </div>
            </div>
        </div>    
    )
}
