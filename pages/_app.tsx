import type {AppProps} from 'next/app'
import '/styles/app.css'

const PortfolioApp = ({Component, pageProps}: AppProps): JSX.Element => {
	return <Component {...pageProps} />
}

export default PortfolioApp
