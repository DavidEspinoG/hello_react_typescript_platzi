'use client';
import { RandomFox } from "./components/RandomFox"
import { MouseEventHandler, useState } from "react";

type ImageItem = {id: string, url: string}

const random = (): number => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const generateId = Math.random().toString(36).substring(2,9);
  const [ images, setImages ] = useState<ImageItem[]>([
    {id: 'a', url: `https://randomfox.ca/images/${random()}.jpg`},
  ]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newItem: ImageItem = {
      id: generateId, 
      url:`https://randomfox.ca/images/${random()}.jpg`
    }
    setImages([...images, newItem ]);
  };

  return (
    <main>
      <h1>Hello TypeScript</h1>
      <button
        onClick={addNewFox}
      >
        Add new fox
      </button>
      {images.map((item, index) => (
        <div key={index}>
        <RandomFox 
          image={item.url}
        />
        </div>
      ))}
      
    </main>
  )
}
