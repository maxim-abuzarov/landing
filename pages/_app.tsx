import Head from 'next/head'
import type {AppProps} from 'next/app'
import '/styles/app.css'

const PortfolioApp = ({Component, pageProps}: AppProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>Abuzarov Maxim</title>
				<meta name="description" content="Portfolio Website"/>
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default PortfolioApp
