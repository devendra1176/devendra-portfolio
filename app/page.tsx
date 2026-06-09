import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Decisions from "@/components/Decisions";
import TaskTracker from "@/components/TaskTracker";
import CapabilityMatrix from "../components/CapabilityMatrix";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problems />
      <Decisions />
      <TaskTracker />
      <CapabilityMatrix />
    </main>
  );
}