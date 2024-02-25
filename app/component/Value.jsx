import Card from './Card'
export default function Value(){

    return(<>
     <div className="flex items-center justify-center flex-col text-black gap-20 h-fit" data-aos="fade-left">
                <h2 className="text-3xl font-bold mt-2 text-center">Nos Valeurs :</h2>
                <div className="flex gap-5 items-center justify-center">
                
                <div className="flex  gap-[2rem] justify-center ">
                <Card>
                <h4 className='text-1xl font-bold'>Innovation</h4>
                <p>
                 Nous croyons en la puissance de l'innovation pour résoudre les défis les plus complexes et créer des opportunités de croissance.
                </p> 
                </Card>

                <Card>
                <h4 className="text-1xl font-bold">Qualité</h4>
                <p>
                Nous nous engageons à fournir des produits et services de la plus haute qualité, répondant aux normes les plus strictes de l'industrie.
                </p> 
                </Card>

                <Card>
                <h4 className="text-1xl font-bold">Collaboration</h4>
                <p>
                Nous valorisons la collaboration et croyons au pouvoir de travailler ensemble pour atteindre des objectifs communs.                </p> 
                </Card>
     
                <Card>
                <h4 className="text-1xl font-bold">Responsabilité</h4>
                <p>
                Nous sommes conscients de notre impact sur la société et l'environnement, et nous nous engageons à agir de manière éthique et responsable.               
                 </p> 
                </Card>
            </div>
            </div>
            </div>
    </>)
}