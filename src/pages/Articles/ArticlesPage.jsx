import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import Articles from './components/Articles';

function ArticlesPage() {
    return (
        <div className="w-full">
            <Header />
            <Articles />
            <Footer />
        </div>
    );
}

export default ArticlesPage;
