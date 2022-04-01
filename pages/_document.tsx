import React from 'react'
import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-US">
				<Head>
					<title>Abuzarov Maxim</title>
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<meta name="description" content="Portfolio Website"/>
				</Head>

				<body>
                    <Main/>
                    <NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument
