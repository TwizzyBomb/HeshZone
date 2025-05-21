import { useEffect, useRef } from 'react';
import "./AnimationComponent.css";
import Item from "./Item/Item.jsx";
import { ITEMS } from "../item-data.js";

const AnimationComponent = () => {
  // Create refs for DOM access
  const triggerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    const items = document.querySelectorAll('.item');

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animate class to all items
            items.forEach(item => {
              item.classList.add('animate');
            });
            observer.unobserve(entry.target);
          }
        });
      }, 
      { threshold: 0.2 }
    );

    if (triggerElement) {
      observer.observe(triggerElement);
    }

    // Animation cleanup handlers
    const cleanupAnimations = () => {
      items.forEach(item => {
        item.style.position = 'relative';
        item.style.transform = 'none';
      });
    };

    // Add animationend listeners
    items.forEach(item => {
      item.addEventListener('animationend', cleanupAnimations);
    });

    // Cleanup function
    return () => {
      observer.disconnect();
      items.forEach(item => {
        item.removeEventListener('animationend', cleanupAnimations);
      });
    };
  }, []); // Empty dependency array = runs once on mount

  return (
    <>
      
      <section className="animation-section">
        <h2 className="section-title">Features Section</h2>
        <p className="section-title">Scroll down to see items animate from the four corners</p>
        
        {/*  Container that triggers the animation */}
        <div className="animation-container" id="animation-trigger" ref={triggerRef}>
             {/* Row layout for final positions */}
            <div className="items-row">
                {ITEMS.map((item) => 
                <Item key={item.title} {...item} />
                )}
            </div>
        </div>
      </section>
      <footer>Footer Content</footer>
    </>
  );
};

export default AnimationComponent;