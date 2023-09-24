import Image from "next/image"

const tags = [
    { skill: "Unity"},
    { skill: "C#"},
    { skill: "Clip Studio Paint"},
    { skill: "Procreate"},
]

const FlickerSection = () => {
    return (
        <section id="funfood">
            <h1 className="text-center font-bold text-3xl">
                Flicker 2D Platform Game
            </h1>

            <div className="mt-8">
                A spooky 2D side-scroller game.

                You play as a zombie trapped in a train with a horde of security guards, 
                with the ability to hide in train compartments and/or attack guards from behind - 
                but get discovered by a guard and it's game over. 
                Additionally, you have remote access to the train's light system which 
                enables you to switch certain compartments' lights on/off. 
                Guards flock to these compartments to investigate the suspicious light behavior, 
                and this allows you to sneak up behind them and attack without getting discovered.

            </div>

            <br/>
                
            <div>
                Your goal? Survive as long as possible.
            </div>

            <div className="">
                <video autoPlay controls style={{ width: '1000px', height: '500px' }}>
                    <source src="/Flicker/Flicker GamePlay.mp4" />
                </video>
            </div>

            <div className="mt-4 flex flex-row align-bottom space-x-4">
                {tags.map((item, idx) => {
                    return (
                        <p key={idx}
                            className="bg-yellow-200 px-4 py-1 mt-2 text-neutral-900 rounded-lg font-semibold"
                            >
                            {item.skill}
                        </p>
                    )
                })}
            </div>

            <br/>
            <h1 className="text-left font-bold text-2xl">
                Overview
            </h1>
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                <div className="md:w-3/5 text:left">
                    <div>
                        Flicker is a 2D platform game I created in a group of three in a 24-hour GameJam coding event.
                        The video above shows the final product and demonstrates Flicker's gameplay.
                    </div>

                    <br/>

                    <div>
                        Personal contributions:
                        <ul className="px-8 list-disc">
                            <li>Spearheaded programming for key gameplay functionality, including player hide and melee capabilities.</li>
                            <li>Produced over 90% of art assets, including sprite animation, environment backdrops, level design and game objects.</li>
                        </ul>
                    </div>

                    <br/>

                </div>
                <div className="md:w-2/5 text-right item-center justify-center mt-8">
                    <Image 
                        className="rounded-lg"
                        src="/Flicker/thumb.jpg"
                        alt="" 
                        width={500} 
                        height={500}>
                    </Image>
                </div>
            </div>

            <br/>

            <h1 className="mt-8 text-left font-bold text-2xl">
                Screens
            </h1>

            <div className="flex flex-col text-center items-center justify-center sm:my-10 md:my-2 px-10 sm:py-10 md:flex-row md:space-x-4 md:text-left md:py-8">
                <div className="md:w-1/2">
                    <Image src="/Flicker/game1.png" alt="" width={500} height={500}/>
                </div>
                <div className="md:w-2/5">
                    <Image src="/Flicker/trainmid.png" alt="" width={500} height={500}/>
                </div>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb1.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb2.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb3.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

            <div className="text-center flex item-center justify-center mt-8">
                <Image 
                    className="rounded-xl"
                    src="/Pinboard/pinb4.png"
                    alt="" 
                    width={800} 
                    height={800}>
                </Image>
            </div>

        </section>
    )
}

export default FlickerSection