import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFoundPage = () => (
  <div className="min-h-screen bg-moast-off-white flex flex-col">
    <Navbar />
    <section className="flex-grow flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-9xl font-black uppercase text-black">404</h1>
        <p className="font-sans text-xl mt-4 mb-8">Página não encontrada</p>
        <Link
          to="/"
          className="bg-black text-white font-sans font-bold uppercase px-6 py-3 border-[4px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all inline-block"
        >
          Voltar à página inicial
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default NotFoundPage;
