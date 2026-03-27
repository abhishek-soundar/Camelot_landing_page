import { useEffect, useState, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) observer.unobserve(entry.target);
      } else if (!options.triggerOnce) {
        setIsIntersecting(false);
      }
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options.triggerOnce, options.root, options.rootMargin, options.threshold]);

  return [targetRef, isIntersecting] as const;
}

export function useTypingEffect(text: string, speed = 40, delay = 1000) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const type = () => {
      if (charIndex < text.length) {
        setDisplayedText(text.slice(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(type, speed);
      } else {
        setIsComplete(true);
      }
    };

    const startTimeout = setTimeout(type, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}
