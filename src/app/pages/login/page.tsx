
const Page = ()=>{

    return (
     <div className="flex justify-center items-center min-h-screen flex-col bg-gradient-to-t from-white to-indigo-500">
        <div className="w-1/3 h-1/3 bg-white rounded-full flex justify-center items-center">
            <h1>Login</h1>
            <div>
            <div>
                <label htmlFor="username"></label>
                <input type="text" name="userName"  />
            </div>

            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" />
            </div>
            <a href="">Forgot my password?</a>
            <div>
                <button>Login</button>
            </div>
        </div>
        </div>

    </div>);
}

export default Page;