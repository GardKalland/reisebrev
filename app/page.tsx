'use client';
import { useState, useEffect } from "react";
import { client } from "../sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.css";

interface Reisebrev {
  title: string;
  stampImage: string | null;
  content: any;
  publishedAt: string;
}

export default function Home() {
  const [letters, setLetters] = useState<Reisebrev[]>([]);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  // Fetch "reisebrev" from Sanity
  useEffect(() => {
    const fetchReisebrev = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        title,
        "stampImage": stampImage.asset->url,
        content,
        publishedAt
      }`;
      const result = await client.fetch(query);
      setLetters(result);
    };

    fetchReisebrev();
  }, []);

  // Open letter when clicked
  const toggleOpenLetter = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(null); // Close the letter if it's already opened
    } else {
      setOpenedIndex(index); // Open the clicked letter
    }
  };

  // Close the letter when clicking outside
  const closeLetter = () => {
    setOpenedIndex(null);
  };

  return (
    <>
      <div className={`${styles.overlay} ${openedIndex !== null ? styles.opened : ""}`} onClick={closeLetter}></div>
      <div className={styles.envelopeContainer}>
        {letters.map((letter, index) => (
          <div
            key={index}
            className={`${styles.letterWrapper} ${openedIndex === index ? styles.opened : ""}`}
            onClick={() => toggleOpenLetter(index)}
          >
            <div className={`${styles.envelope} ${openedIndex === index ? styles.opened : ""}`}>
              {/* Front side of the envelope */}
              <div className={styles.envelopeFront}>
                <div className={styles.stamp}>
                  {letter.stampImage ? (
                    <Image src={letter.stampImage} alt="Stamp" width={50} height={50} />
                  ) : (
                    <p>No stamp available</p>
                  )}
                </div>
                <h2 className={styles.title}>{letter.title}</h2>
              </div>

              {/* Back side of the envelope */}
              <div className={`${styles.envelopeBack} ${openedIndex === index ? styles.opened : ""}`}>
                <div className={styles.envelopeFlap}></div>

                {/* Letter that slides out of the envelope */}
                <div className={`${styles.letter} ${openedIndex === index ? styles.opened : ""}`}>
                  <div className={styles.letterContent}>
                    <PortableText value={letter.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
