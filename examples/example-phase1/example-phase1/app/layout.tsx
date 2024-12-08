import React from 'react';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
