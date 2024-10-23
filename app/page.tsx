import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
