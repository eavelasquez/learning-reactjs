import { Link } from '../components'

const i18n = {
  en: {
    title: 'About Page',
    description: 'Hi! My name is Alexander and I\'m creating this clone of React Router',
    link: 'Go to home page'
  },
  es: {
    title: 'Página de Acerca de',
    description: 'Hola! Mi nombre es Alexander y estoy creando este clon de React Router',
    link: 'Ir a la página de inicio'
  }
}

function useI18n (lang) {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ lang }) {
  const { title, description, link } = useI18n(lang)

  return (
    <>
      <h1>{title}</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1580945539700506627/lb7Kxuu4_400x400.jpg' alt='eavelasquez73 photo' />
        <p>{description}</p>
      </div>
      <Link to='/'>{link}</Link>
    </>
  )
}
