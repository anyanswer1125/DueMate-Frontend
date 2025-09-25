# DueMate-Frontend

DueMate는 사용자 인증을 위한 로그인 기능을 제공하는 React 기반 프론트엔드 애플리케이션입니다.

## 📋 프로젝트 개요

DueMate-Frontend는 백엔드 API와 연동하여 사용자 로그인 기능을 구현한 React 애플리케이션입니다. 깔끔하고 직관적인 UI를 통해 사용자 인증을 처리합니다.

## 🚀 주요 기능

- **사용자 로그인**: 아이디와 비밀번호를 통한 인증
- **API 연동**: 백엔드 서버(localhost:5000)와의 HTTP 통신
- **반응형 UI**: 모던하고 사용자 친화적인 인터페이스
- **에러 처리**: 로그인 실패 시 적절한 에러 메시지 표시

## 🛠️ 기술 스택

- **Frontend**: React 19.1.1
- **HTTP Client**: Axios 1.11.0
- **Styling**: CSS3
- **Build Tool**: React Scripts 5.0.1
- **Testing**: Jest, React Testing Library

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run start
```

애플리케이션이 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

## 🏗️ 프로젝트 구조

```
src/
├── components/
│   └── LoginPage.js          # 로그인 페이지 컴포넌트
├── styles/
│   └── LoginPage.css         # 로그인 페이지 스타일
├── App.js                    # 메인 앱 컴포넌트
├── index.js                  # 애플리케이션 진입점
└── index.css                 # 전역 스타일
```

## 🔧 주요 컴포넌트

### LoginPage 컴포넌트

- 사용자 입력 폼 (아이디, 비밀번호)
- 백엔드 API와의 통신 처리
- 로그인 성공/실패 상태 관리
- 에러 메시지 및 응답 메시지 표시

## 🌐 API 연동

애플리케이션은 다음 백엔드 엔드포인트와 연동됩니다:

- **POST** `http://localhost:5000/login`
  - 요청 본문: `{ username, password }`
  - 성공 응답: `{ success: true, credentials: { username, password } }`

## 🎨 UI/UX 특징

- **색상 테마**: 보라색 계열의 배경색 (#b9a9f0)
- **반응형 디자인**: 다양한 화면 크기에 대응
- **사용자 친화적**: 직관적인 폼 레이아웃과 명확한 피드백
- **모던 스타일**: 그림자 효과와 둥근 모서리로 세련된 디자인

## 🧪 테스트

```bash
npm test
```

## 📝 스크립트

- `npm start`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm test`: 테스트 실행
- `npm run eject`: Create React App 설정 추출

## 🔗 관련 링크

- [GitHub Repository](https://github.com/anyanswer1125/DueMate-Frontend)

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 GitHub Issues를 통해 연락해주세요.