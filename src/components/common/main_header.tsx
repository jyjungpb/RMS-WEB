import { images } from '@/utils/constants/images';

export default function MainHeader() {
  return (
    <header className="w-full h-[68px] bg-[#f7f8ff] flex items-center justify-center"> 
    <img
      className="w-[124px] object-cover py-3"    
      alt="Logo" src={images.loginLogo.src} 
    />
  </header>
 
 
  );
}