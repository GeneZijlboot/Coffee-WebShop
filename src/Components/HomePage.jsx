import Copyright from "./Copyright";
import CoffeeLogo from "/src/images/CoffeeShop.png";
import AboutSection from "/src/images/AboutSection.png";
import LocatedAt from "/src/images/LocatedAt.png";
import Contact from "/src/images/Contact.png";


function HomePage(){
    return (
        <div className="bg-[#f4f4f4]">
            {/* WARM WELCOME */}
            <div className="flex justify-center bg-[#8aaac7] pt-[100px] pb-[200px] rounded-br-[70px] rounded-bl-[70px] gap-[50px]">
                <img src={CoffeeLogo} className="h-[300px]" />
                <div className="HPtxt">
                    <p className="text-[35px]">Welcome,</p>
                    <p>my fellow caffeine addicts!</p>
                    <p>Dive into the world of exceptional beans.</p>
                    <p>Your coffee adventure starts right here!</p>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="flex justify-center pt-[150px] pb-[150px] gap-[100px]">
                <div>
                <p className="text-[35px] pb-[10px]">About us:</p>
                <p className="w-[400px] text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur perferendis laudantium aperiam at aut architecto ut voluptate, maiores facilis officia adipisci eligendi explicabo, corporis voluptatibus, harum dolorum? Tempora fugit dolorum expedita sapiente illo. Et modi inventore obcaecati explicabo illo dicta quibusdam laborum deserunt! Fuga sequi vel facere iste architecto?</p>
                </div>
                <img src={AboutSection} className="h-[360px] pt-[50px]"/>
            </div>

            {/* LOCATED SECTION */}
            <div className="flex justify-center pb-[150px] gap-[100px]">
                <img src={LocatedAt} className="h-[360px] pt-[70px]"/>
                <div>
                <p className="text-[35px] pb-[10px]">Located at:</p>
                <p className="w-[400px] text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur perferendis laudantium aperiam at aut architecto ut voluptate, maiores facilis officia adipisci eligendi explicabo, corporis voluptatibus, harum dolorum? Tempora fugit dolorum expedita sapiente illo. Et modi inventore obcaecati explicabo illo dicta quibusdam laborum deserunt! Fuga sequi vel facere iste architecto?</p>
                </div>
            </div>  

            {/* CONTACT SECTION */}
            <div className="flex justify-center pb-[150px] gap-[100px]">
                <div>
                <p className="text-[35px] pt-[50px] pb-[10px]">Get in touch</p>
                <p className="w-[400px] text-[20px] pb-[15px]">If you'd like to know more about our services, send us an email or give us a call!</p>
                <p>ILoveCoffee@cofee.com{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}  0612345678</p>
                </div>
                <img src={Contact} className="h-[360px]"/>
            </div> 

            {/* COPYRIGHT SECTION*/}
            <div>
                <Copyright />
            </div>
        </div>
    )
}

export default HomePage;