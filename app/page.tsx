import { RandomFox } from "./components/RandomFox"

export default function Home() {
  const random = (): number => Math.floor(Math.random() * 123) + 1;
  return (
    <main>
      <h1>Hello TypeScript</h1>
      <RandomFox image={`https://randomfox.ca/images/${random()}.jpg`}/>
    </main>
  )
}
