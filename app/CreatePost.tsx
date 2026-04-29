import { createPost } from "./_actions/createPost";

function CreatePost() {
  return (
    <form action={createPost} className="flex flex-col gap-4 mt-auto">
      <input
        type="text"
        name="title"
        placeholder="title"
        className="border p-2 rounded-lg"
      />
      <input
        type="text"
        name="content"
        placeholder="content"
        className="border p-2 rounded-lg"
      />
      <button className="bg-blue-400 text-white px-2 py-1 cursor-pointer rounded-lg font-bold uppercase">
        Create
      </button>
    </form>
  );
}

export default CreatePost;
