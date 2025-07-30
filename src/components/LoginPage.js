import React, { useState } from 'react';
import '../styles/LoginPage.css'; // 스타일 시트 import

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 로그인 처리 함수
  const handleLogin = (e) => {
    e.preventDefault();
    
    // 테스트용 아이디와 비밀번호
    const testUsername = '123';asd
    const testPassword = '123';

    // 실제 로그인 요청을 보내려면 여기에 API 호출을 추가
    if (username === testUsername && password === testPassword) {
      alert('로그인 성공');
      setError('');
    } else {
      setError('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">아이디:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default LoginPage;
