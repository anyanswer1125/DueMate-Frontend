import React, { useState } from 'react';
import axios from 'axios';  // axios를 사용하여 HTTP 요청을 보냄
import '../styles/LoginPage.css';  // 스타일 시트 import

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');  // 응답 메시지 상태 추가

  // 로그인 처리 함수
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 백엔드로 아이디와 비밀번호를 보내는 요청
      const response = await axios.post('http://localhost:5000/login', { username, password });

      if (response.status === 200 && response.data.success) {
        // 응답 메시지 출력
        setResponseMessage(`로그인 시도 성공! 아이디: ${response.data.credentials.username}, 비밀번호: ${response.data.credentials.password}`);
      } else {
        setError('아이디 또는 비밀번호가 틀렸습니다.');
      }
    } catch (error) {
      console.error(error);
      setError('로그인 요청 중 오류가 발생했습니다.');
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

      {/* 응답 메시지 출력 */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default LoginPage;
