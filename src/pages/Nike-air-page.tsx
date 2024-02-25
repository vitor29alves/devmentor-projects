
import backgroundImage from '../assets/card-tenis/bg.png'
import tenisImage from '../assets/card-tenis/tenis.png'


export function NikeAirPage() {

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 md:p-4">

            <div className="flex flex-col max-w-5xl w-full h-full md:h-[540px] bg-white shadow-lg shadow-black/50  md:flex-row">

                <div className='w-full md:w-1/2 h-full p-8 flex flex-col justify-center items-center'>

                    <div className='w-full h-[10%]'>
                        <h3 className='text-lg font-bold float-left'>DevMentor.</h3>

                    </div>

                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-4xl md:text-6xl font-bold'>Lançamento Nike Air.</h1>

                            <p className='text-black/50 mb-10'>O Tênis do futuro. <br />O futuro a um passo do seu alcance!</p>
                            <button className='w-full md:w-60 py-3 bg-black text-white font-semibold  border-2 border-solid border-black hover:bg-white hover:text-black'>QUERO CONHECER!</button>
                        </div>
                    </div>

                </div>
                {/* Imagens */}
                <div className='relative w-full  h-full flex justify-center items-center md:w-1/2'>
                    <img
                        className='absolute w-full h-full'
                        src={backgroundImage}
                        alt="background"
                    />
                    <img
                        className='absolute hover:rotate-6 hover:scale-125'
                        src={tenisImage}
                        alt="tenis"
                    />

                </div>

            </div>
        </div>



    )
}