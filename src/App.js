import './App.css';
import { AlbumProvider } from './context/AlbumContext';
import { TimeCardProvider } from './context/TimeCardContext';
import { AppRouter } from './routes/AppRouter';

export const App = () => {
    return (
        <AlbumProvider>
            <TimeCardProvider>
                <AppRouter />
            </TimeCardProvider>
        </AlbumProvider>
    )
}