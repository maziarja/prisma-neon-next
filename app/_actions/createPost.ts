"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
