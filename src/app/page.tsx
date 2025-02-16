import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function toggleTodo(id: string, completed: boolean) {
  "use server";
  await prisma.todo.update({
    where: { id },
    data: { completed },
  });
  redirect('/')
}

async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
  redirect('/');
}
export default async function Home() {

  const todos = await prisma.todo.findMany();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex w-2/3 justify-between">
        <h1 className="text-3xl font-semibold">Todo App</h1>
        <Link href={"new"}>
          <button className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Add Todo
          </button>
        </Link>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol>
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          ))}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://shubham-s-socials.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Connect with me
        </a>
      </footer>
    </div>
  );
}
