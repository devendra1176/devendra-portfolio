import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Decisions from "@/components/Decisions";
import TaskTracker from "@/components/TaskTracker";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Decisions />
      <TaskTracker />
    </main>
  );
}