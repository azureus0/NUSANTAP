import imageAboutHero from '../assets/imageAboutHero.png';

function HeroNew() {
    return (
        <div className="inline-flex items-center gap-[90px] relative padding-120px-0px-120px-0px">
            <div>
                <img src={imageAboutHero} alt="About Hero" />
            </div>
            <div></div>
        </div>

        
    );
}

export default HeroNew;