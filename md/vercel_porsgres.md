---
title: vercel_porsgres.md
description: |-
	내용입력
date: Insert datetime string (⇧⌘I or Ctrl+Shift+I)
preview: 이미지 주소
draft: false
tags:
	- vercel
categories:
	- vercel
	- progres
	- prisma
---


vercel 연결

```bash
vercel
```

vercel env 설정 가져오기

```bash
vercel env pull .env.development.local
```

npx prisma

## global 선언

/global.d.ts

```ts
import { PrismaClient } from '@prisma/client'

declare global {
 // eslint-disable-next-line no-unused-vars
 var prisma: undefined | PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
}
```

글로벌 타입 선언이 완료되고 그에맞게 prisma 클라이언트 생성해주는 조건을 만들어 준다

```ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
 prisma = new PrismaClient();
} else {
 if (!global.prisma) {
  global.prisma = new PrismaClient();
 }
 prisma = global.prisma;
}

export default prisma;
```

잘연결되었나 테스트

/src/app/page.tsx

```ts
"use client"
import React from "react";

import { getPost } from "@/lib/db/post";


export default function Home() {
 // eslint-disable-next-line no-unused-vars
 function prismaTest(e: React.MouseEvent) {
  getPost();
 }
 return (
  <main>
   <button onClick={prismaTest}>test btn</button>
  </main>
 );
}
```

/src/lib/db/post.ts

```ts
"use server"

import prisma from "@/lib/prisma";

export const getPost = async () => {
 try {
  const post = await prisma.post.findMany();
  console.log(post);
  return post;
 } catch {
  return null;
 }
};
```

이렇게 서버와 클라이언트를 잘 나누어 반응형으로 만들수 있다