import './styles/main.scss'
import logoTheSubstance from './assets/images/logo-theSubstance.svg';
import backgroundTheSubstance from './assets/images/poster-theSubstance2.png';

import Header from './components/header.tsx'

function App() {

  return (
    <>
      <Header></Header>
      
      <section className="hero">

        <img className="background" src={backgroundTheSubstance}/>
        <img className="logo" src={logoTheSubstance} alt="The Substance" />
      
        <div className="actions">
          <button>Já visto</button>
          <button>Adicionar à lista</button>
        </div>

      </section>

      <section>
        <h2>CARTAZ</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi commodi inventore, eligendi ducimus magnam iure nulla laborum, perspiciatis, quaerat placeat cupiditate expedita praesentium. Qui voluptatibus consequuntur quis omnis adipisci?
          Fuga ad odio impedit quae error nisi, omnis nesciunt eveniet optio corporis suscipit dolore quaerat accusantium harum eum dolor laboriosam quidem molestias aliquid asperiores ipsum libero ducimus non. Voluptate, maiores!
          Voluptatem ad, earum vitae nobis saepe nisi incidunt natus suscipit magnam aut modi libero possimus asperiores. Natus maiores alias praesentium dolorem fugit ipsam numquam voluptatem! Iste nostrum temporibus in soluta.
          Sint aliquam exercitationem ratione molestiae modi architecto dolores praesentium excepturi sapiente nam minus quia repellendus recusandae autem nobis debitis iure corrupti quo, qui similique velit cupiditate enim rerum saepe! Aperiam?
          Quam, natus id consectetur in ea optio voluptatem vitae maxime soluta suscipit, sed magnam facilis omnis iste laborum asperiores blanditiis? Nesciunt iste aut quae laudantium quaerat exercitationem vero eligendi cum.
          Soluta ipsa incidunt consequuntur? Reiciendis, beatae dolorum fugit autem minima nesciunt ducimus nemo numquam totam accusamus possimus qui cupiditate in. Qui, aut. Doloribus dolore amet, pariatur libero eligendi exercitationem ea!
          Iusto, laborum animi? Sit molestias facere omnis? Dolorem fugit, minus nisi fuga error magni recusandae dolorum aliquid iste facilis praesentium excepturi voluptatem tempore quo sed cupiditate neque? In, perferendis. Illum!
          Dolores culpa inventore cupiditate vitae quos blanditiis eveniet molestiae doloribus illo, placeat error recusandae suscipit explicabo ducimus dignissimos et est, mollitia voluptates incidunt voluptatibus distinctio aut. Asperiores distinctio quod similique!
          Corporis quae consequuntur, magnam ratione deleniti laboriosam perferendis nulla quidem, cum doloremque facere blanditiis eaque a amet at iure deserunt soluta doloribus. Illo, natus nostrum dolores dignissimos perspiciatis temporibus hic!
          Aliquid optio harum distinctio in sapiente repudiandae enim. Veritatis maxime nemo mollitia accusamus quaerat voluptates reprehenderit eaque, commodi quis sit vitae distinctio nesciunt quasi debitis dolorem laboriosam magnam nulla? Excepturi!aesentium. Qui voluptatibus consequuntur quis omnis adipisci?
          Fuga ad odio impedit quae error nisi, omnis nesciunt eveniet optio corporis suscipit dolore quaerat accusantium harum eum dolor laboriosam quidem molestias aliquid asperiores ipsum libero ducimus non. Voluptate, maiores!
          Voluptatem ad, earum vitae nobis saepe nisi incidunt natus suscipit magnam aut modi libero possimus asperiores. Natus maiores alias praesentium dolorem fugit ipsam numquam voluptatem! Iste nostrum temporibus in soluta.
          Sint aliquam exercitationem ratione molestiae modi architecto dolores praesentium excepturi sapiente nam minus quia repellendus recusandae autem nobis debitis iure corrupti quo, qui similique velit cupiditate enim rerum saepe! Aperiam?
          Quam, natus id consectetur in ea optio voluptatem vitae maxime soluta suscipit, sed magnam facilis omnis iste laborum asperiores blanditiis? Nesciunt iste aut quae laudantium quaerat exercitationem vero eligendi cum.
          Soluta ipsa incidunt consequuntur? Reiciendis, beatae dolorum fugit autem minima nesciunt ducimus nemo numquam totam accusamus possimus qui cupiditate in. Qui, aut. Doloribus dolore amet, pariatur libero eligendi exercitationem ea!
          Iusto, laborum animi? Sit molestias facere omnis? Dolorem fugit, minus nisi fuga error magni recusandae dolorum aliquid iste facilis praesentium excepturi voluptatem tempore quo sed cupiditate neque? In, perferendis. Illum!
          Dolores culpa inventore cupiditate vitae quos blanditiis eveniet molestiae doloribus illo, placeat error recusandae suscipit explicabo ducimus dignissimos et est, mollitia voluptates incidunt voluptatibus distinctio aut. Asperiores distinctio quod similique!
          Corporis quae consequuntur, magnam ratione deleniti laboriosam perferendis nulla quidem, cum doloremque facere blanditiis eaque a amet at iure deserunt soluta doloribus. Illo, natus nostrum dolores dignissimos perspiciatis temporibus hic!
          Aliquid optio harum distinctio in sapiente repudiandae enim. Veritatis maxime nemo mollitia accusamus quaerat voluptates reprehenderit eaque, commodi quis sit vitae distinctio nesciunt quas
        </p>
      </section>
    </>
  )
}

export default App
