import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "48952b0a-824b-475d-a6de-f1dacee84123", 'User-Name': username, 'User-Secret': password }

        try {
            //username | password => chatapp -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

            //works out -> logged in
        } catch (error) {
            setError('Incorrect Username or Password. Please try again. ')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit} action="">
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm