type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1>
        <a href="/">Home</a>
      </h1>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
