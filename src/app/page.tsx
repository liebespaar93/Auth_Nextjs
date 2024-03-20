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
