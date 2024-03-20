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
