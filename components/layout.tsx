import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <h1>레이아웃</h1>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
