import Nav from "../nav_header/nav"
import Footer from "../footer/Footer"
export default function Contact() {
  return (
    <>
    <Nav></Nav>
    <section className="form w-full h-full flex flex-col items-center mt-12 justify-center pb-4">
    <h2 className='font-bold text-black text-4xl'>Projects</h2>
      <div className="formcont  flex flex-col ">
        <div className="form flex flex-col gap-8 ">
          <div className="formcontrol flex flex-col w-full gap-3">
          <label className='font-bold text-1xl ' htmlFor="">Name</label>
          <input  className='w-full pr-60 p-2 border-2 border-slate-600' type="text" name="" placeholder='Enter name' id="" />
          </div>
          <div className="formcontrol flex flex-col gap-3">
          <label htmlFor="" className='font-bold text-1xl'>Email</label>
          <input className='w-full pr-60 p-2 border-2 border-slate-600'  type="text" name="" placeholder='Enter Email' id="" />
          </div>
          <div className="formcontrol flex flex-col gap-3">
          <label htmlFor="" className='font-bold text-1xl'>Message</label>
          <textarea className='border-2 pr-60 p-2 pb-20 border-slate-600' name="" placeholder='Enter message' id=""></textarea>
          </div>
          <div className="formcontrol btn text-right ">
          <button className='bg-yellow-600 p-3 pl-7 pr-7 font-bold hover:bg-white hover:border border-yellow-300 transition ease-in  duration-75'>Submit</button>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    </>
  )
}
