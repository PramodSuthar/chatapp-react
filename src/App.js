import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


function App() {
  if (!localStorage.getItem('username')) {
    return <LoginForm />
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="48952b0a-824b-475d-a6de-f1dacee84123"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
