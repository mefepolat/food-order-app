import Input from "./form/Input";
import Title from "./ui/Title";


const Reservation = () => {
  return (
    <div className='container mx-auto py-12'>
        <Title className='text-[2.5rem] mb-10'>Book A Table</Title>
        <div className='flex justify-between flex-wrap gap-10'>
        
        <div className='lg:flex-1 w-full'>
            
            <div className='flex flex-col gap-y-3'>
                <Input type='email' placeholder='Email' />
                <Input type='email' placeholder='Email' />
                <Input type='email' placeholder='Email' />
            </div>
            <button className='btn-primary mt-4'>BOOK NOW</button>
        </div>
        <div className='lg:flex-1 !h-[384px] w-full'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11181.507501952728!2d-73.60898722582434!3d45.522621021097386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9197e145a5a3b%3A0x17fec15c3af704b!2sMile%20End%2C%20Montreal%2C%20QC!5e0!3m2!1sen!2sca!4v1690903277170!5m2!1sen!2sca" 
         allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
        </div>
        </div>
    </div>
  );
};

export default Reservation;