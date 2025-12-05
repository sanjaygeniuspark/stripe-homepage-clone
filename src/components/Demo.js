import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARD_COUNT = 5;
const COLLAPSE_SCROLL_Y = 100;

const generateCards = () => {
  return Array.from({ length: CARD_COUNT }, (_, i) => ({
    id: i,
    title: `Card ${i + 1}`,
  }));
};

export default function CardFanShuffle() {
  const [cards, setCards] = useState(generateCards());
  const [collapsed, setCollapsed] = useState(false);
  const containerRef = useRef(null);

  // Scroll listener to collapse the cards
  useEffect(() => {
    const onScroll = () => {
      setCollapsed(window.scrollY > COLLAPSE_SCROLL_Y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Shuffle effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[700px] bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center relative"
      >
        <AnimatePresence initial={false}>
          {cards.map((card, index) => {
            const offset = collapsed ? 0 : index * 30;
            const rotate = collapsed ? 0 : index * 5;

            return (
              <motion.div
                key={card.id}
                className="absolute w-60 h-80 bg-white shadow-xl rounded-xl flex items-center justify-center text-xl font-semibold"
                style={{ zIndex: CARD_COUNT - index }}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  x: offset,
                  rotate: rotate,
                  opacity: 1,
                  scale: collapsed ? 0.85 : 1,
                  y: collapsed ? -150 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                exit={{ opacity: 0, y: 50 }}
              >
                {card.title}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
