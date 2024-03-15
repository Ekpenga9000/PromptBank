import Feed from "@/components/Feed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 main">
      <h1 className="text-6xl text-center text-black font-bold">World's Best <span className="title">AI Prompt sharing platform</span></h1>
      <p className="text-center text-zinc-900 desc">
        PromptBank is an open source platform where you can share your AI generated prompts and get feedback from the community.
      </p>
      <section className="mt-6">
        <Feed />
      </section>
    </main>
  );
}
