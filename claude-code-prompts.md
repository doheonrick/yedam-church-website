# Claude Code 프롬프트 모음 — 미구현 페이지 구현

> 각 프롬프트는 독립적으로 실행 가능합니다. 순서대로 진행하세요.

---

## 공통 컨텍스트 (모든 프롬프트 실행 전 숙지)

- 작업 폴더: `yedam-frontend/src/`
- 브랜드 컬러: `brand-navy`, `brand-navy-dark`, `brand-gold`, `warm-cream`, `warm-text`
- 공통 컴포넌트: `PageBanner`, `Container`, `SectionTitle`, `Card`, `Button` (`src/components/common/`)
- `any` 타입 사용 금지, Props 타입 명시 필수
- 모바일 우선 반응형 (`sm:` → `md:` → `lg:`)
- 데이터는 반드시 `services/` 계층을 통해 접근 (추후 API 교체 가능한 구조)
- 기존 패턴 참고: `NewsPage.tsx` + `newsService.ts` + `mockNews.ts`

---

## 프롬프트 1 — ColumnsPage (목회칼럼)

```
작업 대상: yedam-frontend/src/ 폴더

ColumnsPage(목회칼럼)를 NewsPage와 동일한 패턴으로 구현해줘.
아래 순서대로 파일을 하나씩 작성해줘.

---

### 1. src/types/column.ts

다음 인터페이스를 정의해:
- ColumnCategory: '담임목사 칼럼' | '부목사 칼럼'
- Column:
  - id: string
  - title: string
  - category: ColumnCategory
  - content: string   // 본문 (마크다운 또는 plain text)
  - date: string      // 'YYYY-MM-DD'
  - author: string    // 작성자 이름
  - summary?: string  // 목록에서 보여줄 발췌문

---

### 2. src/data/mockColumns.ts

Column[] 타입의 mock 데이터를 5개 만들어줘.
- 담임목사 칼럼 3개 (author: '이우철 목사'), 부목사 칼럼 2개 (author: '이성은 목사')
- 날짜는 2025-01 ~ 2026-04 사이로 분산
- content는 2~3문단 분량의 설교/묵상 느낌의 한국어 본문으로 작성

---

### 3. src/services/columnService.ts

newsService.ts 구조를 그대로 따라서 columnService를 만들어줘.
- getAll(), getById(id), getLatest(limit), search({ keyword, category, page, pageSize })
- search 결과는 날짜 내림차순 정렬
- Paginated<Column> 타입 사용 (src/types/common.ts 참고)

---

### 4. src/components/columns/ColumnListItem.tsx

NewsListItem.tsx 구조를 참고해서 만들어줘.
- Props: { column: Column }
- /columns/:id 로 Link 연결
- 제목, 카테고리 배지(brand-gold 계열), 작성자, 날짜, summary 표시
- 모바일 우선 반응형

---

### 5. src/pages/ColumnsPage.tsx

NewsPage.tsx와 동일한 패턴으로 구현:
- PageBanner: title="목회칼럼", subtitle="이우철 담임목사의 목회 칼럼입니다."
- 카테고리 필터 + 키워드 검색 (NewsFilters.tsx 대신 인라인으로 간단하게 구현 가능)
- columnService.search() 사용
- 페이지당 10개, Pagination 컴포넌트 사용
- loading / 빈 결과 처리 포함
```

---

## 프롬프트 2 — CommunityPage (가정교회란)

```
작업 대상: yedam-frontend/src/pages/CommunityPage.tsx
           yedam-frontend/src/components/ 아래에 필요한 컴포넌트 추가

CommunityPage를 가정교회 소개 페이지로 구현해줘.
이 페이지는 정적 콘텐츠 페이지야 (서비스/데이터 계층 불필요).

---

### 배경 지식
예닮교회는 2005년부터 가정교회(목장) 체계로 운영중인 남침례회 소속 한인교회야.
'목장'은 10~15명 규모의 소그룹으로, 목자(리더) 부부가 이끄는 가정 모임이야.
가정교회 철학: "교회 안에 교회(작은 교회)", 비그리스도인을 목장으로 초대하여 자연스럽게 복음 전함.

---

### 구현할 섹션 (한 페이지에 순서대로)

1. PageBanner: title="가정교회란", subtitle="2005년부터 이어진 달라스 예닮교회의 목장 공동체입니다."

2. HouseChurchIntroSection (새 컴포넌트, src/components/community/HouseChurchIntroSection.tsx)
   - 가정교회의 정의와 핵심 철학을 2~3문단으로 설명
   - 성경 구절 인용 (사도행전 2:46 또는 롬 16:5 등) — blockquote 스타일로

3. HouseChurchFeaturesSection (새 컴포넌트, src/components/community/HouseChurchFeaturesSection.tsx)
   - 목장의 특징을 카드 4개로 표현
   - 예: 소그룹 공동체, 목자 리더십, 비그리스도인 환영, 삶 나눔
   - Card 공통 컴포넌트 + 이모지 아이콘 사용

4. HouseChurchFlowSection (새 컴포넌트, src/components/community/HouseChurchFlowSection.tsx)
   - 목장 참여 과정 (예: 방문 → 목장모임 참석 → 삶공부 → 세례/헌신)
   - 스텝 형태 UI (numbered steps)
   - 마지막에 "목장 방문 문의" 버튼 → /contact 링크

---

### 주의
- any 타입 금지, 모든 Props 타입 명시
- 모바일 우선 반응형
- brand-navy, warm-cream, brand-gold 컬러 사용
- CommunityPage.tsx에서 세 컴포넌트를 import해서 조립
```

---

## 프롬프트 3 — HouseChurchesPage (목장 소개)

