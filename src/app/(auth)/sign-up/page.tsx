import dynamic from 'next/dynamic'
import BannerRight from './_components/banner-right'
import SignupForm from './_components/signup-form'
import * as S from './_layouts'

const Header = dynamic(() => import('./_components/header'))

const SignupPage = () => {
  return (
    <S.SignupPage>
      <Header />
      <S.Form>
        <SignupForm />
        <BannerRight />
      </S.Form>
    </S.SignupPage>
  )
}

export default SignupPage
