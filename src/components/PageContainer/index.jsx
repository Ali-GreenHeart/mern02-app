import { useContext } from "react";
import { UserContext } from "../../context/UserContext";



const PageContainer = ({ children }) => {

    const human = useContext(UserContext)

    return (
        <>
            {human.ad}
            <nav>
                <a href="/">Home</a>
                <a href="/about">Haqqimizda</a>
                <a href="/news">Xeberler</a>
                <a href="/nicat">Nicatin sehifesi</a>
                <a href="/dogs">Dogs page</a>
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