```
작업 대상: yedam-frontend/src/pages/HouseChurchesPage.tsx
           yedam-frontend/src/components/community/ (기존 폴더에 추가)

HouseChurchesPage를 목장 소개 페이지로 구현해줘.
실제 목장 명단은 민감정보일 수 있으므로, 
"목장에 대해 궁금하신 분은 교회로 문의해주세요" 방식의 안내 페이지로 만들어줘.

---

### 구현 내용

1. PageBanner: title="목장 소개", subtitle="예닮교회의 소그룹 공동체, 목장을 소개합니다."

2. 목장 개요 섹션
   - 현재 목장 수, 모임 형태, 모임 시간 등 일반적인 안내
   - 예: "매주 목요일 저녁 각 목자 가정에서 모임"
   - 실제 정보는 mock/placeholder로 작성

3. 목장 모임 구성 안내 섹션
   - 목장 모임의 순서를 카드 또는 타임라인으로 표현
   - 예: 식사 나눔 → 찬양 → 말씀 나눔 → 기도 → 교제

4. 목장 참여 문의 CTA 섹션
   - bg-brand-navy 배경의 풀-width 섹션
   - "목장에 방문하고 싶으신가요?" 텍스트
   - "문의하기" 버튼 → /contact 링크 (Button 컴포넌트 variant="secondary")

---

### 주의
- 정적 페이지, 별도 서비스/데이터 불필요
- 컴포넌트는 src/components/community/ 폴더에 추가
- any 타입 금지, 모바일 우선 반응형
```

---

## 프롬프트 4 — LifeStudyPage (삶공부)

```
작업 대상: yedam-frontend/src/pages/LifeStudyPage.tsx
           yedam-frontend/src/components/community/ (기존 폴더에 추가)

LifeStudyPage를 삶공부 과정 안내 페이지로 구현해줘.
정적 콘텐츠 페이지야.

---

### 배경 지식
삶공부는 새신자/비신자를 위한 단계별 성경공부 과정이야.
일반적인 가정교회 삶공부 커리큘럼:
1단계 - 새생활: 구원의 확신, 기도, 성경읽기 등 기독교 기초
2단계 - 새가족: 가정교회 철학, 목장 생활 안내
3단계 - 제자훈련: 더 깊은 제자도 훈련
일정: 매주 화·목요일 오후 7시, 본당 및 코이노니아실

---

### 구현할 섹션

1. PageBanner: title="삶공부", subtitle="단계별 성경공부로 믿음의 뿌리를 내립니다."

2. LifeStudyIntroSection
   - 삶공부 소개 (2문단), 일정 하이라이트 (화·목 7PM) 표시

3. LifeStudyCoursesSection
   - 3단계 과정을 카드로 표현 (1단계 새생활, 2단계 새가족, 3단계 제자훈련)
   - 각 카드: 단계 번호(brand-gold), 과목명, 간략 설명, 대상
   - 카드는 sm:grid-cols-3 레이아웃

4. LifeStudyScheduleSection
   - 요일, 시간, 장소를 명확하게 표 또는 카드로 표시
   - 배경 bg-warm-cream

5. 문의 CTA
   - "등록 문의" 버튼 → /contact

---

### 주의
- 정적 페이지, 서비스/데이터 불필요
- src/components/community/ 폴더에 컴포넌트 추가
- any 타입 금지, 모바일 우선 반응형
```

---

## 프롬프트 5 — ForumPage (예닮 나눔터)

```
작업 대상: yedam-frontend/src/pages/ForumPage.tsx

ForumPage(예닮 나눔터)를 구현해줘.
나눔터는 성도 전용 게시판 기능인데, 현재 로그인/백엔드가 없으므로
"준비 중" 안내 페이지로 만들되, 나중에 실제 게시판으로 교체할 수 있는 구조로 작성해줘.

---

### 구현 내용

1. PageBanner: title="예닮 나눔터", subtitle="성도들의 나눔과 소통 공간"

2. 메인 안내 섹션
   - 페이지 중앙에 아이콘(편지봉투 또는 채팅 아이콘 - SVG 인라인)
   - 제목: "로그인 후 이용 가능합니다"
   - 설명: "예닮 나눔터는 등록 성도 전용 공간입니다. 로그인 기능은 곧 제공될 예정입니다."
   - 버튼 두 개:
     * "교회 문의하기" → /contact (variant="primary")
     * "홈으로 돌아가기" → / (variant="outline")
   - 전체를 min-h-[40vh] 세로 중앙 정렬로

3. 하단 카드 섹션 (나눔터에서 제공 예정인 기능 미리보기)
   - "준비 중인 기능" SectionTitle
   - 카드 3개: 교회 소식 나눔, 기도 제목 공유, 성도 게시판
   - 각 카드에 이모지 아이콘, 제목, 간략 설명
   - 카드는 비활성화된 느낌 (opacity-60 또는 bg-gray-50)

---

### 주의
- 정적 페이지, 데이터/서비스 불필요
- 나중에 실제 게시판으로 교체할 때 이 파일만 수정하면 되도록
- any 타입 금지, 모바일 우선 반응형
```

---

## 보너스 — IntroSection.tsx placeholder 제거

```
작업 대상: yedam-frontend/src/components/about/IntroSection.tsx

현재 파일 하단에 있는 아래 placeholder 문구를 제거해줘:
"교회 소개에 관한 자세한 내용은 추후 업데이트될 예정입니다."

대신 예닮교회 소개를 한 문단 더 추가해줘:
- 남침례회(SBC) 소속, 텍사스 루이스빌(Lewisville) 위치
- 영어회중(ANF - A New Fellowship) 운영 중
- 연락처 안내 링크("/contact")를 자연스럽게 포함
- 기존 문장 스타일(text-gray-700 leading-relaxed text-lg) 유지
```
