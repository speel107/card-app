import React, { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className="footer items-center p-4 bg-accent text-neutral-content mx-auto">
      <aside className="items-center grid-flow-col mx-auto">
        <p>Copyright © 2024 - All right reserved</p>
      </aside> 
      {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      </nav> */}
    </footer>
  );
});