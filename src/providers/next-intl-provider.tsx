import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type PropsWithChildren } from 'react'

const NextIntlProvider = async ({ children }: Readonly<PropsWithChildren>) => {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
}

export default NextIntlProvider
