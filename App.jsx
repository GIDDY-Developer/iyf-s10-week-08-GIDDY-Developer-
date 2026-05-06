import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';

function App() {
    const posts = [
        { id: 1, title: "First Post", excerpt: "This is my first post...", author: "Gideon", date: "april 15" },
        { id: 2, title: "Second Post", excerpt: "Learning React is fun...", author: "Gideon", date: "april 14" },
        { id: 3, title: "Third Post", excerpt: "Components are powerful...", author: "Gideon", date: "april 13" }
    ];

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <h2>Welcome to CommunityHub</h2>
                <div className="post-list">
                    {posts.map(post => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            author={post.author}
                            date={post.date}
                        />
                    ))}
                </div>
            </main>
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
