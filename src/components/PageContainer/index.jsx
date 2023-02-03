const PageContainer = ({ children }) => {
    return (
        <>
            <nav>
                <a href="/">Home</a>
                <a href="/about">Haqqimizda</a>
                <a href="/news">Xeberler</a>
                <a href="/nicat">Nicatin sehifesi</a>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <p>salam abiler</p>
            </footer>
        </>
    )
}
export default PageContainer;
