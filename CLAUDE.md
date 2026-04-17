## 프로젝트
예닮교회 웹사이트 리빌딩 (React + Vite + TypeScript)
폴더: `yedam-frontend/`

## 기술 스택
- React 19, Vite, TypeScript
- React Router v7
- Tailwind CSS (설치 필요)
- ESLint, Prettier

## 현재 상태 (2025-04)
- `src/App.tsx` → Vite 기본 템플릿 그대로 (아직 미구현)
- `src/pages/` → 파일만 생성됨, 내용 비어 있음
- `src/services/` → 파일만 생성됨, 내용 비어 있음
- `src/types/` → 파일만 생성됨, 내용 비어 있음
- `src/constants/` → 파일만 생성됨, 내용 비어 있음
- `src/utils/` → 파일만 생성됨, 내용 비어 있음
- 라우터 미설정, 공통 레이아웃 미구현

## 폴더 구조
```
src/
  assets/          # 이미지, 아이콘, 폰트
  components/
    common/        # Button, SectionTitle, PageBanner, Card, Container
    layout/        # Header, Footer, MainLayout
    home/          # 홈 전용 섹션 컴포넌트
    about/         # 교회소개 전용
    worship/       # 예배안내 전용
    sermons/       # 설교 전용
    news/          # 공지사항 전용
    gallery/       # 갤러리 전용
    contact/       # 오시는길/문의 전용
  pages/           # 라우팅 단위 페이지
  layouts/         # MainLayout.tsx
  routes/          # AppRouter.tsx
  data/            # mock data (mockSermons.ts, mockNews.ts, mockStaff.ts 등)
  services/        # 데이터 접근 계층 (sermonService, newsService, contactService)
  hooks/           # 공통 custom hook
  types/           # TypeScript 타입/인터페이스
  utils/           # 유틸 함수 (formatDate, formatPhone 등)
  styles/          # 전역 스타일
```

## 주요 페이지 및 라우트
| 경로 | 페이지 |
|------|--------|
| `/` | 홈 |
| `/about` | 교회 소개 |
| `/vision` | 비전 |
| `/staff` | 섬기는 분들 |
| `/worship` | 예배 안내 |
| `/sermons` | 설교 |
| `/sermons/:id` | 설교 상세 |
| `/news` | 공지사항/소식 |
| `/news/:id` | 공지 상세 |
| `/gallery` | 갤러리 |
| `/contact` | 오시는 길/문의 |
| `/offering` | 온라인 헌금 |
| `/english` | 영어 회중 |

## 개발 규칙
- 코드 작성 전 계획 먼저 보여주고 승인 받는다
- 파일 전체 코드 작성 요청 시 한 파일씩 순서대로
- 이미 읽은 파일은 다시 읽지 않는다
- `any` 타입 사용 금지, Props 타입 명시 필수
- 데이터는 services 계층을 통해 접근 (페이지에서 직접 하드코딩 금지)
- mock data는 `data/` 폴더에 보관, 나중에 API로 교체 가능한 구조
- 모바일 우선 반응형 (mobile → tablet → desktop)
- `main` 브랜치에 직접 push 금지

## 환경 변수
`.env` 파일 사용 (Git 미포함), `.env.example` 커밋용 샘플
```
VITE_API_BASE_URL=
VITE_SITE_NAME=예닮교회
```
