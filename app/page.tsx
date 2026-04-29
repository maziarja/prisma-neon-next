import prisma from "@/lib/prisma";
import CreatePost from "./CreatePost";

async function Page() {
  const posts = await prisma.post.findMany();
  const numOfPost = await prisma.post.count();
  // const numOfPost = 0;
  // const posts = [{ id: 1, title: "test", content: "test" }];

  return (
    <div className="flex flex-col gap-6 border w-120 h-200 p-8 rounded-md">
      Posts: ({numOfPost})
      <ul className="space-y-1.5">
        {posts.map((post) => (
          <li className="border p-2 rounded-md" key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <CreatePost />
    </div>
  );
}

export default Page;
