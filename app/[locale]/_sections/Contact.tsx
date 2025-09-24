// Next Intl
import { useTranslations } from 'next-intl';
// Components
import Title from '@/components/Title';
// import { useForm } from 'react-hook-form';
// // email js
// import { send, init } from '@emailjs/browser';
// // components
// import Title from '../components/Title';
// React Icons
import { FaWhatsapp , FaTelegramPlane } from "react-icons/fa";


function Contact() {

    const t = useTranslations("Contact")

    // useEffect(() => {
    //     init('Fp-bsNyp7ZHevdX6W');
    // } , [])

    // const { register , handleSubmit , reset } = useForm()

    // const onSubmit = (data) => {
    //     send('service_wkvbbdn', 'template_csp0owc', data)
    //     .then((response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //       reset(); // Reset the form after successful submission
    //     })
    //     .catch((err) => {
    //       console.error('FAILED...', err);
    //     });
    // }

    return (
        <section className="contact flex flex-col justify-center items-center pt-16" id="contact">
            <Title title={t('contactTitle')} secondaryTitle=""/>

            <div className='flex flex-col justify-between items-center gap-10 px-6 mt-2 rounded-xl'>
                <form
                    // onSubmit={handleSubmit(onSubmit)}
                    className='w-[400px] text-center max-[560px]:w-11/12'
                    data-aos='zoom-in'
                >
                    <div className="flex-col flex">
                        <input className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md' type="text" id='from_name' placeholder={t("inputName")} />
                        <input className='w-full text-[1.6rem] text-c2 mx-0 my-[0.7rem] p-4 bg-c4 rounded-md' type="email" id='from_email' placeholder={t("inputEmail")} />
                    </div>

                    <textarea className='bg-c4 w-full text-[1.6rem] text-c2 resize-none mx-0 my-[0.7rem] p-6 rounded-md' id='message' cols={30} rows={10} placeholder={t("inputMessage")} defaultValue={""} />
                    <input type="submit" value={t("send")} className="w-full p-4 rounded-md bg-c2 font-extrabold text-3xl cursor-pointer" />
                </form>

                <div className='max-[560px]:mt-10'>
                    <a data-aos='fade-up' data-aos-delay='100' className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://t.me/abdullahasson"><FaTelegramPlane /></a>
                    <a data-aos='fade-up' data-aos-delay='200' className="inline-flex cursor-pointer justify-center items-center w-16 h-16 bg-transparent border-c2 text-[2rem] text-c2 ml-0 mr-6 rounded-[50%] border-[0.2rem] border-solid hover:bg-c2 hover:text-c1" target="_blank" href="https://wa.me/963932680992"><FaWhatsapp /></a>
                </div>
            </div>



        </section>
    )
}

export default Contact