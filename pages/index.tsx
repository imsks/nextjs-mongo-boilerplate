import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>{ process.env.NEXT_PUBLIC_ENV}</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
