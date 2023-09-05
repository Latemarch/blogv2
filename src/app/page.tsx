import MDXComponent from "@/components/MDXComponent";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <main className="dark:bg-red-200">
      <h1>font TEST 입니다.</h1>
      <h2>font TEST 입니다.</h2>
      <h3>font TEST 입니다.</h3>
      <h4>font TEST 입니다.</h4>
      <p>font TEST 입니다.</p>
      <span>font TEST 입니다.</span>
      <p className="font-lbert">home</p>
      <ThemeSwitch />
      <MDXComponent />
    </main>
  );
}
