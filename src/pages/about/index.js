import Newsletter from "../../components/Newsletter";

export default function About() {
  return (
    <main className="about">
      <section className="wrapper px-3">
        <div className="mb-8">
          <div className="mt-6 md:mt-7 mb-5 md:mb-6 flex flex-col-reverse justify-center sm:flex-row items-center">
            <h1 className="flex justify-center flex-col text-main text-3xl md:text-4xl mt-4 md:mt-0 md:mr-3">
              Hey! <br/> I'm James Robinson,<br/> <span style={{minWidth:"250px"}} className="font-bold text-xl md:text-2xl mt-2 italic opacity-95">a self-taught<br/> Front End Developer</span>
            </h1>
            <div>
              <img className="img-shadow relative w-full sm:ml-3" style={{maxWidth: "200px", maxHeight: "200px", minWidth: "150px"}} alt="Photo of man sitting on a mountain top" src="/images/npm.jpg"/>
            </div>
          </div>

          <div className="text-lg md:text-xl m-auto max-w-600 md:max-w-750">
            <p className="my-3">I am a completely self-taught, front end developer. I don't have a computer science degree, nor have I ever paid for an expensive coding bootcamp. After finding myself at a crossroads in life, I decided on a whim to give coding 'a go'. Three years later, and I haven't looked back. In the past, I've worked as a strength and conditioning coach, a night-shift warehouse worker and I've also pulled pints behind a bar. I've taught myself everything I needed to know using a glorious little thing called the internet.</p>
            <p>After just under a year of intensive learning, I managed to bag my first job as a Junior Front End Developer. Now, I want to share my journey and help aspiring front end developers get their first jobs in the industry. Having reflected on what worked well for me (and what didn't), I want to use my work experiences and personal learning processes to help you acquire the skills <strong className="font-bold underline">you actually need</strong>.
            </p>
          </div>
        </div>
      </section>

      <svg className="wave" viewBox="-606.652 143.223 1905.641 147.109" xmlns="http://www.w3.org/2000/svg">
        <path  d="M 826.337 25.54 C 678.546 84.297 603.696 68.787 447.802 35.144 C 293.343 1.811 137.334 1.811 0 1.811 L 0 150 L 1920 150 L 1920 1.811 C 1739.535 -16.685 1566.81 182.718 1378.127 82.941 C 1189.444 -16.836 974.129 -33.218 826.337 25.54 Z" fill="#2B8275" transform="matrix(1, 0, 0, 1, -615.011647, 153.801998)"/>
      </svg>

      <section className="bg-main text-white px-3 py-6">
        <div className="wrapper flex justify-between">
          <div className="w-full">
            <h2 className="text-3xl text-center md:text-left mb-4">Launching The Front End Coach</h2>
            <div className="text-lg md:text-xl">
              <p className="max-w-750 m-auto md:my-3 md:mx-0">I've been through the process myself. Learnning to code isn't easy, and it's certainly not easy teaching yourself. Knowing where to start, what resources to use, and what to learn can become a real headache, fast. Trying to sift your way through the never ending see of guides, tutorials, and blog posts can be off putting, and quite frankly, damn right confusing.</p>
              <p className="mt-3">I've launched this site and support system to give you my no BS, honest advice and support, helping you to learn only what <strong className="font-bold underline">you need to learn</strong> and in the most time efficient way possible, helping to give you every chance at kick-starting your career as a front end developer.</p>
            </div>
          </div>
          <img className="hidden md:block md:relative w-full img-shadow" alt="Man riding a rocket ship" style={{maxWidth: '400px', right: '-16px'}}src="/images/rocket-boy.svg"/>
        </div>
      </section>
      <svg className="wave" viewBox="-605.588 168.766 1903.513 129.016" xmlns="http://www.w3.org/2000/svg">
        <path d="M 207.067 212.347 C 88.01 151.461 37.625 366.644 -167.21 260.215 C -298.471 192.014 -464.906 237.14 -615.012 293.548 L -615.012 145.359 L 1304.988 145.359 L 1304.988 293.548 C 1124.523 312.044 951.798 112.641 763.115 212.418 C 574.432 312.195 326.124 273.233 207.067 212.347 Z" style={{fill: 'rgb(43, 130, 117)'}}/>
      </svg>

      <section className="get-support wrapper pb-5 pt-5 px-3">
        <div className="mb-5">
          <div>
            <h2 className="text-3xl text-center">Get Support!</h2>
          </div>
          <div className="max-w-600 m-auto">
            <img className="m-auto mb-2 img-shadow block" style={{maxWidth: '340px'}} alt="" src="/images/team-work.svg"/>
            <p className="text-center mb-5 text-lg md:text-xl">Get started by <strong className="font-bold underline">joining our Discord community</strong>, reading some of the latest blog articles and heading over to the podcast for some real world insight and interviews. Alternatively, if you want to reach out to me privately for any tips or advice please do - I'll get back to you as soon as I can.</p>
            <a className="btn m-auto" href="./support.html">GET SUPPORT</a>
          </div>
        </div>
      </section>
      <Newsletter landing={false}/>
    </main>
  )
}