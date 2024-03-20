---
title: Eslint Nextjs 설정
description: |-
    내용입력
date: 2024-03-20T16:03:26Z
preview: 이미지 주소
draft: false
tags:
    - eslint
categories:
    - eslint
---

## Eslint

> [!NOTE]
> Eslint 이란 코드의 스타일을 제어하여 협업을 할때 정해진 코드 스타일을 준수 할 수 있게 가이드 라인을 만들어주는 플러그인이다.

### 설치법

nextjs 을 설치할때 있었다면 `.eslintrc.json` 파일만 수정해 주면 된다

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["next/core-web-vitals", "prettier"],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
  "indent": ["error", "tab"],
    "no-unused-vars": "warn",
    "no-multi-spaces": "error"
  }
}
```

필자의 경우 3가지 세팅을 하였다

1. 공백을 tab으로
2. 사용하지 않은 변수에 대한 워닝
3. 의미 없는 멀티 스페이스에 대하여 에러

실행 방법

```bash
npx eslint .
# or 
npm run lint
```
