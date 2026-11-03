# my-profile-site

HTML, CSS, JavaScript로 만든 개인 프로필 웹사이트입니다.
이 문서는 프로젝트를 Git으로 관리하고 GitHub에 올리기까지의 과정을 순서대로 기록한 것입니다.

## 프로젝트 구성

| 파일 | 설명 |
| --- | --- |
| `index.html` | 프로필 페이지 본문 |
| `style.css` | 스타일 |
| `script.js` | 동작 스크립트 |
| `간단 이력서 프롬프트.txt` | 이력서 작성에 사용한 프롬프트 메모 |
| `.gitignore` | Git에서 제외할 파일 목록 |

## 진행 과정

### 1단계. Git 저장소 초기화와 첫 커밋

**요청**

> 이 프로젝트를 Git으로 관리하고 싶어.
> 1. Git 저장소를 초기화해줘
> 2. .gitignore 파일을 만들어서 불필요한 파일 제외
> 3. 모든 파일을 스테이징하고 "Initial commit: Add profile website" 메시지로 커밋해줘

**계획**

1. 프로젝트 폴더에서 저장소를 초기화한다.
2. 의존성, 빌드 결과물, 환경 변수, 로그, OS/에디터 파일을 제외하는 `.gitignore`를 만든다.
3. 전체 파일을 스테이징하고 지정된 메시지로 커밋한다.

**실행한 명령어**

```bash
git init
git add .
git commit -m "Initial commit: Add profile website"
```

**결과**

- 저장소가 초기화되었고 기본 브랜치는 `master`였습니다.
- 5개 파일(`.gitignore`, `index.html`, `script.js`, `style.css`, `간단 이력서 프롬프트.txt`)이 첫 커밋(`a8ebbe4`)으로 기록되었습니다.
- Windows 환경에서 줄바꿈(LF→CRLF) 경고가 나왔지만 정상 동작입니다.

### 2단계. README 작성과 GitHub 원격 저장소 연결

**요청**

> README.md추가해서 GitHub원격 레포지토리에 추가해줘
> - 주소: https://github.com/GyeongSe99/my-profile-site.git
> 1. 해당 주소의 원격 저장소에 추가해줘
> 2. main 브랜치로 푸시해줘
> 3. README.md에는 지금까지의 과정(나의 명령어, 계획, 결과 등)을 흐름에 맞게 작성해줘.

**계획**

1. 지금까지의 과정을 담은 `README.md`를 작성하고 커밋한다.
2. 브랜치 이름을 `master`에서 `main`으로 바꾼다.
3. 원격 저장소 `origin`을 등록한다.
4. `main` 브랜치를 푸시하고 upstream을 설정한다.

**실행한 명령어**

```bash
git add README.md
git commit -m "Add README.md"
git branch -M main
git remote add origin https://github.com/GyeongSe99/my-profile-site.git
git push -u origin main
```

**결과**

푸시 결과는 아래 "현재 상태"에 정리되어 있습니다.

## 현재 상태

- 원격 저장소: https://github.com/GyeongSe99/my-profile-site.git
- 브랜치: `main`
- 커밋 기록
  1. `Initial commit: Add profile website`
  2. `Add README.md`
